"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { TriangleAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { apiService } from "@/lib/api";

// ─── Schema ──────────────────────────────────────────────────────────────────

const formWaitlistSchema = z.object({
  nomeRegistro: z
    .string({ message: "Nome de registro é obrigatório." })
    .min(1, { message: "Nome de registro é obrigatório." })
    .max(150, {
      message: "Nome de registro deve ter no máximo 150 caracteres.",
    }),

  nomeSocial: z
    .string()
    .transform((v) => (v === "" ? undefined : v))
    .pipe(
      z
        .string()
        .min(1, { message: "Nome social deve ter ao menos 1 caractere." })
        .max(100, { message: "Nome social deve ter no máximo 100 caracteres." })
        .optional(),
    ),

  dataNascimento: z
    .string({ message: "Data de nascimento é obrigatória." })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Data de nascimento deve estar no formato DD/MM/AAAA.",
    })
    .transform((val) => {
      const [day, month, year] = val.split("/");
      return `${year}-${month}-${day}`;
    })
    .pipe(z.iso.date({ error: "Data de nascimento inválida." })),

  telefonePessoal: z
    .string({ message: "Telefone pessoal é obrigatório." })
    .min(1, { message: "Telefone pessoal é obrigatório." })
    .max(20, { message: "Telefone pessoal deve ter no máximo 20 caracteres." }),

  contatoEmergencia: z
    .string({ message: "Contato de emergência é obrigatório." })
    .min(1, { message: "Contato de emergência é obrigatório." })
    .max(20, {
      message: "Contato de emergência deve ter no máximo 20 caracteres.",
    }),

  CPF: z
    .string({ message: "CPF é obrigatório." })
    .transform((val) => val.replace(/\D/g, ""))
    .pipe(
      z
        .string()
        .length(11, { message: "CPF deve ter exatamente 11 dígitos." })
        .regex(/^\d{11}$/, { message: "CPF deve conter apenas números." }),
    ),

  enderecoRua: z
    .string({ message: "Rua é obrigatória." })
    .min(1, { message: "Rua é obrigatória." })
    .max(255, { message: "Rua deve ter no máximo 255 caracteres." }),

  enderecoNumero: z
    .string({ message: "Número é obrigatório." })
    .min(1, { message: "Número é obrigatório." })
    .max(10, { message: "Número deve ter no máximo 10 caracteres." }),

  enderecoBairro: z
    .string({ message: "Bairro é obrigatório." })
    .min(1, { message: "Bairro é obrigatório." })
    .max(100, { message: "Bairro deve ter no máximo 100 caracteres." }),

  enderecoCidade: z
    .string({ message: "Cidade é obrigatória." })
    .min(1, { message: "Cidade é obrigatória." })
    .max(100, { message: "Cidade deve ter no máximo 100 caracteres." }),

  enderecoEstado: z
    .string({ message: "Estado é obrigatório." })
    .length(2, { message: "Estado deve ter exatamente 2 caracteres (UF)." }),

  enderecoCEP: z
    .string({ message: "CEP é obrigatório." })
    .transform((val) => val.replace(/\D/g, ""))
    .pipe(
      z
        .string()
        .length(8, { message: "CEP deve ter exatamente 8 dígitos." })
        .regex(/^\d{8}$/, { message: "CEP deve conter apenas números." }),
    ),

  id_Genero: z
    .string({ message: "Selecione um gênero." })
    .transform(Number)
    .pipe(z.number().int().min(1, { message: "Selecione um gênero." })),

  id_Etnia: z
    .string({ message: "Selecione uma etnia." })
    .transform(Number)
    .pipe(z.number().int().min(1, { message: "Selecione uma etnia." })),

  id_Escolaridade: z
    .string({ message: "Selecione uma escolaridade." })
    .transform(Number)
    .pipe(z.number().int().min(1, { message: "Selecione uma escolaridade." })),
});

export type FormWaitlistData = z.infer<typeof formWaitlistSchema>;

// ─── Static options ───────────────────────────────────────────────────────────

const GENEROS = [
  { id: 1, nome: "Masculino" },
  { id: 2, nome: "Feminino" },
  { id: 3, nome: "Não-binário" },
  { id: 4, nome: "Prefiro não informar" },
];

const ETNIAS = [
  { id: 1, nome: "Branca" },
  { id: 2, nome: "Preta" },
  { id: 3, nome: "Parda" },
  { id: 4, nome: "Amarela" },
  { id: 5, nome: "Indígena" },
  { id: 6, nome: "Prefiro não informar" },
];

const ESCOLARIDADES = [
  { id: 1, nome: "Ensino Fundamental Incompleto" },
  { id: 2, nome: "Ensino Fundamental Completo" },
  { id: 3, nome: "Ensino Médio Incompleto" },
  { id: 4, nome: "Ensino Médio Completo" },
  { id: 5, nome: "Ensino Superior Incompleto" },
  { id: 6, nome: "Ensino Superior Completo" },
  { id: 7, nome: "Pós-graduação" },
  { id: 8, nome: "Mestrado" },
  { id: 9, nome: "Doutorado" },
];

// ─── Mask helpers ─────────────────────────────────────────────────────────────

const maskDate = (value: string) => {
  const n = value.replace(/\D/g, "").slice(0, 8);
  if (n.length <= 2) return n;
  if (n.length <= 4) return `${n.slice(0, 2)}/${n.slice(2)}`;
  return `${n.slice(0, 2)}/${n.slice(2, 4)}/${n.slice(4)}`;
};

const maskCPF = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

const maskPhone = (value: string) => {
  const n = value.replace(/\D/g, "").slice(0, 11);
  if (n.length <= 2) return n;
  if (n.length <= 7) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
};

const maskCEP = (value: string) => {
  const n = value.replace(/\D/g, "").slice(0, 8);
  if (n.length <= 5) return n;
  return `${n.slice(0, 5)}-${n.slice(5)}`;
};

// ─── Select className ─────────────────────────────────────────────────────────

const selectClassName = (invalid: boolean) =>
  cn(
    "bg-transparent text-(--color-dark) text-[14px] w-full min-w-0 h-10 px-2 border border-input rounded-lg outline-none transition-colors cursor-pointer",
    "focus-visible:ring-1 focus-visible:ring-(--color-dark) focus-visible:border-ring",
    "disabled:bg-input/50 disabled:cursor-not-allowed disabled:opacity-50",
    invalid && "border-red-500 ring-red-500 ring-1",
  );

// ─── Component ────────────────────────────────────────────────────────────────

const FormWaitlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registroInfo, setRegistroInfo] = useState<{
    id_Lista: string;
    posicaoNaLista: number;
  } | null>(null);

  const form = useForm<
    z.input<typeof formWaitlistSchema>,
    unknown,
    z.output<typeof formWaitlistSchema>
  >({
    resolver: zodResolver(formWaitlistSchema),
    defaultValues: {
      nomeRegistro: "",
      nomeSocial: "",
      dataNascimento: "",
      telefonePessoal: "",
      contatoEmergencia: "",
      CPF: "",
      enderecoRua: "",
      enderecoNumero: "",
      enderecoBairro: "",
      enderecoCidade: "",
      enderecoEstado: "",
      enderecoCEP: "",
      id_Genero: "0",
      id_Etnia: "0",
      id_Escolaridade: "0",
    },
  });

  const onSubmit = async (data: z.output<typeof formWaitlistSchema>) => {
    setIsLoading(true);

    const toastId = toast.loading("Enviando...", {
      description: "Registrando sua inscrição na lista de espera.",
    });

    try {
      const result = await apiService.waitlist.create(data);

      toast.success("Sucesso ao cadastrar", {
        id: toastId,
        duration: 2000,
      });

      setRegistroInfo({ id_Lista: result.id_Lista, posicaoNaLista: result.posicaoNaLista });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";
      toast.error("Erro ao cadastrar", {
        id: toastId,
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={registroInfo !== null}
        onOpenChange={(open) => { if (!open) setRegistroInfo(null); }}
      >
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-xl">Cadastro realizado!</DialogTitle>
            <DialogDescription>
              Seu cadastro na lista de espera foi registrado com sucesso. Você
              está na posição{" "}
              <strong className="text-foreground">
                {registroInfo?.posicaoNaLista}
              </strong>{" "}
              da fila.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 py-4">
            <p className="text-sm text-center text-muted-foreground">
              Código de acompanhamento
            </p>
            <div className="w-full rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 px-6 py-5 text-center">
              <span className="font-mono text-lg font-bold tracking-widest break-all select-all">
                {registroInfo?.id_Lista}
              </span>
            </div>

            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <TriangleAlertIcon className="mt-0.5 size-4 shrink-0" />
              <p>
                <strong>Guarde este código em um local seguro.</strong> Ele não
                será exibido novamente. Para recuperá-lo, entre em contato com a
                equipe da clínica.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => setRegistroInfo(null)}
            >
              Entendi, já salvei meu código
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <form
      id="form-waitlist"
      className="w-full"
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        {/* Nome de registro */}
        <Controller
          name="nomeRegistro"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="waitlist-nomeRegistro">
                Nome de registro
              </FieldLabel>
              <Input
                {...field}
                id="waitlist-nomeRegistro"
                placeholder="Nome completo conforme documento"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
                disabled={isLoading}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Nome social */}
        <Controller
          name="nomeSocial"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="waitlist-nomeSocial">
                Nome social{" "}
                <span className="text-(--color-medium) font-normal">
                  (opcional)
                </span>
              </FieldLabel>
              <Input
                {...field}
                id="waitlist-nomeSocial"
                placeholder="Nome pelo qual prefere ser chamado"
                autoComplete="off"
                aria-invalid={fieldState.invalid}
                disabled={isLoading}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Data de nascimento + CPF */}
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="dataNascimento"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-dataNascimento">
                  Data de nascimento
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-dataNascimento"
                  placeholder="DD/MM/AAAA"
                  maxLength={10}
                  inputMode="numeric"
                  autoComplete="bday"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(maskDate(e.target.value))}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="CPF"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-CPF">CPF</FieldLabel>
                <Input
                  {...field}
                  id="waitlist-CPF"
                  placeholder="000.000.000-00"
                  maxLength={14}
                  inputMode="numeric"
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(maskCPF(e.target.value))}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Telefone pessoal + Contato de emergência */}
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="telefonePessoal"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-telefonePessoal">
                  Telefone pessoal
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-telefonePessoal"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  inputMode="numeric"
                  autoComplete="tel"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(maskPhone(e.target.value))}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="contatoEmergencia"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-contatoEmergencia">
                  Contato de emergência
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-contatoEmergencia"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  inputMode="numeric"
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(maskPhone(e.target.value))}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Gênero + Etnia + Escolaridade */}
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="id_Genero"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-id_Genero">Gênero</FieldLabel>
                <select
                  id="waitlist-id_Genero"
                  className={selectClassName(fieldState.invalid)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="0" disabled>
                    Selecione
                  </option>
                  {GENEROS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.nome}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="id_Etnia"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-id_Etnia">Etnia</FieldLabel>
                <select
                  id="waitlist-id_Etnia"
                  className={selectClassName(fieldState.invalid)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="0" disabled>
                    Selecione
                  </option>
                  {ETNIAS.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.nome}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="id_Escolaridade"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-id_Escolaridade">
                  Escolaridade
                </FieldLabel>
                <select
                  id="waitlist-id_Escolaridade"
                  className={selectClassName(fieldState.invalid)}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="0" disabled>
                    Selecione
                  </option>
                  {ESCOLARIDADES.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.nome}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* CEP + Estado + Rua */}
        <div className="grid grid-cols-[1fr_80px_2fr] gap-4">
          <Controller
            name="enderecoCEP"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoCEP">CEP</FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoCEP"
                  placeholder="00000-000"
                  maxLength={9}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(maskCEP(e.target.value))}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="enderecoEstado"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoEstado">UF</FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoEstado"
                  placeholder="MG"
                  maxLength={2}
                  autoComplete="address-level1"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="enderecoRua"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoRua">
                  Logradouro
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoRua"
                  placeholder="Rua, Avenida, Travessa..."
                  autoComplete="street-address"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Número + Bairro + Cidade */}
        <div className="grid grid-cols-[80px_1fr_1fr] gap-4">
          <Controller
            name="enderecoNumero"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoNumero">
                  Número
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoNumero"
                  placeholder="123"
                  maxLength={10}
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="enderecoBairro"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoBairro">
                  Bairro
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoBairro"
                  placeholder="Bairro"
                  autoComplete="address-level3"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="enderecoCidade"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="waitlist-enderecoCidade">
                  Cidade
                </FieldLabel>
                <Input
                  {...field}
                  id="waitlist-enderecoCidade"
                  placeholder="Cidade"
                  autoComplete="address-level2"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Submit */}
        <Field orientation="horizontal" className="mt-2!">
          <Button
            form="form-waitlist"
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Entrar na lista de espera"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
    </>
  );
};

export default FormWaitlist;
