/*
  Warnings:

  - You are about to drop the `DOCUMENTOS_USUARIO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DOCUMENTOS_USUARIO" DROP CONSTRAINT "DOCUMENTOS_USUARIO_ID_User_fkey";

-- AlterTable
ALTER TABLE "public"."LISTA_ESPERA" ADD COLUMN     "CPF" CHAR(11) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "public"."DOCUMENTOS_USUARIO";
