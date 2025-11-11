"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Eye, Search, Filter, X } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { apiService } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

interface AuditLog {
  id_Log: string;
  id_Usuario_Executor: string;
  nome_Usuario_Executor: string;
  tipoAcao: string;
  entidade_Afetada: string;
  id_Entidade_Afetada: string | null;
  endereco_Ip: string;
  acessoEm: string;
  detalhes: {
    path: string;
    method: string;
    requestBody?: Record<string, unknown>;
    [key: string]: unknown;
  };
}

export function AuditTable() {
  const { data: session, status } = useSession();

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para filtros e pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState<string>("all");
  const [entityFilter, setEntityFilter] = useState<string>("all");
  const [filteredLogs, setFilteredLogs] = useState<AuditLog[]>([]);

  // Estados para visualização de detalhes
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [logToView, setLogToView] = useState<AuditLog | null>(null);

  // Carregar logs de auditoria
  useEffect(() => {
    async function fetchAuditLogs() {
      if (status !== "authenticated" || !session?.token) {
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getAuditLogs(session.token);
        setAuditLogs(data);
      } catch (err) {
        console.error("Erro ao carregar logs de auditoria:", err);
        const { title, description } = getErrorMessage(err);
        setError(description);
        toast.error(title, { description });
      } finally {
        setLoading(false);
      }
    }

    fetchAuditLogs();
  }, [session, status]);

  // useEffect para aplicar filtros
  useEffect(() => {
    filterLogs();
  }, [auditLogs, searchTerm, actionFilter, entityFilter]);

  const filterLogs = () => {
    let filtered = auditLogs;

    // Filtro por busca textual
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(log =>
        log.nome_Usuario_Executor.toLowerCase().includes(searchLower) ||
        log.tipoAcao.toLowerCase().includes(searchLower) ||
        log.entidade_Afetada.toLowerCase().includes(searchLower) ||
        log.endereco_Ip.includes(searchTerm)
      );
    }

    // Filtro por tipo de ação
    if (actionFilter !== "all") {
      filtered = filtered.filter(log => log.tipoAcao === actionFilter);
    }

    // Filtro por entidade afetada
    if (entityFilter !== "all") {
      filtered = filtered.filter(log => log.entidade_Afetada === entityFilter);
    }

    setFilteredLogs(filtered);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActionFilter("all");
    setEntityFilter("all");
  };

  const handleView = (logId: string) => {
    const log = auditLogs.find(l => l.id_Log === logId);
    if (log) {
      setLogToView(log);
      setViewDialogOpen(true);
    }
  };

  // Obter lista única de ações para o filtro
  const uniqueActions = Array.from(new Set(auditLogs.map(log => log.tipoAcao))).sort();
  
  // Obter lista única de entidades para o filtro
  const uniqueEntities = Array.from(new Set(auditLogs.map(log => log.entidade_Afetada))).sort();

  // Skeleton para carregamento da sessão
  if (status === "loading") {
    return (
      <div className="w-full">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  // Skeleton para carregamento dos logs
  if (loading) {
    return (
      <div className="w-full">
        <Table>
          <TableCaption>
            <Skeleton className="h-4 w-64 mx-auto" />
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>Ação</TableHead>
              <TableHead>Entidade</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-8 w-8 rounded mx-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline"
        >
          Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Barra de filtros */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Pesquisar por usuário, ação, entidade ou IP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={actionFilter} onValueChange={setActionFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por ação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as ações</SelectItem>
              {uniqueActions.map(action => (
                <SelectItem key={action} value={action}>{action}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={entityFilter} onValueChange={setEntityFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por entidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as entidades</SelectItem>
              {uniqueEntities.map(entity => (
                <SelectItem key={entity} value={entity}>{entity}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {(searchTerm || actionFilter !== "all" || entityFilter !== "all") && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="shrink-0"
            >
              <X className="h-4 w-4 mr-2" />
              Limpar
            </Button>
          )}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>
          Total: <span className="font-medium text-foreground">{auditLogs.length}</span>
        </span>
        <span>
          Filtrados: <span className="font-medium text-foreground">{filteredLogs.length}</span>
        </span>
      </div>

      {/* Tabela */}
      <Table>
        <TableCaption>
          {filteredLogs.length === 0 && searchTerm
            ? "Nenhum log encontrado com os filtros aplicados."
            : "Registro completo de ações realizadas no sistema."}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Usuário</TableHead>
            <TableHead>Ação</TableHead>
            <TableHead>Entidade</TableHead>
            <TableHead>IP</TableHead>
            <TableHead>Data/Hora</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLogs.map((log) => (
            <TableRow key={log.id_Log}>
              <TableCell>
                <div>
                  <p className="font-medium">{log.nome_Usuario_Executor}</p>
                  <p className="text-xs text-muted-foreground">{log.id_Usuario_Executor}</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="text-xs">
                  {log.tipoAcao}
                </Badge>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{log.entidade_Afetada}</p>
                  {log.id_Entidade_Afetada && (
                    <p className="text-xs text-muted-foreground">{log.id_Entidade_Afetada}</p>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {log.endereco_Ip}
                </code>
              </TableCell>
              <TableCell>
                {format(new Date(log.acessoEm), "dd/MM/yyyy HH:mm:ss", { locale: ptBR })}
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleView(log.id_Log)}
                  className="h-8 w-8 p-0"
                  title="Visualizar detalhes"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog de visualização de detalhes */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes do Log de Auditoria</DialogTitle>
            <DialogDescription>
              Informações completas sobre a ação realizada no sistema
            </DialogDescription>
          </DialogHeader>
          {logToView && (
            <div className="space-y-6">
              {/* Informações Básicas */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Informações Básicas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">ID do Log</Label>
                    <p className="font-mono text-xs bg-muted p-2 rounded">{logToView.id_Log}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Usuário Executor</Label>
                    <p className="font-medium">{logToView.nome_Usuario_Executor}</p>
                    <p className="text-xs text-muted-foreground">{logToView.id_Usuario_Executor}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Tipo de Ação</Label>
                    <Badge variant="secondary">{logToView.tipoAcao}</Badge>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Entidade Afetada</Label>
                    <p className="font-medium">{logToView.entidade_Afetada}</p>
                    {logToView.id_Entidade_Afetada && (
                      <p className="text-xs text-muted-foreground">{logToView.id_Entidade_Afetada}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Endereço IP</Label>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{logToView.endereco_Ip}</code>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Data e Hora</Label>
                    <p className="font-medium">
                      {format(new Date(logToView.acessoEm), "dd/MM/yyyy 'às' HH:mm:ss", { locale: ptBR })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Detalhes da Requisição */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Detalhes da Requisição</h4>
                <div className="space-y-3">
                  <div>
                    <Label className="text-muted-foreground">Endpoint</Label>
                    <p className="font-mono text-sm bg-muted p-2 rounded">{logToView.detalhes.path}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Método HTTP</Label>
                    <Badge variant="outline">{logToView.detalhes.method}</Badge>
                  </div>
                  {logToView.detalhes.requestBody && (
                    <div>
                      <Label className="text-muted-foreground">Dados da Requisição</Label>
                      <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                        {JSON.stringify(logToView.detalhes.requestBody, null, 2)}
                      </pre>
                    </div>
                  )}
                  {Object.keys(logToView.detalhes).filter(key => !['path', 'method', 'requestBody'].includes(key)).length > 0 && (
                    <div>
                      <Label className="text-muted-foreground">Dados Adicionais</Label>
                      <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                        {JSON.stringify(
                          Object.fromEntries(
                            Object.entries(logToView.detalhes).filter(([key]) => !['path', 'method', 'requestBody'].includes(key))
                          ),
                          null,
                          2
                        )}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setViewDialogOpen(false)}>
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
