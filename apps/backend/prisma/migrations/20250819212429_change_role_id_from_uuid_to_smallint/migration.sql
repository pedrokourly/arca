/*
  Warnings:

  - The values [CRIACAO,VISUALIZACAO,ATUALIZACAO,DELECAO] on the enum `TipoAcaoEnum` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `ROLES` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ID_Role` column on the `ROLES` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `ID_Role` on the `USUARIOS` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."TipoAcaoEnum_new" AS ENUM ('CREATION', 'VIEW', 'UPDATE', 'DELETION');
ALTER TABLE "public"."LOGS_AUDITORIA" ALTER COLUMN "TipoAcao" TYPE "public"."TipoAcaoEnum_new" USING ("TipoAcao"::text::"public"."TipoAcaoEnum_new");
ALTER TYPE "public"."TipoAcaoEnum" RENAME TO "TipoAcaoEnum_old";
ALTER TYPE "public"."TipoAcaoEnum_new" RENAME TO "TipoAcaoEnum";
DROP TYPE "public"."TipoAcaoEnum_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."USUARIOS" DROP CONSTRAINT "USUARIOS_ID_Role_fkey";

-- AlterTable
ALTER TABLE "public"."ROLES" DROP CONSTRAINT "ROLES_pkey",
DROP COLUMN "ID_Role",
ADD COLUMN     "ID_Role" SMALLSERIAL NOT NULL,
ADD CONSTRAINT "ROLES_pkey" PRIMARY KEY ("ID_Role");

-- AlterTable
ALTER TABLE "public"."USUARIOS" DROP COLUMN "ID_Role",
ADD COLUMN     "ID_Role" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."USUARIOS" ADD CONSTRAINT "USUARIOS_ID_Role_fkey" FOREIGN KEY ("ID_Role") REFERENCES "public"."ROLES"("ID_Role") ON DELETE RESTRICT ON UPDATE CASCADE;
