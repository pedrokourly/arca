'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
        <p className="text-muted-foreground mb-6">
          Ocorreu um erro inesperado. Por favor, tente novamente.
        </p>
        <Button onClick={() => reset()}>Tentar novamente</Button>
      </div>
    </div>
  );
}
