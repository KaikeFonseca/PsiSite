'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
    register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
    async bootstrap({ strapi }) {
      const categories = [
        { name: 'Psicanálise', slug: 'psicanalise' },
        { name: 'Autonomia emocional', slug: 'autonomia-emocional' },
        { name: 'Relacionamentos', slug: 'relacionamentos' },
      ];

      const categoryDocuments = {};

      for (const category of categories) {
        let document = await strapi.documents('api::category.category').findFirst({
          filters: { slug: { $eq: category.slug } },
        });

        if (!document) {
          document = await strapi.documents('api::category.category').create({ data: category });
        }

        categoryDocuments[category.slug] = document;
      }

      const posts = [
        {
          title: 'Como funciona a psicanálise online',
          slug: 'como-funciona-a-psicanalise-online',
          excerpt:
            'Entenda como funciona o atendimento psicanalítico online e o que esperar das primeiras sessões.',
          content: `A psicanálise online oferece um espaço de escuta e elaboração que pode fazer parte da sua rotina com privacidade e flexibilidade. As sessões acontecem por videochamada, em um ambiente reservado, para que você possa falar sobre o que está vivendo com tranquilidade.

  Nas primeiras conversas, vamos conhecer suas questões, sua história e aquilo que motivou a busca por atendimento. Não é necessário chegar com tudo organizado ou saber exatamente o que dizer. A fala se constrói no processo, com tempo e acolhimento.

  O atendimento online pode ser uma alternativa para quem busca psicanálise em Sorocaba ou para pessoas que estão em outras cidades. O mais importante é encontrar um horário e um ambiente em que você se sinta confortável para cuidar de si.`,
          coverAlt: 'Atendimento psicanalítico online',
          authorName: 'Fernanda Gigliolla',
          category: categoryDocuments.psicanalise.documentId,
          seoTitle: 'Como funciona a psicanálise online | Fernanda Gigliolla',
          seoDescription:
            'Saiba como funciona a psicanálise online, como são as primeiras sessões e para quem esse formato de atendimento pode ser indicado.',
        },
        {
          title: 'Psicanalista em Sorocaba: quando procurar atendimento',
          slug: 'psicanalista-em-sorocaba-quando-procurar-atendimento',
          excerpt:
            'Alguns sinais mostram que pode ser importante buscar um espaço de escuta e cuidado emocional.',
          content: `Procurar uma psicanalista não precisa acontecer somente quando tudo parece difícil demais. Muitas pessoas buscam atendimento porque desejam compreender melhor seus sentimentos, escolhas e relações.

  Mudanças importantes na vida, ansiedade persistente, sensação de repetição nos relacionamentos, dificuldade para estabelecer limites ou sofrimento depois de uma relação abusiva podem ser motivos para iniciar um processo de escuta.

  O atendimento psicanalítico em Sorocaba e online oferece um espaço sem julgamentos para falar sobre essas experiências. A decisão de começar é pessoal, e uma conversa inicial pode ajudar a entender se essa abordagem faz sentido para você.`,
          coverAlt: 'Psicanálise e cuidado emocional em Sorocaba',
          authorName: 'Fernanda Gigliolla',
          category: categoryDocuments.psicanalise.documentId,
          seoTitle: 'Psicanalista em Sorocaba: quando procurar atendimento',
          seoDescription:
            'Conheça situações em que procurar uma psicanalista em Sorocaba ou atendimento online pode ajudar no cuidado emocional.',
        },
        {
          title: 'Como reconhecer sinais de um relacionamento abusivo',
          slug: 'como-reconhecer-sinais-de-um-relacionamento-abusivo',
          excerpt:
            'Controle, desvalorização e isolamento podem aparecer de formas sutis. Saiba o que observar.',
          content: `Relacionamentos abusivos nem sempre começam com situações claramente reconhecíveis. O controle pode aparecer como preocupação excessiva, a desvalorização pode ser apresentada como brincadeira e o isolamento pode acontecer aos poucos.

  Alguns sinais merecem atenção: medo constante de desagradar, necessidade de pedir autorização para decisões simples, críticas frequentes, controle financeiro, afastamento de amigos e familiares ou a sensação de que você precisa diminuir quem é para manter a relação.

  Reconhecer esses sinais não significa que você precisa tomar todas as decisões imediatamente. Buscar apoio de pessoas de confiança e encontrar um espaço profissional de escuta pode ajudar a compreender o que está acontecendo e a recuperar sua autonomia. Em situações de risco, procure também os serviços públicos e canais de proteção disponíveis na sua região.`,
          coverAlt: 'Reflexão sobre relacionamentos abusivos',
          authorName: 'Fernanda Gigliolla',
          category: categoryDocuments.relacionamentos.documentId,
          seoTitle: 'Sinais de um relacionamento abusivo | Fernanda Gigliolla',
          seoDescription:
            'Entenda sinais de controle, desvalorização e isolamento em relacionamentos abusivos e saiba quando buscar apoio.',
        },
        {
          title: 'Autonomia emocional: o que significa cuidar de si',
          slug: 'autonomia-emocional-o-que-significa-cuidar-de-si',
          excerpt:
            'Autonomia emocional não é deixar de precisar das pessoas. É construir uma relação mais consciente consigo.',
          content: `Autonomia emocional não significa resolver tudo sozinho ou deixar de contar com outras pessoas. Significa poder reconhecer o que você sente, perceber suas necessidades e participar das suas escolhas com mais consciência.

  Esse processo pode envolver aprender a dizer não, estabelecer limites, reconhecer padrões que causam sofrimento e diferenciar o desejo de agradar do desejo de construir relações mais recíprocas. São movimentos graduais, que não acontecem de uma hora para outra.

  A psicanálise pode oferecer um espaço para investigar a sua história e compreender como determinadas formas de se relacionar foram construídas. Com mais clareza, torna-se possível experimentar caminhos diferentes e fortalecer a própria voz.`,
          coverAlt: 'Autonomia emocional e cuidado de si',
          authorName: 'Fernanda Gigliolla',
          category: categoryDocuments['autonomia-emocional'].documentId,
          seoTitle: 'Autonomia emocional: o que significa cuidar de si',
          seoDescription:
            'Entenda o que é autonomia emocional e como o processo de escuta pode ajudar a construir limites e escolhas mais conscientes.',
        },
      ];

      for (const post of posts) {
        const exists = await strapi.documents('api::post.post').findFirst({
          filters: { slug: { $eq: post.slug } },
        });

        if (!exists) {
          await strapi.documents('api::post.post').create({
            data: post,
            status: 'published',
          });
        }
      }
    },
};
