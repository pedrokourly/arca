"use client";
import { WaitlistTable } from "@/components/waitlist/tableWaitlist";
import { Button } from "@/components/ui/button";
import { Plus, BookAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuditPage() {
  const router = useRouter();

  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookAlert className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Registro de Auditoria
                </h1>
                <p className="text-gray-600">
                  Tenha controle total sobre as ações realizadas no sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaitlistTable />
      </div>
    </div>
  );
}
