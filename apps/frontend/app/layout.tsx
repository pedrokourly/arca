// Import CSS
import './globals.css';

// Import Components
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body cz-shortcut-listen="true">
                <Header />

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    );
};
