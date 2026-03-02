import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "BPC LOAS para Deficiente | Advogado Especialista INSS | Advogadas Prev",
    description: "Entenda as regras de renda per capita e como funciona a perícia médica e social do INSS para aprovar o BPC para Pessoas com Deficiência e Autismo em 2026.",
};

const data: LandingPageData = {
    title: "BPC LOAS para Deficiente | Advogado Especialista INSS | Advogadas Prev",
    description: "Entenda as regras de renda per capita e como funciona a perícia médica e social do INSS para aprovar o BPC para Pessoas com Deficiência e Autismo em 2026.",
    heroTitle: <>BPC/LOAS para<br /><em className="text-[#1B3A6B] not-italic">Pessoa com</em><br /><em className="text-[#1B3A6B] not-italic">Deficiência</em></>,
    heroDescription: "O Benefício de Prestação Continuada (BPC/LOAS) garante 1 salário mínimo mensal para pessoas com deficiência em situação de vulnerabilidade. Não exige contribuição ao INSS, mas tem critérios rígidos de renda.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Sou pessoa com deficiência e gostaria de saber se tenho direito ao BPC/LOAS.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre o BPC/LOAS para pessoa com deficiência. Pode me orientar?",
    trustItems: ["Benefício de 1 salário mínimo sem contribuição", "Análise individual dos critérios de renda", "Foco exclusivo em Direito Previdenciário"],
    bpcCalculatorCTA: true,
    stripFocus: "BPC/LOAS · Proteção social",
    profileFocus: "Especialista em BPC/LOAS e proteção social",
    profileBio: [
        "Com atuação focada em BPC/LOAS, analisa cada caso considerando o tipo de deficiência, as barreiras à participação social, a composição familiar e a renda per capita — critérios essenciais para o deferimento.",
        "O atendimento é 100% online, com orientação completa sobre documentação e preparo para a avaliação social e médica."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Sou pessoa com deficiência e gostaria de orientação sobre o BPC/LOAS.",
    infoLabel: "Critérios de concessão",
    infoTitle: <>O que o INSS avalia<br />no pedido de BPC/LOAS</>,
    infoSub: "O benefício exige comprovação de deficiência E baixa renda familiar.",
    infoItems: [
        { icon: <UsersIcon />, title: "A renda per capita está dentro do limite?", desc: "A renda por pessoa da família deve ser de até ¼ do salário mínimo (R$ 405,25 em 2026). Em alguns casos, o limite é flexibilizado para ½ SM." },
        { icon: <BriefcaseIcon />, title: "A deficiência gera barreiras de participação?", desc: "Não basta ter deficiência. É necessário comprovar que ela impede a participação plena na sociedade em igualdade de condições." },
        { icon: <BookIcon />, title: "A avaliação biopsicossocial foi adequada?", desc: "A avaliação é feita por perito médico E assistente social. Se desconsideraram aspectos importantes, é possível recorrer." },
        { icon: <CalendarIcon />, title: "Quem compõe o grupo familiar?", desc: "O INSS analisa a renda de todos que moram na mesma casa. A composição correta do grupo familiar pode ser determinante." }
    ],
    deadlineText: <>Use nossa <strong>Calculadora BPC gratuita</strong> para verificar se a renda per capita da família está dentro do limite legal.</>,
    faqTitle: <>Dúvidas comuns sobre<br />BPC/LOAS para pessoa com deficiência</>,
    faqs: [
        { q: "Autista tem direito ao BPC/LOAS?", a: "Sim! Autismo (TEA) é considerado deficiência para todos os fins legais no Brasil. Se a família se enquadrar no critério de renda, o autista infantil ou adulto tem direito ao benefício de 1 salário mínimo.", cta: "Saber sobre BPC para Autista", ctaMsg: "Olá! Meu filho(a) tem autismo e quero saber se temos direito ao BPC/LOAS." },
        { q: "Nunca paguei o INSS, tenho direito?", a: "Para o BPC não é necessário ter pago o INSS nenhuma vez na vida. Ele é um benefício de Assistência Social focado em garantir a sobrevivência de pessoas com deficiência física, intelectual, mental ou sensorial em vulnerabilidade." },
        { q: "Se a renda da minha família passar de 1/4 do salário, eu perco o direito?", a: "A lei diz 1/4 (R$ 405 por pessoa em 2026). PORÉM, na via judicial, conseguimos deduzir gastos com farmácia, fraldas, alimentação especial e médicos. Muitas vezes, abatendo essas despesas, a renda enquadra no limite legal ou os Juízes aceitam até 1/2 salário mínimo.", cta: "Fazer cálculo da renda com abatimentos", ctaMsg: "Quero saber se descontando remédios eu me encaixo no BPC." },
        { q: "O INSS negou na perícia médica, e agora?", a: "A 'perícia' do BPC exige comprovação de impedimento de longo prazo (mais de 2 anos). O INSS muitas vezes nega sem ler direito os laudos. O melhor caminho após uma negativa costuma ser ingressar com Ação Judicial, onde um perito especialista e imparcial fará a avaliação.", cta: "Recorrer da negativa", ctaMsg: "O INSS negou meu pedido dizendo que a deficiência não atende aos requisitos." },
        { q: "O BPC/LOAS tem décimo terceiro?", a: "Não. Por ser um benefício assistencial e não previdenciário, ele paga 12 parcelas de um salário mínimo por ano, sem 13º salário e não gera direito à pensão por morte para viúvos." }
    ],
    ctaTitle: <>Descubra seu direito<br />ao BPC/LOAS</>,
    ctaDescription: "Use a calculadora gratuita ou fale diretamente com a advogada para uma análise personalizada.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Sou pessoa com deficiência e gostaria de analisar meu direito ao BPC/LOAS."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
