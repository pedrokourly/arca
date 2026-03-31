export function getErrorMessage(error: unknown): {
  title: string;
  description: string;
} {
  // Verificar se é um erro de rede/conexão
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return {
      title: "Servidor indisponível",
      description:
        "Não foi possível conectar ao servidor. Verifique sua conexão com a internet.",
    };
  }

  // Verificar se é um erro HTTP específico
  if (error instanceof Error) {
    // Mensagens específicas do backend
    if (error.message.includes("Já existe uma pessoa na lista de espera")) {
      return {
        title: "Pessoa já cadastrada",
        description:
          "Já existe uma pessoa na lista de espera com o mesmo nome, data de nascimento e telefone pessoal.",
      };
    }

    if (error.message.includes("Invalid UUID format")) {
      return {
        title: "Erro interno",
        description:
          "Formato de identificador inválido. Contate o suporte técnico.",
      };
    }

    if (error.message.includes("Waitlist entry not found")) {
      return {
        title: "Registro não encontrado",
        description: "O registro da lista de espera não foi encontrado.",
      };
    }

    if (error.message.includes("Error updating waitlist entry")) {
      return {
        title: "Erro ao atualizar",
        description: "Não foi possível atualizar o registro. Tente novamente.",
      };
    }

    // Erros por código HTTP
    if (error.message.includes("400")) {
      // Se contém mensagem específica de duplicação, use ela
      if (error.message.toLowerCase().includes("já existe")) {
        return {
          title: "Usuário já cadastrado",
          description: error.message,
        };
      }

      return {
        title: "Dados inválidos",
        description:
          "Verifique se todos os campos obrigatórios estão preenchidos corretamente.",
      };
    }

    if (error.message.includes("404")) {
      return {
        title: "Serviço não encontrado",
        description:
          "O serviço de lista de espera está temporariamente indisponível.",
      };
    }

    if (error.message.includes("422")) {
      return {
        title: "Erro de validação",
        description:
          "Alguns dados fornecidos são inválidos. Verifique os campos e tente novamente.",
      };
    }

    if (error.message.includes("500")) {
      return {
        title: "Erro interno do servidor",
        description:
          "Ocorreu um erro interno. Nossa equipe foi notificada. Tente novamente em alguns minutos.",
      };
    }

    if (error.message.includes("503")) {
      return {
        title: "Serviço temporariamente indisponível",
        description:
          "O sistema está em manutenção. Tente novamente em alguns minutos.",
      };
    }

    // Erros de timeout
    if (error.message.toLowerCase().includes("timeout")) {
      return {
        title: "Tempo limite excedido",
        description:
          "A requisição demorou muito para responder. Verifique sua conexão e tente novamente.",
      };
    }

    // Erros de CORS
    if (error.message.toLowerCase().includes("cors")) {
      return {
        title: "Erro de configuração",
        description:
          "Problema de configuração do servidor. Contate o administrador do sistema.",
      };
    }

    // Erros de validação do Prisma/Banco de dados
    if (error.message.toLowerCase().includes("unique constraint")) {
      return {
        title: "Dados duplicados",
        description:
          "Já existe um registro com essas informações. Verifique os dados informados.",
      };
    }

    if (error.message.toLowerCase().includes("foreign key constraint")) {
      return {
        title: "Erro de referência",
        description:
          "Alguns dados de referência são inválidos. Verifique os campos selecionados.",
      };
    }

    // Se a mensagem do erro contém informações úteis, use ela
    if (
      error.message &&
      error.message.length > 10 &&
      error.message.length < 200
    ) {
      return {
        title: "Erro ao processar solicitação",
        description: error.message,
      };
    }

    // Erro genérico com código
    const httpCodeMatch = error.message.match(/Erro (\d+)/);
    if (httpCodeMatch) {
      const code = httpCodeMatch[1];
      return {
        title: `Erro ${code}`,
        description: `Ocorreu um erro HTTP ${code}. Tente novamente ou contate o suporte.`,
      };
    }

    // Erro genérico com mensagem
    return {
      title: "Erro ao enviar inscrição",
      description: "Ocorreu um erro inesperado. Tente novamente.",
    };
  }

  // Erro completamente desconhecido
  return {
    title: "Erro inesperado",
    description:
      "Ocorreu um erro inesperado. Tente novamente ou contate o suporte técnico.",
  };
}
