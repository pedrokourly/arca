// Import CSS
import '../globals.css';

// Import Libs
import type { Metadata } from 'next';

// Import Components
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/providers/auth-provider';

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
            <body cz-shortcut-listen="true" suppressHydrationWarning>
                <AuthProvider>
                    <main>{children}</main>
                    <Toaster position="bottom-center" />
                </AuthProvider>
            </body>
        </html>
    );
};
