"use client";

import { useState, useEffect } from "react";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";

interface WaitlistStats {
    qntFila: number;
    ultimaAtualizacao: string;
}

export function useWaitlistStats() {
    const [stats, setStats] = useState<WaitlistStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                setIsLoading(true);
                setError(null);
                const data = await apiRequest(API_ENDPOINTS.waitlistStats);
                setStats(data);
            } catch (err) {
                console.error("Erro ao buscar estatísticas da lista de espera:", err);
                setError("Não foi possível carregar as estatísticas");
            } finally {
                setIsLoading(false);
            }
        }

        fetchStats();
    }, []);

    return { stats, isLoading, error };
}
