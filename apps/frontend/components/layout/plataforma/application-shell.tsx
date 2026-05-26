"use client";

import {
  Brain,
  CalendarDays,
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  FileText,
  GitBranch,
  LayoutDashboard,
  ListChecks,
  LogOut,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Role } from "@/lib/roles";
import { useRole } from "@/hooks/use-role";

type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  children?: NavItem[];
  roles?: number[];
};

type NavGroup = {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
  roles?: number[];
};

const navGroups: NavGroup[] = [
  {
    title: "Visão Geral",
    defaultOpen: true,
    items: [{ label: "Dashboard", icon: LayoutDashboard, href: "/plataforma" }],
  },
  {
    title: "Atendimento",
    defaultOpen: true,
    items: [
      { label: "Agenda", icon: CalendarDays, href: "/plataforma/agenda" },
      {
        label: "Lista de Espera",
        icon: ListChecks,
        href: "/plataforma/lista-espera",
      },
      {
        label: "Atendimentos",
        icon: ClipboardList,
        href: "/plataforma/atendimentos",
      },
      {
        label: "Fluxo de Atendimento",
        icon: GitBranch,
        href: "/plataforma/fluxo-atendimento",
        roles: [Role.ADMIN, Role.SECRETARIO],
      },
    ],
  },
  {
    title: "Pacientes",
    defaultOpen: true,
    items: [
      { label: "Pacientes", icon: Users, href: "/plataforma/pacientes" },
      { label: "Relatórios", icon: FileText, href: "/plataforma/relatorios" },
    ],
  },
  {
    title: "Administração",
    defaultOpen: false,
    roles: [Role.ADMIN],
    items: [
      { label: "Usuários", icon: User, href: "/plataforma/usuarios" },
      { label: "Auditoria", icon: ShieldCheck, href: "/plataforma/auditoria" },
    ],
  },
];

const SidebarLogo = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
        <Link href="/plataforma">
          <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
            <Brain className="size-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">ARCA</span>
            <span className="text-xs text-muted-foreground">
              Clínica de Psicologia
            </span>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const NavMenuItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={isActive}>
          <Link href={item.href}>
            <Icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible asChild defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton isActive={isActive}>
            <Icon className="size-4" />
            <span>{item.label}</span>
            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children!.map((child) => (
              <SidebarMenuSubItem key={child.label}>
                <SidebarMenuSubButton
                  asChild
                  isActive={pathname === child.href}
                >
                  <Link href={child.href}>{child.label}</Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavUser = () => {
  const { data: session } = useSession();
  const name = session?.user?.name ?? "Usuário";
  const email = session?.user?.email ?? "";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/plataforma/perfil">
                <User className="mr-2 size-4" />
                Meu Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              <LogOut className="mr-2 size-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { canAccess } = useRole();

  const visibleGroups = navGroups
    .filter((g) => !g.roles || canAccess(...g.roles))
    .map((g) => ({
      ...g,
      items: g.items.filter((item) => !item.roles || canAccess(...item.roles)),
    }));

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea className="min-h-0 flex-1">
          {visibleGroups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <NavMenuItem key={item.label} item={item} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

interface ApplicationShellProps {
  children?: React.ReactNode;
  className?: string;
}

export function ApplicationShell({
  children,
  className,
}: ApplicationShellProps) {
  const pathname = usePathname();

  const currentLabel =
    navGroups
      .flatMap((g) => g.items)
      .find(
        (item) =>
          item.href === pathname ||
          item.children?.some((c) => c.href === pathname),
      )?.label ?? "Dashboard";

  return (
    <SidebarProvider className={cn(className)}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 hidden data-[orientation=vertical]:h-4 md:block"
          />
          <Link
            href="/plataforma"
            className="flex items-center gap-2 md:hidden"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
              <Brain className="size-5 text-primary-foreground" />
            </div>
            <span className="font-semibold">ARCA</span>
          </Link>
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children ?? (
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
