// Central registry of all services for SEO/GEO optimization
// Used by: sitemap.ts, robots.ts, Breadcrumbs, SiloNavigation, generateMetadata

export type ServicePillar = 'incapacidade' | 'bpc' | 'aposentadoria' | 'pensao' | 'revisao' | 'planejamento' | 'outro';

export interface ServiceInfo {
  slug: string;
  shortTitle: string;
  title: string;
  description: string;
  pillar: ServicePillar;
  pillarLabel: string;
}

export const SITE_URL = 'https://www.advogadasprev.com.br';

export const PILLAR_LABELS: Record<ServicePillar, string> = {
  incapacidade: 'Benefícios por Incapacidade',
  bpc: 'BPC/LOAS',
  aposentadoria: 'Aposentadorias',
  pensao: 'Pensão e Proteção Familiar',
  revisao: 'Revisões e Recursos',
  planejamento: 'Planejamento Previdenciário',
  outro: 'Outros',
};

export const SERVICES: ServiceInfo[] = [
  // ── Incapacidade ──
  {
    slug: 'auxilio-doenca',
    shortTitle: 'Auxílio-Doença',
    title: 'Auxílio-Doença INSS Negado ou Cortado? | Advogadas Prev',
    description: 'Teve o Auxílio-Doença negado ou cortado pelo INSS? A perícia deu alta indevida? Veja como recorrer e garantir seu benefício com orientação especializada.',
    pillar: 'incapacidade',
    pillarLabel: 'Benefícios por Incapacidade',
  },
  {
    slug: 'auxilio-acidente',
    shortTitle: 'Auxílio-Acidente',
    title: 'Auxílio-Acidente INSS | Sequelas e Redução de Capacidade | Advogadas Prev',
    description: 'Sofreu um acidente e ficou com sequelas? Saiba como funciona o auxílio-acidente do INSS, quem tem direito e como pedir com orientação jurídica.',
    pillar: 'incapacidade',
    pillarLabel: 'Benefícios por Incapacidade',
  },
  {
    slug: 'aposentadoria-invalidez',
    shortTitle: 'Aposentadoria por Invalidez',
    title: 'Aposentadoria por Invalidez INSS | Advogadas Prev',
    description: 'Está incapacitado permanentemente para o trabalho? Entenda os requisitos da aposentadoria por invalidez e como um advogado pode ajudar.',
    pillar: 'incapacidade',
    pillarLabel: 'Benefícios por Incapacidade',
  },
  // ── BPC/LOAS ──
  {
    slug: 'bpc-loas-idoso',
    shortTitle: 'BPC Idoso',
    title: 'BPC/LOAS para Idoso | Benefício Assistencial | Advogadas Prev',
    description: 'Tem mais de 65 anos e baixa renda? Veja se você tem direito ao BPC/LOAS do INSS. Orientação especializada 100% online.',
    pillar: 'bpc',
    pillarLabel: 'BPC/LOAS',
  },
  {
    slug: 'bpc-loas-deficiencia',
    shortTitle: 'BPC Deficiência',
    title: 'BPC/LOAS para Pessoa com Deficiência | Advogadas Prev',
    description: 'Pessoa com deficiência e baixa renda pode ter direito ao BPC/LOAS. Veja os critérios, documentos e como solicitar com apoio jurídico.',
    pillar: 'bpc',
    pillarLabel: 'BPC/LOAS',
  },
  // ── Aposentadorias ──
  {
    slug: 'aposentadoria-idade',
    shortTitle: 'Aposentadoria por Idade',
    title: 'Aposentadoria por Idade INSS | Advogadas Prev',
    description: 'Atingiu a idade mínima e tem tempo de contribuição? Entenda as regras atuais da aposentadoria por idade e como garantir o melhor valor.',
    pillar: 'aposentadoria',
    pillarLabel: 'Aposentadorias',
  },
  {
    slug: 'aposentadoria-tempo-contribuicao',
    shortTitle: 'Aposentadoria por Tempo',
    title: 'Aposentadoria por Tempo de Contribuição | Advogadas Prev',
    description: 'Entenda as regras de transição da aposentadoria por tempo de contribuição e descubra qual é a mais vantajosa para você.',
    pillar: 'aposentadoria',
    pillarLabel: 'Aposentadorias',
  },
  {
    slug: 'aposentadoria-especial',
    shortTitle: 'Aposentadoria Especial',
    title: 'Aposentadoria Especial | Insalubridade e Periculosidade | Advogadas Prev',
    description: 'Trabalhou exposto a agentes nocivos? Saiba como funciona a aposentadoria especial e quais documentos são necessários para comprovar.',
    pillar: 'aposentadoria',
    pillarLabel: 'Aposentadorias',
  },
  // ── Pensão ──
  {
    slug: 'pensao-por-morte',
    shortTitle: 'Pensão por Morte',
    title: 'Pensão por Morte INSS | Proteção aos Dependentes | Advogadas Prev',
    description: 'Teve a pensão por morte negada pelo INSS por falta de união estável ou qualidade de segurado? Veja prazos e descubra como tentar reverter a decisão.',
    pillar: 'pensao',
    pillarLabel: 'Pensão e Proteção Familiar',
  },
  {
    slug: 'auxilio-reclusao',
    shortTitle: 'Auxílio-Reclusão',
    title: 'Auxílio-Reclusão INSS | Proteção à Família | Advogadas Prev',
    description: 'Tem familiar preso e baixa renda? Entenda quem tem direito ao auxílio-reclusão do INSS e como solicitar com orientação jurídica.',
    pillar: 'pensao',
    pillarLabel: 'Pensão e Proteção Familiar',
  },
  {
    slug: 'salario-maternidade',
    shortTitle: 'Salário-Maternidade',
    title: 'Salário-Maternidade INSS | Negado ou Calculado Errado | Advogadas Prev',
    description: 'O INSS negou seu salário-maternidade por falta de carência ou diz que você perdeu a qualidade de segurado? Veja respostas e o que fazer.',
    pillar: 'pensao',
    pillarLabel: 'Pensão e Proteção Familiar',
  },
  // ── Revisão ──
  {
    slug: 'revisao-beneficio',
    shortTitle: 'Revisão de Benefício',
    title: 'Revisão de Benefício INSS | Majoração de Aposentadoria | Advogadas Prev',
    description: 'Acredita que sua aposentadoria foi calculada com erro? Entenda os prazos, teses de revisão e descubra como aumentar o valor do seu benefício.',
    pillar: 'revisao',
    pillarLabel: 'Revisões e Recursos',
  },
  {
    slug: 'revisao-pente-fino',
    shortTitle: 'Pente-Fino INSS',
    title: 'Benefício Cortado no Pente-Fino INSS | Como Restabelecer | Advogadas Prev',
    description: 'Teve a aposentadoria por invalidez, auxílio-doença ou BPC cortado na revisão do INSS? Veja como contestar a alta indevida e pedir liminar na Justiça.',
    pillar: 'revisao',
    pillarLabel: 'Revisões e Recursos',
  },
  {
    slug: 'recursos-crps',
    shortTitle: 'Recurso ao CRPS',
    title: 'Recurso ao CRPS | Contestar INSS Administrativamente | Advogadas Prev',
    description: 'Teve o benefício negado pelo INSS? Veja como o recurso administrativo ao CRPS pode ser mais rápido e eficiente que uma ação na Justiça.',
    pillar: 'revisao',
    pillarLabel: 'Revisões e Recursos',
  },
  // ── Planejamento ──
  {
    slug: 'planejamento-previdenciario',
    shortTitle: 'Planejamento Previdenciário',
    title: 'Planejamento Previdenciário | Advogadas Prev',
    description: 'Faça seu planejamento previdenciário e garanta a melhor aposentadoria possível sem perder tempo ou dinheiro.',
    pillar: 'planejamento',
    pillarLabel: 'Planejamento Previdenciário',
  },
];

/** Get service info by slug */
export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return SERVICES.find(s => s.slug === slug);
}

/** Get all services in the same pillar, excluding the current one */
export function getSiloServices(currentSlug: string): ServiceInfo[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];
  return SERVICES.filter(s => s.pillar === current.pillar && s.slug !== currentSlug);
}
