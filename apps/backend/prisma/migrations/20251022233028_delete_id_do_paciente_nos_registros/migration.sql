/*
  Warnings:

  - You are about to drop the column `id_Lista` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.
  - You are about to drop the column `tipoProntuarioId_Tipo` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_id_Lista_fkey";

-- DropForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_tipoProntuarioId_Tipo_fkey";

-- AlterTable
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP COLUMN "id_Lista",
DROP COLUMN "tipoProntuarioId_Tipo";

-- AddForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" ADD CONSTRAINT "REGISTRO_CLINICOS_id_Tipo_fkey" FOREIGN KEY ("id_Tipo") REFERENCES "public"."TIPO_PRONTUARIO"("ID_Tipo") ON DELETE RESTRICT ON UPDATE CASCADE;
