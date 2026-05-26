import { useSession } from "next-auth/react";

import { Role } from "@/lib/roles";

export function useRole() {
    const { data: session } = useSession();
    const roleId = Number(session?.user?.roleId);

    return {
        roleId,
        canAccess: (...roles: number[]) => roles.includes(roleId),
        is: (role: number) => roleId === role,
        isAdmin: roleId === Role.ADMIN,
        isSecretario: roleId === Role.SECRETARIO,
        isSupervisor: roleId === Role.SUPERVISOR,
        isEstagiario: roleId === Role.ESTAGIARIO,
    };
}
