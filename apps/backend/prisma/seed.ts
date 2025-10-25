import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

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
          role: 'SECRETARIO',
          descricao: 'Secretário administrativo'
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

  // Inserir etnia apenas se não existirem
  const existingCoresPele = await prisma.etnia.count()
  if (existingCoresPele === 0) {
    await prisma.etnia.createMany({
      data: [
        { nome: 'Branca' },
        { nome: 'Preta' },
        { nome: 'Parda' },
        { nome: 'Amarela' },
        { nome: 'Indígena' }
      ]
    })
    console.log('✅ Etnias inseridas com sucesso!')
  } else {
    console.log('ℹ️  Etnias já existem no banco de dados.')
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

  // Inserir status da lista de espera apenas se não existirem
  const existingStatusListaEspera = await prisma.statusListaEspera.count()
  if (existingStatusListaEspera === 0) {
    await prisma.statusListaEspera.createMany({
      data: [
        { nome: 'Em Espera' },
        { nome: 'Em Triagem' },
        { nome: 'Triagem aprovada' },
        { nome: 'Em Psicoterapia' },
        { nome: 'Recebeu Alta' },
        { nome: 'Encaminhado' },
        { nome: 'Desativado' }
      ]
    })
    console.log('✅ Status da lista de espera inseridos com sucesso!')
  } else {
    console.log('ℹ️  Status da lista de espera já existem no banco de dados.')
  }

  // Inserir status de atendimento apenas se não existirem
  const existingStatusAtendimento = await prisma.statusAtendimento.count()
  if (existingStatusAtendimento === 0) {
    await prisma.statusAtendimento.createMany({
      data: [
        { nome: 'Agendado' },
        { nome: 'Em Andamento' },
        { nome: 'Concluído' },
        { nome: 'Cancelado' }
      ]
    })
    console.log('✅ Status de atendimento inseridos com sucesso!')
  } else {
    console.log('ℹ️  Status de atendimento já existem no banco de dados.')
  }

  // Inserir status de atendimento apenas se não existirem
  const existingTipoAtendimento = await prisma.tipoAtendimento.count()
  if (existingTipoAtendimento === 0) {
    await prisma.tipoAtendimento.createMany({
      data: [
        { nome: 'Triagem' },
        { nome: 'Psicoterapia' }
      ]
    })
    console.log('✅ Tipo de atendimento inseridos com sucesso!')
  } else {
    console.log('ℹ️  Tipo de atendimento já existem no banco de dados.')
  }

  // Inserir status de Prontuario apenas se não existirem
  const existingStatusProntuario = await prisma.statusProntuario.count()
  if (existingStatusProntuario === 0) {
    await prisma.statusProntuario.createMany({
      data: [
        { nome: 'Em aprovação' },
        { nome: 'Aprovado' }
      ]
    })
    console.log('✅ Status de Prontuario inseridos com sucesso!')
  } else {
    console.log('ℹ️  Status de Prontuario já existem no banco de dados.')
  }

  // Inserir Tipo de Prontuario apenas se não existirem
  const existingTipoProntuario = await prisma.tipoProntuario.count()
  if (existingTipoProntuario === 0) {
    await prisma.tipoProntuario.createMany({
      data: [
        { nome: 'Triagem' },
        { nome: 'Evolucao' },
        { nome: 'Alta' },
        { nome: 'Encaminhamento' }
      ]
    })
    console.log('✅ Tipos de Prontuario inseridos com sucesso!')
  } else {
    console.log('ℹ️  Tipos de Prontuario já existem no banco de dados.')
  }

  // Inserir usuários padrão para cada tipo de acesso apenas se não existirem
  const usuarios = [
    {
      nome: 'Administrador do Sistema',
      email: 'admin@arca.com',
      senha: 'Admin123!',
      roleId: 1, // ADMIN
      description: 'Usuário administrador'
    },
    {
      nome: 'Secretário Padrão',
      email: 'secretario@arca.com',
      senha: 'Secretario123!',
      roleId: 2, // SECRETARIO
      description: 'Usuário secretário'
    },
    {
      nome: 'Supervisor Padrão',
      email: 'supervisor@arca.com',
      senha: 'Supervisor123!',
      roleId: 3, // SUPERVISOR
      description: 'Usuário supervisor'
    },
    {
      nome: 'Estagiário Padrão',
      email: 'estagiario@arca.com',
      senha: 'Estagiario123!',
      roleId: 4, // ESTAGIARIO
      description: 'Usuário estagiário'
    }
  ]

  for (const usuario of usuarios) {
    const existingUser = await prisma.usuario.findFirst({
      where: {
        email: usuario.email
      }
    })
    
    if (!existingUser) {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(usuario.senha, salt)
      
      await prisma.usuario.create({
        data: {
          nome: usuario.nome,
          email: usuario.email,
          senhaHash: hashedPassword,
          roleId: usuario.roleId
        }
      })
      console.log(`✅ ${usuario.description} criado com sucesso!`)
      console.log(`📧 Email: ${usuario.email}`)
      console.log(`🔑 Senha: ${usuario.senha}`)
    } else {
      console.log(`ℹ️  ${usuario.description} já existe no banco de dados.`)
    }
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