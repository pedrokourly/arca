import { ApplicationShell } from "@/components/layout/plataforma/application-shell";

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
    return <ApplicationShell>{children}</ApplicationShell>;
}
