export const Role = {
    ADMIN: 1,
    SECRETARIO: 2,
    SUPERVISOR: 3,
    ESTAGIARIO: 4,
} as const;

export type RoleId = (typeof Role)[keyof typeof Role];

export const RoleLabel: Record<RoleId, string> = {
    [Role.ADMIN]: "Coordenador",
    [Role.SECRETARIO]: "Secretário",
    [Role.SUPERVISOR]: "Supervisor",
    [Role.ESTAGIARIO]: "Estagiário",
};
