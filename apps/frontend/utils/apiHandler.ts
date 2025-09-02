const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';

export const API_ENDPOINTS = {
  // Auth endpoints
  login: `${API_BASE_URL}/auth/login`,
  
  // User endpoints
  users: `${API_BASE_URL}/users`,
  
  // Waitlist endpoints
  waitlist: `${API_BASE_URL}/waitlist`,
  waitlistStats: `${API_BASE_URL}/waitlist/stats`,
} as const;

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro ${response.status}`);
  }

  return response.json();
}

// Helper functions for common API operations
export const apiService = {
  // User operations
  createUser: (userData: any, token: string) =>
    apiRequest(API_ENDPOINTS.users, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData),
    }),

  getUsers: (token: string) =>
    apiRequest(API_ENDPOINTS.users, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  updateUser: (userId: string, userData: any, token: string) =>
    apiRequest(`${API_ENDPOINTS.users}/${userId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData),
    }),

  deleteUser: (userId: string, token: string) =>
    apiRequest(`${API_ENDPOINTS.users}/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),

  // Auth operations
  login: (credentials: { email: string; password: string }) =>
    apiRequest(API_ENDPOINTS.login, {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  // Waitlist operations
  getWaitlist: (token: string) =>
    apiRequest(API_ENDPOINTS.waitlist, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  getWaitlistStats: (token: string) =>
    apiRequest(API_ENDPOINTS.waitlistStats, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};