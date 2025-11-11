'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
            <p className="text-muted-foreground mb-6">
              Ocorreu um erro inesperado. Por favor, tente novamente.
            </p>
            <button 
              onClick={() => reset()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
