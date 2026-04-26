// Directives
'use client';

// Import Libs
import { navLinksExternal, navLinksInternal } from '@/lib/navigation';
import Link from 'next/link';

// Import Icons
import { Brain, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="bg-(--color-dark) p-4! rounded-[20px]">
                <div className="container mx-auto! flex flex-col gap-8 px-4!">
                    <div className="flex flex-col gap-12 w-full px-4! py-8! lg:flex-row lg:px-0!">
                        <div className="flex flex-col w-full">
                            <h2 className="font-bold text-(--color-light) text-[16px]">Navegação</h2>
                            <hr className="bg-(--color-mdark) w-full h-0.5 mt-2! mb-6!" />

                            <div className="flex flex-col gap-4">
                                {navLinksExternal.map((link) => {
                                    return (
                                        <Link key={link.label} href={link.href} className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                            {link.icon && ( <link.icon size={16} /> )}
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <h2 className="font-bold text-(--color-light) text-[16px]">Plataforma</h2>
                            <hr className="bg-(--color-mdark) w-full h-0.5 mt-2! mb-6!" />

                            <div className="flex flex-col gap-4">
                                {navLinksInternal.map((link) => {
                                    return (
                                        <Link key={link.label} href={link.href} className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                            {link.icon && ( <link.icon size={16} /> )}
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <h2 className="font-bold text-(--color-light) text-[16px]">Contato</h2>
                            <hr className="bg-(--color-mdark) w-full h-0.5 mt-2! mb-6!" />

                            <div className="flex flex-col gap-4">
                                <Link href="mailto:contato@wizecode.com.br" target="_blank" rel="external" className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                    <Mail size={16} />contato@wizecode.com.br
                                </Link>

                                <Link href="https://wa.me/5534984392633" target="_blank" rel="external" className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                    <FaWhatsapp className="w-4 h-4" />(34) 9.8439-2633
                                </Link>

                                <Link href="https://www.instagram.com/wize.code/" target="_blank" rel="external" className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                    <FaInstagram className="w-4 h-4" />@wize.code
                                </Link>

                                <Link href="https://www.linkedin.com/company/wizecode-tech/" target="_blank" rel="external" className="flex items-center gap-2 text-(--color-light) text-[14px] transition-colors duration-250 hover:text-(--color-mlight)">
                                    <FaLinkedin className="w-4 h-4" />WizeCode Inovações e Tecnologia
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center gap-4 w-full py-4! lg:flex-row">
                        <div className="flex-1 flex lg:justify-start order-2 lg:order-1">
                            <p className=" text-(--color-mlight) text-[14px]">© 2026 Arca. Todos os direitos reservados.</p>
                        </div>

                        <div className="flex-1 flex lg:justify-center order-1 lg:order-2">
                            <Brain size={28} className="text-(--color-mlight) transition-colors duration-250 hover:text-(--color-light)" />
                        </div>

                        <div className="flex-1 flex lg:justify-end order-3">
                            <p className="text-(--color-mlight) text-[14px]">Desenvolvido por <Link href="https://www.wizecode.com.br" target="_blank" className="font-bold transition-colors duration-250 hover:text-(--color-light)">WizeCode</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;