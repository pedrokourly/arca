/*
  Warnings:

  - You are about to drop the column `id_Estagiario` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.
  - You are about to drop the column `id_Supervisor` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.
  - Added the required column `id_Atendimento` to the `REGISTRO_CLINICOS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ATENDIMENTOS" DROP CONSTRAINT "ATENDIMENTOS_id_Estagiario_Executor_fkey";

-- DropForeignKey
ALTER TABLE "public"."ATENDIMENTOS" DROP CONSTRAINT "ATENDIMENTOS_id_Lista_fkey";

-- DropForeignKey
ALTER TABLE "public"."ATENDIMENTOS" DROP CONSTRAINT "ATENDIMENTOS_id_Status_fkey";

-- DropForeignKey
ALTER TABLE "public"."ATENDIMENTOS" DROP CONSTRAINT "ATENDIMENTOS_id_Supervisor_Executor_fkey";

-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_Escolaridade_fkey";

-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_Etnia_fkey";

-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_Genero_fkey";

-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_Status_fkey";

-- DropForeignKey
ALTER TABLE "public"."LOGS_AUDITORIA" DROP CONSTRAINT "LOGS_AUDITORIA_id_Usuario_Executor_fkey";

-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_id_Estagiario_fkey";

-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_id_Lista_fkey";

-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_id_Status_fkey";

-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_id_Supervisor_fkey";

-- DropForeignKey
ALTER TABLE "public"."USUARIOS" DROP CONSTRAINT "USUARIOS_ID_Role_fkey";

-- AlterTable
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP COLUMN "id_Estagiario",
DROP COLUMN "id_Supervisor",
ADD COLUMN     "id_Atendimento" UUID NOT NULL;
