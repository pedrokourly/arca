'use client';

import { useSession } from 'next-auth/react';

import { Skeleton } from '@/components/ui/skeleton';

const DashboardPage = () => {
    const { data: session } = useSession();
    const firstName = session?.user?.name?.split(' ')[0] ?? '';

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-semibold">
                    Seja bem-vindo{firstName ? `, ${firstName}` : ''}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Aqui está um resumo do que está acontecendo na clínica.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-xl border bg-card p-4 flex flex-col gap-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-3 w-32" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-xl border bg-card p-4 flex flex-col gap-3">
                    <Skeleton className="h-5 w-40" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Skeleton className="size-8 rounded-full shrink-0" />
                            <div className="flex flex-col gap-1.5 flex-1">
                                <Skeleton className="h-3 w-full" />
                                <Skeleton className="h-3 w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl border bg-card p-4 flex flex-col gap-3">
                    <Skeleton className="h-5 w-40" />
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Skeleton className="h-3 w-12 shrink-0" />
                            <Skeleton className="h-3 flex-1" />
                            <Skeleton className="h-5 w-16 rounded-full shrink-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
