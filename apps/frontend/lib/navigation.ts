import { ElementType } from 'react';
import { ChevronRight } from 'lucide-react';

export type NavLink = {
    href: string;
    label: string;
    icon?: ElementType; 
};

export const navLinksExternal: NavLink[] = [
    { href: '/', label: 'Início', icon: ChevronRight },
    { href: '#', label: 'Inscrever-se', icon: ChevronRight },
    { href: '#', label: 'Consultar Posição', icon: ChevronRight }
];

export const navLinksInternal: NavLink[] = [
    { href: '#', label: 'Link 01', icon: ChevronRight },
    { href: '#', label: 'Link 02', icon: ChevronRight },
    { href: '#', label: 'Link 03', icon: ChevronRight },
    { href: '#', label: 'Link 04', icon: ChevronRight },
    { href: '#', label: 'Link 05', icon: ChevronRight }
];