/*
  Warnings:

  - You are about to drop the column `id_Paciente` on the `ATENDIMENTOS` table. All the data in the column will be lost.
  - You are about to drop the column `id_Paciente` on the `RELATORIOS_ALTA` table. All the data in the column will be lost.
  - You are about to drop the `CORES_PELE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PACIENTE` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_Lista` to the `ATENDIMENTOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Lista` to the `RELATORIOS_ALTA` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ATENDIMENTOS" DROP CONSTRAINT "ATENDIMENTOS_id_Paciente_fkey";

-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_Etnia_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_Escolaridade_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_Estagiario_Responsavel_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_Etnia_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_Genero_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_Supervisor_Responsavel_fkey";

-- DropForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" DROP CONSTRAINT "RELATORIOS_ALTA_id_Paciente_fkey";

-- AlterTable
ALTER TABLE "public"."ATENDIMENTOS" DROP COLUMN "id_Paciente",
ADD COLUMN     "id_Lista" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."RELATORIOS_ALTA" DROP COLUMN "id_Paciente",
ADD COLUMN     "id_Lista" UUID NOT NULL;

-- DropTable
DROP TABLE "public"."CORES_PELE";

-- DropTable
DROP TABLE "public"."PACIENTE";

-- CreateTable
CREATE TABLE "public"."ETNIA" (
    "ID_Etnia" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "ETNIA_pkey" PRIMARY KEY ("ID_Etnia")
);

-- AddForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" ADD CONSTRAINT "RELATORIOS_ALTA_id_Lista_fkey" FOREIGN KEY ("id_Lista") REFERENCES "public"."LISTA_ESPERA"("ID_Lista") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ATENDIMENTOS" ADD CONSTRAINT "ATENDIMENTOS_id_Lista_fkey" FOREIGN KEY ("id_Lista") REFERENCES "public"."LISTA_ESPERA"("ID_Lista") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_Etnia_fkey" FOREIGN KEY ("id_Etnia") REFERENCES "public"."ETNIA"("ID_Etnia") ON DELETE RESTRICT ON UPDATE CASCADE;
