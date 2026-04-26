// Import CSS
import '../globals.css';

// Import Libs
import type { Metadata } from 'next';

// Import Components
import { Toaster } from '@/components/ui/sonner';

// Metadata
export const metadata: Metadata = {
    title: 'Arca | WizeCode',
    description: '',
    keywords: ['Arca'],
    robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body cz-shortcut-listen="true">
                <main>{children}</main>

                <Toaster position="top-center" />
            </body>
        </html>
    );
};
