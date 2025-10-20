/*
  Warnings:

  - You are about to drop the `RELATORIOS_ALTA` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" DROP CONSTRAINT "RELATORIOS_ALTA_id_Estagiario_fkey";

-- DropForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" DROP CONSTRAINT "RELATORIOS_ALTA_id_Lista_fkey";

-- DropForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" DROP CONSTRAINT "RELATORIOS_ALTA_id_Supervisor_fkey";

-- DropTable
DROP TABLE "public"."RELATORIOS_ALTA";

-- CreateTable
CREATE TABLE "public"."REGISTRO_CLINICOS" (
    "ID_Documento" UUID NOT NULL,
    "id_Lista" UUID NOT NULL,
    "id_Estagiario" UUID NOT NULL,
    "id_Supervisor" UUID NOT NULL,
    "conteudo" JSONB NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."StatusRelatorioEnum" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "REGISTRO_CLINICOS_pkey" PRIMARY KEY ("ID_Documento")
);

-- AddForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" ADD CONSTRAINT "REGISTRO_CLINICOS_id_Lista_fkey" FOREIGN KEY ("id_Lista") REFERENCES "public"."LISTA_ESPERA"("ID_Lista") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" ADD CONSTRAINT "REGISTRO_CLINICOS_id_Estagiario_fkey" FOREIGN KEY ("id_Estagiario") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."REGISTRO_CLINICOS" ADD CONSTRAINT "REGISTRO_CLINICOS_id_Supervisor_fkey" FOREIGN KEY ("id_Supervisor") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;
