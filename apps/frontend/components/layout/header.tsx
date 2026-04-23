// Directives
'use client';

// Import Libs
import {
    usePathname
} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Imports Components
import {
    Button
} from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter
} from '@/components/ui/sheet';

// Import Icons
import {
    Brain,
    DoorOpen,
    Menu
} from 'lucide-react';

const Header = () => {
    // Routes
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/inscrever', label: 'Inscrever-se' },
        { href: '/consultar', label: 'Consultar Posição' }
    ];

    // OffCanvas Control
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSheetOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="bg-(--color-light) flex items-center justify-between px-4! py-5!">
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center gap-2">
                        <Brain size={36} color="#000000" />

                        <h1 className="font-bold text-[18px]">ARCA</h1>
                    </Link>
                </div>

                <NavigationMenu className="flex-1 hidden justify-center lg:flex">
                    <NavigationMenuList>
                        {navLinks.map((link) => {
                            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                            return (
                                <NavigationMenuItem key={link.label}>
                                    <NavigationMenuLink asChild>
                                        <Link href={link.href} className={`${isActive ? 'font-bold' : 'font-normal'}`}>{link.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex-1 hidden justify-end lg:flex">
                    <Button asChild variant="primary">
                        <Link href='/plataforma/login'>
                            <DoorOpen color="#FFFFFF" />Acesso Interno
                        </Link>
                    </Button>
                </div>

                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild className="flex lg:hidden">
                        <Menu className="cursor-pointer" />
                    </SheetTrigger>

                    <SheetContent className="bg-(--color-light) px-4! py-4!">
                        <SheetHeader>
                            <SheetTitle className="font-bold">MENU</SheetTitle>
                        </SheetHeader>

                        <nav className="flex-1 flex flex-col items-start gap-2">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

                                return (
                                    <SheetClose asChild key={link.href}>
                                        <Link href={link.href} className={`${isActive ? 'font-semibold' : 'font-normal'}`}>{link.label}</Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>

                        <SheetFooter>
                            <Button asChild variant="primary">
                                <Link href="/plataforma/login">
                                    <DoorOpen color="#FFFFFF" />Acesso Interno
                                </Link>
                            </Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
};

export default Header;