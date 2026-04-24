import { ElementType } from 'react';
import { ChevronRight } from 'lucide-react';

export type NavLink = {
    href: string;
    label: string;
    icon?: ElementType;
};

export const navLinksExternal: NavLink[] = [
    { href: '/', label: 'Início', icon: ChevronRight },
    { href: '/inscrever-se', label: 'Inscrever-se', icon: ChevronRight },
    { href: '/consultar', label: 'Consultar Posição', icon: ChevronRight }
];

export const navLinksInternal: NavLink[] = [
    { href: '/login', label: 'Login', icon: ChevronRight },
    { href: '/plataforma', label: 'Plataforma', icon: ChevronRight },
    { href: '/plataforma/lista-espera', label: 'Lista de Espera', icon: ChevronRight },
    { href: '/plataforma/fluxo', label: 'Fluxo de Atendimento', icon: ChevronRight },
    { href: '/plataforma/agenda', label: 'Agenda', icon: ChevronRight },
    { href: '/plataforma/atendimento', label: 'Atendimento', icon: ChevronRight },
    { href: '/plataforma/prontuario', label: 'Prontuário', icon: ChevronRight },
    { href: '/plataforma/relatorios', label: 'Relatórios', icon: ChevronRight },
    // { href: '/plataforma/perfil', label: 'Perfil', icon: ChevronRight },
    // { href: '/plataforma/usuários', label: 'Usuários', icon: ChevronRight },
    // { href: '/plataforma/auditoria', label: 'Auditoria', icon: ChevronRight }
];