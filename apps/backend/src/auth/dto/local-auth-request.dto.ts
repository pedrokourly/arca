export interface LocalAuthRequest {
    user: {
        id_User: string;
        nome: string;
        email: string;
        roleId: number;
    };
}
