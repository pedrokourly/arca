/*
  Warnings:

  - You are about to drop the column `id_Paciente` on the `LOGS_AUDITORIA` table. All the data in the column will be lost.
  - The `detalhes` column on the `LOGS_AUDITORIA` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `nome_Usuario_Executor` to the `LOGS_AUDITORIA` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `TipoAcao` on the `LOGS_AUDITORIA` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."LOGS_AUDITORIA" DROP CONSTRAINT "LOGS_AUDITORIA_id_Paciente_fkey";

-- AlterTable
ALTER TABLE "public"."LOGS_AUDITORIA" DROP COLUMN "id_Paciente",
ADD COLUMN     "endereco_Ip" VARCHAR(45),
ADD COLUMN     "entidade_Afetada" VARCHAR(50),
ADD COLUMN     "id_Entidade_Afetada" VARCHAR(36),
ADD COLUMN     "nome_Usuario_Executor" VARCHAR(50) NOT NULL,
DROP COLUMN "TipoAcao",
ADD COLUMN     "TipoAcao" VARCHAR(100) NOT NULL,
DROP COLUMN "detalhes",
ADD COLUMN     "detalhes" JSONB;

-- DropEnum
DROP TYPE "public"."TipoAcaoEnum";
