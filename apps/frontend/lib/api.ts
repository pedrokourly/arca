const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";
const API_ENDPOINTS = { login: `${API_BASE_URL}/auth/login` } as const;

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(endpoint, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        let errorData;

        try {
            errorData = await response.json();
        } catch {
            errorData = { message: `HTTP ${response.status} - ${response.statusText}` };
        }

        const error = new Error(errorData.message || `Erro ${response.status}`) as Error & {
            status: number;
            userId?: string;
            userName?: string;
        };

        error.status = response.status;
        throw error;
    }

    return response.json();
};

export const apiService = {
    login: (credentials: { email: string; password: string }) =>
        apiRequest(API_ENDPOINTS.login, {
            method: "POST",
            body: JSON.stringify(credentials)
        })
};