-- CreateEnum
CREATE TYPE "public"."StatusRelatorioEnum" AS ENUM ('PENDENTE', 'EMITIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "public"."TipoAcaoEnum" AS ENUM ('CREATION', 'VIEW', 'UPDATE', 'DELETION');

-- CreateTable
CREATE TABLE "public"."USUARIOS" (
    "ID_User" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "SenhaHash" VARCHAR(255) NOT NULL,
    "ID_Role" UUID NOT NULL,

    CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("ID_User")
);

-- CreateTable
CREATE TABLE "public"."ROLES" (
    "ID_Role" UUID NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "ROLES_pkey" PRIMARY KEY ("ID_Role")
);

-- CreateTable
CREATE TABLE "public"."PACIENTE" (
    "ID_Paciente" UUID NOT NULL,
    "nomeRegistro" VARCHAR(150) NOT NULL,
    "nomeSocial" VARCHAR(100),
    "dataNascimento" DATE NOT NULL,
    "id_Genero" SMALLINT NOT NULL,
    "id_CorPele" SMALLINT NOT NULL,
    "id_Escolaridade" SMALLINT NOT NULL,
    "telefonePessoal" VARCHAR(20) NOT NULL,
    "contatoEmergencia" VARCHAR(20) NOT NULL,
    "enderecoRua" VARCHAR(255) NOT NULL,
    "enderecoNumero" VARCHAR(10) NOT NULL,
    "enderecoBairro" VARCHAR(100) NOT NULL,
    "enderecoCidade" VARCHAR(100) NOT NULL,
    "enderecoEstado" CHAR(2) NOT NULL,
    "enderecoCEP" CHAR(8) NOT NULL,
    "dataInicioTratamento" DATE NOT NULL,
    "id_Estagiario_Responsavel" UUID NOT NULL,
    "id_Supervisor_Responsavel" UUID NOT NULL,

    CONSTRAINT "PACIENTE_pkey" PRIMARY KEY ("ID_Paciente")
);

-- CreateTable
CREATE TABLE "public"."DOCUMENTOS_USUARIO" (
    "ID_Documento" UUID NOT NULL,
    "ID_User" UUID NOT NULL,
    "nomeArquivo" VARCHAR(100) NOT NULL,
    "caminhoArquivo" VARCHAR(255) NOT NULL,
    "dataUpload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DOCUMENTOS_USUARIO_pkey" PRIMARY KEY ("ID_Documento")
);

-- CreateTable
CREATE TABLE "public"."RELATORIOS_ALTA" (
    "ID_Documento" UUID NOT NULL,
    "id_Paciente" UUID NOT NULL,
    "id_Estagiario" UUID NOT NULL,
    "id_Supervisor" UUID NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."StatusRelatorioEnum" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "RELATORIOS_ALTA_pkey" PRIMARY KEY ("ID_Documento")
);

-- CreateTable
CREATE TABLE "public"."LOGS_AUDITORIA" (
    "ID_LOG" UUID NOT NULL,
    "id_Usuario_Executor" UUID NOT NULL,
    "id_Paciente" UUID NOT NULL,
    "TipoAcao" "public"."TipoAcaoEnum" NOT NULL,
    "acessoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "detalhes" TEXT NOT NULL,

    CONSTRAINT "LOGS_AUDITORIA_pkey" PRIMARY KEY ("ID_LOG")
);

-- CreateTable
CREATE TABLE "public"."ATENDIMENTOS" (
    "ID_Atendimento" UUID NOT NULL,
    "dataHoraInicio" TIMESTAMP NOT NULL,
    "dataHoraFim" TIMESTAMP NOT NULL,
    "id_Paciente" UUID NOT NULL,
    "id_Estagiario_Executor" UUID NOT NULL,
    "id_Supervisor_Executor" UUID NOT NULL,
    "id_Status" SMALLINT NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "ATENDIMENTOS_pkey" PRIMARY KEY ("ID_Atendimento")
);

-- CreateTable
CREATE TABLE "public"."LISTA_ESPERA" (
    "ID_Lista" UUID NOT NULL,
    "nomeRegistro" VARCHAR(150) NOT NULL,
    "nomeSocial" VARCHAR(100),
    "dataNascimento" DATE NOT NULL,
    "telefonePessoal" VARCHAR(20) NOT NULL,
    "contatoEmergencia" VARCHAR(20) NOT NULL,
    "enderecoRua" VARCHAR(255) NOT NULL,
    "enderecoNumero" VARCHAR(10) NOT NULL,
    "enderecoBairro" VARCHAR(100) NOT NULL,
    "enderecoCidade" VARCHAR(100) NOT NULL,
    "enderecoEstado" CHAR(2) NOT NULL,
    "enderecoCEP" CHAR(8) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_Genero" SMALLINT NOT NULL,
    "id_CorPele" SMALLINT NOT NULL,
    "id_Escolaridade" SMALLINT NOT NULL,

    CONSTRAINT "LISTA_ESPERA_pkey" PRIMARY KEY ("ID_Lista")
);

-- CreateTable
CREATE TABLE "public"."GENERO" (
    "ID_Genero" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "GENERO_pkey" PRIMARY KEY ("ID_Genero")
);

-- CreateTable
CREATE TABLE "public"."CORES_PELE" (
    "ID_CorPele" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "CORES_PELE_pkey" PRIMARY KEY ("ID_CorPele")
);

-- CreateTable
CREATE TABLE "public"."ESCOLARIDADES" (
    "ID_Escolaridade" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "ESCOLARIDADES_pkey" PRIMARY KEY ("ID_Escolaridade")
);

-- CreateTable
CREATE TABLE "public"."STATUS_ATENDIMENTO" (
    "ID_Status" SMALLSERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,

    CONSTRAINT "STATUS_ATENDIMENTO_pkey" PRIMARY KEY ("ID_Status")
);

-- CreateIndex
CREATE UNIQUE INDEX "USUARIOS_email_key" ON "public"."USUARIOS"("email");

-- AddForeignKey
ALTER TABLE "public"."USUARIOS" ADD CONSTRAINT "USUARIOS_ID_Role_fkey" FOREIGN KEY ("ID_Role") REFERENCES "public"."ROLES"("ID_Role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_Genero_fkey" FOREIGN KEY ("id_Genero") REFERENCES "public"."GENERO"("ID_Genero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_CorPele_fkey" FOREIGN KEY ("id_CorPele") REFERENCES "public"."CORES_PELE"("ID_CorPele") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_Escolaridade_fkey" FOREIGN KEY ("id_Escolaridade") REFERENCES "public"."ESCOLARIDADES"("ID_Escolaridade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_Estagiario_Responsavel_fkey" FOREIGN KEY ("id_Estagiario_Responsavel") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PACIENTE" ADD CONSTRAINT "PACIENTE_id_Supervisor_Responsavel_fkey" FOREIGN KEY ("id_Supervisor_Responsavel") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DOCUMENTOS_USUARIO" ADD CONSTRAINT "DOCUMENTOS_USUARIO_ID_User_fkey" FOREIGN KEY ("ID_User") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" ADD CONSTRAINT "RELATORIOS_ALTA_id_Paciente_fkey" FOREIGN KEY ("id_Paciente") REFERENCES "public"."PACIENTE"("ID_Paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" ADD CONSTRAINT "RELATORIOS_ALTA_id_Estagiario_fkey" FOREIGN KEY ("id_Estagiario") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RELATORIOS_ALTA" ADD CONSTRAINT "RELATORIOS_ALTA_id_Supervisor_fkey" FOREIGN KEY ("id_Supervisor") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LOGS_AUDITORIA" ADD CONSTRAINT "LOGS_AUDITORIA_id_Usuario_Executor_fkey" FOREIGN KEY ("id_Usuario_Executor") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LOGS_AUDITORIA" ADD CONSTRAINT "LOGS_AUDITORIA_id_Paciente_fkey" FOREIGN KEY ("id_Paciente") REFERENCES "public"."PACIENTE"("ID_Paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ATENDIMENTOS" ADD CONSTRAINT "ATENDIMENTOS_id_Paciente_fkey" FOREIGN KEY ("id_Paciente") REFERENCES "public"."PACIENTE"("ID_Paciente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ATENDIMENTOS" ADD CONSTRAINT "ATENDIMENTOS_id_Estagiario_Executor_fkey" FOREIGN KEY ("id_Estagiario_Executor") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ATENDIMENTOS" ADD CONSTRAINT "ATENDIMENTOS_id_Supervisor_Executor_fkey" FOREIGN KEY ("id_Supervisor_Executor") REFERENCES "public"."USUARIOS"("ID_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ATENDIMENTOS" ADD CONSTRAINT "ATENDIMENTOS_id_Status_fkey" FOREIGN KEY ("id_Status") REFERENCES "public"."STATUS_ATENDIMENTO"("ID_Status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_Genero_fkey" FOREIGN KEY ("id_Genero") REFERENCES "public"."GENERO"("ID_Genero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_CorPele_fkey" FOREIGN KEY ("id_CorPele") REFERENCES "public"."CORES_PELE"("ID_CorPele") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LISTA_ESPERA" ADD CONSTRAINT "LISTA_ESPERA_id_Escolaridade_fkey" FOREIGN KEY ("id_Escolaridade") REFERENCES "public"."ESCOLARIDADES"("ID_Escolaridade") ON DELETE RESTRICT ON UPDATE CASCADE;
