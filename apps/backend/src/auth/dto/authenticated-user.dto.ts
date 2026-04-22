export interface AuthenticatedUserDto {
    id: string;
    name: string;
    email: string;
    roleId: number;
    token: string;
}
