/*
  Warnings:

  - The primary key for the `REGISTRO_CLINICOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_Documento` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `REGISTRO_CLINICOS` table. All the data in the column will be lost.
  - The required column `ID_Registro` was added to the `REGISTRO_CLINICOS` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `ultimaAtualizacao` to the `REGISTRO_CLINICOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."REGISTRO_CLINICOS" DROP CONSTRAINT "REGISTRO_CLINICOS_pkey",
DROP COLUMN "ID_Documento",
DROP COLUMN "status",
ADD COLUMN     "ID_Registro" UUID NOT NULL,
ADD COLUMN     "id_Status" SMALLINT NOT NULL DEFAULT 1,
ADD COLUMN     "ultimaAtualizacao" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "REGISTRO_CLINICOS_pkey" PRIMARY KEY ("ID_Registro");

-- DropEnum
DROP TYPE "public"."StatusRelatorioEnum";

-- CreateTable
CREATE TABLE "public"."STATUS_PRONTUARIO" (
    "ID_Status" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "STATUS_PRONTUARIO_pkey" PRIMARY KEY ("ID_Status")
);

-- AddForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" ADD CONSTRAINT "REGISTRO_CLINICOS_id_Status_fkey" FOREIGN KEY ("id_Status") REFERENCES "public"."STATUS_PRONTUARIO"("ID_Status") ON DELETE RESTRICT ON UPDATE CASCADE;
