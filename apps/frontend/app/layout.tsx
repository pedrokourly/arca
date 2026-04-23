// Import CSS
import './globals.css';

// Import Libs
import type { Metadata } from 'next';

// Import Components
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
/* import { Toaster } from '@/components/ui/sonner'; */

// Metadata
export const metadata: Metadata = {
    title: 'Arca | WizeCode',
    // description: '',
    // keywords: ['Arca', ''],
    // robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body cz-shortcut-listen="true">
                <Header />

                <main>{children}</main>

                <Footer />

                {/* <Toaster position="bottom-right" expand={true} /> */}
            </body>
        </html>
    );
};
