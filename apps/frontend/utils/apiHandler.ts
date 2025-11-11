import {
  CreateTriagemMedicalRecordData,
  UpdateTriagemMedicalRecordData,
  CreatePsicoterapiaMedicalRecordData,
  UpdatePsicoterapiaMedicalRecordData,
} from '@/types/medicalRecord';
import {
  CreateUserData,
  UpdateUserData,
  CreateSessionData,
  UpdateSessionData,
} from '@/types/api';

const API_BASE_URL = "https://api.arca.kourlydigital.com.br";
const API_PORT = process.env.BACK_PORT || '3333';
console.log('API_BASE_URL:', API_BASE_URL);

const IS_USING_DOCKER = process.env.IS_USING_DOCKER === 'true';
console.log('IS_USING_DOCKER:', IS_USING_DOCKER);

const LOGIN_URL = IS_USING_DOCKER
  ? `http://arca_backend:${API_PORT}`
  : `${API_BASE_URL}`;

export const API_ENDPOINTS = {
  // Auth endpoints
  login: `${LOGIN_URL}/auth/login`,
  
  // User endpoints
  users: `${API_BASE_URL}/users`,
  
  // Waitlist endpoints
  waitlist: `${API_BASE_URL}/waitlist`,
  waitlistStats: `${API_BASE_URL}/waitlist/stats`,
  
  // Audit endpoints
  audit: `${API_BASE_URL}/audit`,
  
  // Session endpoints
  sessions: `${API_BASE_URL}/session`,
  
  // Medical Record endpoints
  medicalRecord: `${API_BASE_URL}/medical-record`,
  medicalRecordTriagem: `${API_BASE_URL}/medical-record/triagem`,
  medicalRecordPsicoterapia: `${API_BASE_URL}/medical-record/psicoterapia`,
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
  createUser: (userData: CreateUserData, token: string) => 
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

  updateUser: (userId: string, userData: UpdateUserData, token: string) =>
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
  login: (credentials: { email: string; password: string }, isServerSide = false) =>
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

  createSession: (sessionData: CreateSessionData, token: string) =>
    apiRequest(API_ENDPOINTS.sessions, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionData),
    }),

  updateSession: (sessionId: string, sessionData: UpdateSessionData, token: string) =>
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

  // Medical Record operations
  createMedicalRecordTriagem: (data: CreateTriagemMedicalRecordData, token: string) =>
    apiRequest(API_ENDPOINTS.medicalRecordTriagem, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }),

  updateMedicalRecordTriagem: (recordId: string, data: UpdateTriagemMedicalRecordData, token: string) =>
    apiRequest(`${API_ENDPOINTS.medicalRecordTriagem}/${recordId}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }),

  createMedicalRecordPsicoterapia: (data: CreatePsicoterapiaMedicalRecordData, token: string) =>
    apiRequest(API_ENDPOINTS.medicalRecordPsicoterapia, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }),

  updateMedicalRecordPsicoterapia: (recordId: string, data: UpdatePsicoterapiaMedicalRecordData, token: string) =>
    apiRequest(`${API_ENDPOINTS.medicalRecordPsicoterapia}/${recordId}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }),
};