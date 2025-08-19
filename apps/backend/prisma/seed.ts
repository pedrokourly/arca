import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando processo de seed...')
  
  // Inserir roles padrão apenas se não existirem
  const existingRoles = await prisma.role.count()
  if (existingRoles === 0) {
    await prisma.role.createMany({
      data: [
        {
          role: 'ADMIN',
          descricao: 'Administrador do sistema'
        },
        {
          role: 'SUPERVISOR',
          descricao: 'Supervisor de estagiários'
        },
        {
          role: 'ESTAGIARIO',
          descricao: 'Estagiário em psicologia'
        }
      ]
    })
    console.log('✅ Roles inseridas com sucesso!')
  } else {
    console.log('ℹ️  Roles já existem no banco de dados.')
  }

  // Inserir gêneros apenas se não existirem
  const existingGeneros = await prisma.genero.count()
  if (existingGeneros === 0) {
    await prisma.genero.createMany({
      data: [
        { nome: 'Masculino' },
        { nome: 'Feminino' },
        { nome: 'Não-binário' },
        { nome: 'Prefiro não informar' }
      ]
    })
    console.log('✅ Gêneros inseridos com sucesso!')
  } else {
    console.log('ℹ️  Gêneros já existem no banco de dados.')
  }

  // Inserir cores de pele apenas se não existirem
  const existingCoresPele = await prisma.corPele.count()
  if (existingCoresPele === 0) {
    await prisma.corPele.createMany({
      data: [
        { nome: 'Branca' },
        { nome: 'Preta' },
        { nome: 'Parda' },
        { nome: 'Amarela' },
        { nome: 'Indígena' }
      ]
    })
    console.log('✅ Cores de pele inseridas com sucesso!')
  } else {
    console.log('ℹ️  Cores de pele já existem no banco de dados.')
  }

  // Inserir escolaridades apenas se não existirem
  const existingEscolaridades = await prisma.escolaridade.count()
  if (existingEscolaridades === 0) {
    await prisma.escolaridade.createMany({
      data: [
        { nome: 'Ensino Fundamental Incompleto' },
        { nome: 'Ensino Fundamental Completo' },
        { nome: 'Ensino Médio Incompleto' },
        { nome: 'Ensino Médio Completo' },
        { nome: 'Ensino Superior Incompleto' },
        { nome: 'Ensino Superior Completo' },
        { nome: 'Pós-graduação' }
      ]
    })
    console.log('✅ Escolaridades inseridas com sucesso!')
  } else {
    console.log('ℹ️  Escolaridades já existem no banco de dados.')
  }

  // Inserir status de atendimento apenas se não existirem
  const existingStatusAtendimento = await prisma.statusAtendimento.count()
  if (existingStatusAtendimento === 0) {
    await prisma.statusAtendimento.createMany({
      data: [
        { nome: 'Agendado' },
        { nome: 'Em Andamento' },
        { nome: 'Concluído' },
        { nome: 'Cancelado' },
        { nome: 'Faltou' }
      ]
    })
    console.log('✅ Status de atendimento inseridos com sucesso!')
  } else {
    console.log('ℹ️  Status de atendimento já existem no banco de dados.')
  }

  console.log('🎉 Processo de seed finalizado!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })