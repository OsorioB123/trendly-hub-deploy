// Dados extraídos do calendário de conteúdo de junho
export const calendarData = [
  {
    id: '1',
    title: 'Lançamento de Produto',
    description: 'Anúncio do novo produto X com recursos inovadores',
    date: '2025-06-03',
    format: 'Post no Instagram',
    objective: 'Gerar expectativa para o lançamento',
    cta: 'Saiba mais no link da bio'
  },
  {
    id: '2',
    title: 'Webinar de Marketing Digital',
    description: 'Estratégias avançadas para aquisição de clientes',
    date: '2025-06-05',
    format: 'Live no YouTube',
    objective: 'Educar a audiência sobre marketing digital',
    cta: 'Inscreva-se agora'
  },
  {
    id: '3',
    title: 'Dicas de Produtividade',
    description: '5 ferramentas essenciais para otimizar seu fluxo de trabalho',
    date: '2025-06-10',
    format: 'Carrossel no Instagram',
    objective: 'Compartilhar conhecimento prático',
    cta: 'Salve para consultar depois'
  },
  {
    id: '4',
    title: 'Estudo de Caso',
    description: 'Como a empresa Y aumentou suas vendas em 200%',
    date: '2025-06-12',
    format: 'Blog post',
    objective: 'Demonstrar resultados e credibilidade',
    cta: 'Agende uma consultoria'
  },
  {
    id: '5',
    title: 'Promoção Relâmpago',
    description: '24 horas de desconto especial em todos os serviços',
    date: '2025-06-15',
    format: 'Stories + E-mail',
    objective: 'Impulsionar vendas de curto prazo',
    cta: 'Compre agora'
  },
  {
    id: '6',
    title: 'Podcast com Especialista',
    description: 'Entrevista com líder do setor sobre tendências futuras',
    date: '2025-06-18',
    format: 'Áudio + Blog post',
    objective: 'Posicionar a marca como autoridade',
    cta: 'Ouça o episódio completo'
  },
  {
    id: '7',
    title: 'Tutorial em Vídeo',
    description: 'Como utilizar todos os recursos da plataforma',
    date: '2025-06-20',
    format: 'Vídeo no YouTube',
    objective: 'Reduzir dúvidas e melhorar experiência do usuário',
    cta: 'Inscreva-se no canal'
  },
  {
    id: '8',
    title: 'Newsletter Semanal',
    description: 'Resumo das principais novidades do setor',
    date: '2025-06-25',
    format: 'E-mail',
    objective: 'Manter engajamento regular com a audiência',
    cta: 'Compartilhe com um amigo'
  },
  {
    id: '9',
    title: 'Enquete com Seguidores',
    description: 'Qual tema você gostaria de ver em nosso próximo conteúdo?',
    date: '2025-06-28',
    format: 'Stories do Instagram',
    objective: 'Coletar feedback e aumentar engajamento',
    cta: 'Participe da enquete'
  },
  {
    id: '10',
    title: 'Recapitulação Mensal',
    description: 'Os melhores momentos e conteúdos do mês',
    date: '2025-06-30',
    format: 'Reels + Newsletter',
    objective: 'Reforçar mensagens-chave e reconectar com a audiência',
    cta: 'Veja o que você perdeu'
  }
];

// Gera tarefas a partir dos eventos do calendário
export const generateTodos = () => {
  return calendarData.map(event => ({
    id: `todo-${event.id}`,
    title: `Preparar: ${event.title}`,
    description: `Criar conteúdo para ${event.format}: ${event.description}`,
    dueDate: new Date(new Date(event.date).getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 dias antes
    completed: false,
    priority: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
    relatedEvent: event.title
  }));
};

// Dados de faturas
export const invoiceData = {
  invoices: [
    {
      id: 'inv-001',
      amount: 297.00,
      dueDate: '2025-05-15',
      status: 'paid',
      paymentLink: '#',
      description: 'Plano Mensal - Trendly Marketing',
      period: 'Maio/2025'
    },
    {
      id: 'inv-002',
      amount: 297.00,
      dueDate: '2025-04-15',
      status: 'paid',
      paymentLink: '#',
      description: 'Plano Mensal - Trendly Marketing',
      period: 'Abril/2025'
    },
    {
      id: 'inv-003',
      amount: 297.00,
      dueDate: '2025-03-15',
      status: 'paid',
      paymentLink: '#',
      description: 'Plano Mensal - Trendly Marketing',
      period: 'Março/2025'
    }
  ],
  nextInvoice: {
    amount: 297.00,
    dueDate: '2025-06-15',
    paymentLink: 'https://payment.trendly.com/invoice/next',
    description: 'Plano Mensal - Trendly Marketing'
  }
};

// Dados de materiais educativos
export const educationMaterials = [
  {
    id: 'pdf-001',
    title: 'Guia de Marketing Digital 2025',
    description: 'Um guia completo sobre as tendências de marketing digital para 2025',
    totalPages: 45,
    progress: 0,
    url: '/materials/guia-marketing-digital-2025.pdf',
    date: '2025-05-10',
    category: 'Marketing'
  },
  {
    id: 'pdf-002',
    title: 'Estratégias de SEO Avançado',
    description: 'Técnicas avançadas para melhorar o posicionamento nos motores de busca',
    totalPages: 32,
    progress: 15,
    url: '/materials/estrategias-seo-avancado.pdf',
    date: '2025-04-22',
    category: 'SEO'
  },
  {
    id: 'pdf-003',
    title: 'Guia de Redes Sociais para Negócios',
    description: 'Como utilizar as redes sociais para impulsionar seu negócio',
    totalPages: 28,
    progress: 28,
    url: '/materials/guia-redes-sociais-negocios.pdf',
    date: '2025-03-15',
    category: 'Redes Sociais'
  },
  {
    id: 'pdf-004',
    title: 'Copywriting que Converte',
    description: 'Aprenda a escrever textos persuasivos que aumentam suas taxas de conversão',
    totalPages: 36,
    progress: 12,
    url: '/materials/copywriting-que-converte.pdf',
    date: '2025-05-05',
    category: 'Copywriting'
  },
  {
    id: 'pdf-005',
    title: 'Análise de Métricas e KPIs',
    description: 'Como analisar e interpretar métricas para tomar decisões estratégicas',
    totalPages: 40,
    progress: 0,
    url: '/materials/analise-metricas-kpis.pdf',
    date: '2025-05-18',
    category: 'Analytics'
  }
];
