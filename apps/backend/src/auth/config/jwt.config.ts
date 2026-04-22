import { registerAs } from '@nestjs/config';

const ttl = Number(process.env.JWT_TTL);

export default registerAs('jwt', () => {
    return {
        secret: process.env.JWT_SECRET,
        audience: process.env.JWT_TOKEN_AUDIENCE,
        issuer: process.env.JWT_TOKEN_ISSUER,
        jwtTtl: Number.isFinite(ttl) && ttl > 0 ? ttl : 3600,
    };
});
