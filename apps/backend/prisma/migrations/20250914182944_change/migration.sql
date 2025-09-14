/*
  Warnings:

  - The primary key for the `CORES_PELE` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_CorPele` on the `CORES_PELE` table. All the data in the column will be lost.
  - You are about to drop the column `id_CorPele` on the `LISTA_ESPERA` table. All the data in the column will be lost.
  - You are about to drop the column `id_CorPele` on the `PACIENTE` table. All the data in the column will be lost.
  - Added the required column `id_Etnia` to the `LISTA_ESPERA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Etnia` to the `PACIENTE` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."LISTA_ESPERA" DROP CONSTRAINT "LISTA_ESPERA_id_CorPele_fkey";

-- DropForeignKey
ALTER TABLE "public"."PACIENTE" DROP CONSTRAINT "PACIENTE_id_CorPele_fkey";

-- AlterTable
ALTER TABLE "public"."CORES_PELE" DROP CONSTRAINT "CORES_PELE_pkey",
DROP COLUMN "ID_CorPele",
ADD COLUMN     "ID_Etnia" SMALLSERIAL NOT NULL,
ADD CONSTRAINT "CORES_PELE_pkey" PRIMARY KEY ("ID_Etnia");

-- AlterTable
ALTER TABLE "public"."LISTA_ESPERA" DROP COLUMN "id_CorPele",
ADD COLUMN     "id_Etnia" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "public"."PACIENTE" DROP COLUMN "id_CorPele",
ADD COLUMN     "id_Etnia" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_Etnia_fkey" FOREIGN KEY ("id_Etnia") REFERENCES "public"."CORES_PELE"("ID_Etnia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_Etnia_fkey" FOREIGN KEY ("id_Etnia") REFERENCES "public"."CORES_PELE"("ID_Etnia") ON DELETE RESTRICT ON UPDATE CASCADE;
