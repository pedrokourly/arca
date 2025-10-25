const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';

export const API_ENDPOINTS = {
  // Auth endpoints
  login: `${API_BASE_URL}/auth/login`,
  
  // User endpoints
  users: `${API_BASE_URL}/users`,
  
  // Waitlist endpoints
  waitlist: `${API_BASE_URL}/waitlist`,
  waitlistStats: `${API_BASE_URL}/waitlist/stats`,
  
  // Audit endpoints
  audit: `${API_BASE_URL}/audit`,
  
  // Session endpoints
  sessions: `${API_BASE_URL}/session`,
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
    
    // Para conflitos (409), inclui dados extras se disponíveis
    if (response.status === 409 && errorData.userId) {
      error.userId = errorData.userId;
      error.userName = errorData.userName;
    }
    
    throw error;
  }

  return response.json();
}

// Helper functions for common API operations
export const apiService = {
  // User operations
  createUser: (userData: any, token: string) => 
    apiRequest(API_ENDPOINTS.users, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    }),

  getUsers: (token: string) =>
    apiRequest(API_ENDPOINTS.users, {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }),

  updateUser: (userId: string, userData: any, token: string) =>
    apiRequest(`${API_ENDPOINTS.users}/${userId}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    }),

  deleteUser: (userId: string, token: string) =>
    apiRequest(`${API_ENDPOINTS.users}/${userId}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${token}`
      },
    }),

  reactivateUser: (userId: string, token: string) =>
    apiRequest(`${API_ENDPOINTS.users}/${userId}/reactivate`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
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

  // Audit operations
  getAuditLogs: (token: string) =>
    apiRequest(API_ENDPOINTS.audit, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  // Session operations
  getSessions: (token: string) =>
    apiRequest(API_ENDPOINTS.sessions, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  createSession: (sessionData: any, token: string) =>
    apiRequest(API_ENDPOINTS.sessions, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionData),
    }),

  updateSession: (sessionId: string, sessionData: any, token: string) =>
    apiRequest(`${API_ENDPOINTS.sessions}/${sessionId}`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionData),
    }),

  deleteSession: (sessionId: string, token: string) =>
    apiRequest(`${API_ENDPOINTS.sessions}/${sessionId}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${token}`
      },
    }),
};