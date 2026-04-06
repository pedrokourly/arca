import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class CryptoService {
  private readonly algorithm = 'aes-256-gcm';
  private readonly key: Buffer;

  constructor(private configService: ConfigService) {
    const keyHex = this.configService.getOrThrow<string>('ENCRYPTION_KEY');

    if (keyHex.length !== 64) {
      throw new Error('ENCRYPTION_KEY deve ter exatamente 64 caracteres hex (32 bytes).');
    }

    if (!/^[0-9a-fA-F]{64}$/.test(keyHex)) {
      throw new Error('ENCRYPTION_KEY deve conter apenas caracteres hexadecimais válidos (0-9, a-f, A-F).');
    }

    this.key = Buffer.from(keyHex, 'hex');
  }

  encrypt(data: object): string {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    const json = JSON.stringify(data);
    const encrypted = Buffer.concat([cipher.update(json, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();

    // Formato: iv:authTag:dadoCifrado (tudo em hex)
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted.toString('hex')}`;
  }

  decryptConteudo(conteudo: unknown): object {
    if (typeof conteudo === 'string') return this.decrypt(conteudo);
    return conteudo as object;
  }

  decrypt(encryptedString: string): object {
    const [ivHex, authTagHex, encryptedHex] = encryptedString.split(':');

    if (!ivHex || !authTagHex || !encryptedHex) {
      throw new Error('Formato de dado criptografado inválido.');
    }

    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    decipher.setAuthTag(authTag); // se o dado foi adulterado, isso lança exceção

    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return JSON.parse(decrypted.toString('utf8')) as object;
  }
}
