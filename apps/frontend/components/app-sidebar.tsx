"use client";

import * as React from "react";
import {
  GalleryVerticalEnd,
  ClipboardList,
  ShieldUser,
  Shield,
  CalendarClock,
  BookMarked
} from "lucide-react";
import { usePermissions } from "@/hooks/usePermissions";

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { canAccessUsers, canCreateUsers, canSeeAudit, canSeeNavSystem } = usePermissions();

  // Filtrar itens do menu de usuários baseado nas permissões
  const getUsersMenuItems = () => {
    const items = [];
    
    if (canAccessUsers()) {
      items.push({
        title: "Consulta",
        url: "/dashboard/usuarios",
      });
    }
    
    if (canCreateUsers()) {
      items.push({
        title: "Cadastro",
        url: "/dashboard/usuarios/cadastro",
      });
    }
    
    return items;
  };

// This is sample data.
const data = {
  user: {
    name: "Exemplo",
    email: "mail@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navHeader: {
    name: "Arca",
    logo: GalleryVerticalEnd,
    subtitle: "Dashboard",
  },
  navMain: [
    {
      title: "Agenda",
      url: "/dashboard/agenda",
      icon: BookMarked
    },
    {
      title: "Lista de Espera",
      url: "#",
      icon: ClipboardList,
      isActive: true,
      items: [
        {
          title: "Consulta",
          url: "/dashboard/lista-espera",
        },
        {
          title: "Cadastro",
          url: "/dashboard/lista-espera/cadastro",
        }
      ],
    },

    {
      title: "Atendimentos",
      url: "#",
      icon: CalendarClock,
      isActive: true,
      items: [
        {
          title: "Consulta",
          url: "/dashboard/atendimento",
        },
        {
          title: "Cadastro",
          url: "/dashboard/atendimento/cadastro",
        }
      ],
    },

    ...(canAccessUsers() ? [{
      title: "Usuários",
      url: "#",
      icon: ShieldUser,
      isActive: true,
      items: getUsersMenuItems(),
    }] : []),
  ],
  
  NavSystem: [
    ...(canSeeAudit() ? [{
      title: "Registo de Auditoria",
      url: "/dashboard/auditoria",
      icon: Shield
    }] : []),
  ]
};
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
                <data.navHeader.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{data.navHeader.name}</span>
                <span className="truncate text-xs">{data.navHeader.subtitle}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {canSeeNavSystem() && (
          <NavMain 
            items={data.NavSystem} 
            label="Sistema"
            className="group-data-[collapsible=icon]:hidden"
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
