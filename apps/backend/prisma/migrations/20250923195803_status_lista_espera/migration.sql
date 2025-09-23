/*
  Warnings:

  - You are about to drop the column `isActive` on the `LISTA_ESPERA` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."LISTA_ESPERA" DROP COLUMN "isActive",
ADD COLUMN     "id_Status" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "public"."STATUS_LISTA_ESPERA" (
    "ID_Status" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "STATUS_LISTA_ESPERA_pkey" PRIMARY KEY ("ID_Status")
);

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_Status_fkey" FOREIGN KEY ("id_Status") REFERENCES "public"."STATUS_LISTA_ESPERA"("ID_Status") ON DELETE RESTRICT ON UPDATE CASCADE;
