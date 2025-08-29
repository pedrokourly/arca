"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  ClipboardList,
  ShieldUser,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Arca",
    logo: GalleryVerticalEnd,
    plan: "Dashboard",
  },
  navMain: [
    {
      title: "Lista de Espera",
      url: "#",
      icon: ClipboardList,
      isActive: true,
      items: [
        {
          title: "Consulta",
          url: "/dashboard/lista-espera/consulta",
        },
        {
          title: "Cadastro",
          url: "/dashboard/lista-espera/cadastro",
        }
      ],
    },
    {
      title: "Usuários",
      url: "#",
      icon: ShieldUser,
      isActive: true,
      items: [
        {
          title: "Lista",
          url: "/dashboard/usuarios",
        },
        {
          title: "Criar",
          url: "/dashboard/usuarios/criar",
        },
        {
          title: "Permissões",
          url: "/dashboard/usuarios/permissoes",
        }
      ],
    }
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <data.teams.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{data.teams.name}</span>
                <span className="truncate text-xs">{data.teams.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
