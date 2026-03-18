import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auxílio-Doença INSS Negado ou Cortado? | Advogadas Prev",
    description: "Teve o Auxílio-Doença negado ou cortado pelo INSS? A perícia deu alta indevida? Veja como recorrer e garantir seu benefício com orientação especializada.",
    alternates: { canonical: '/auxilio-doenca' },
    openGraph: {
        title: "Auxílio-Doença INSS Negado ou Cortado?",
        description: "Teve o Auxílio-Doença negado ou cortado pelo INSS? A perícia deu alta indevida? Veja como recorrer e garantir seu benefício com orientação especializada.",
        url: '/auxilio-doenca',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'auxilio-doenca',
    title: "Auxílio-Doença INSS Negado ou Cortado? | Advogadas Prev",
    description: "Teve o Auxílio-Doença negado ou cortado pelo INSS? A perícia deu alta indevida? Veja como recorrer e garantir seu benefício com orientação especializada.",
    heroTitle: <>Auxílio-Doença<br /><em className="text-[#1B3A6B] not-italic">negado ou cortado</em><br />pelo INSS?</>,
    heroDescription: "Uma perícia de 2 minutos não define sua saúde. Como especialistas, analisamos falhas técnicas no seu laudo para construir sua estratégia de reversão com segurança.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    heroPrimaryCTA: "Quero saber se tenho direito",
    heroPrimaryMsg: "Olá! Meu auxílio-doença foi negado/cortado e gostaria de orientação.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre auxílio-doença. Pode me orientar?",
    trustItems: ["Primeira avaliação sem custo e sem compromisso", "Atendimento 100% online, de qualquer estado do Brasil", "Atuação exclusiva em Direito Previdenciário"],
    urgencyText: <>O prazo para recurso administrativo é de 30 dias após a negativa. Quanto antes buscar orientação, maiores as possibilidades.</>,
    urgencyMsg: "Olá! Vi que perdi meu benefício e preciso recorrer rápido.",
    stripFocus: "Restabelecimento de benefício",
    profileFocus: "Especialista em benefícios por incapacidade e doença",
    profileBio: [
        "Com atuação focada em benefícios por incapacidade e auxílio-doença, a Dra. Isabela analisa cada caso considerando a documentação médica, o histórico contributivo e a atividade profissional do cliente — fatores que diretamente influenciam a avaliação do INSS.",
        "O atendimento é realizado integralmente de forma online, possibilitando orientação jurídica para segurados em qualquer estado do Brasil, sem necessidade de deslocamento."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Fui cortado do INSS e gostaria da sua ajuda com meu auxílio-doença.",
    infoLabel: "Análise Médica e Jurídica",
    infoTitle: <>O que o INSS avalia<br />na perícia médica</>,
    infoSub: "Entender os critérios técnicos utilizados é o primeiro passo para identificar inconsistências na decisão.",
    infoItems: [
        { icon: <BookIcon />, title: "Impedimento para o trabalho", desc: "O perito avalia se as limitações físicas ou psíquicas impedem o exercício das atividades inerentes à profissão declarada." },
        { icon: <BriefcaseIcon />, title: "Ocupação habitual", desc: "A incapacidade é analisada em relação ao seu trabalho. Atividades físicas têm critérios distintos de trabalhos administrativos." },
        { icon: <CalendarIcon />, title: "Documentação comprobatória", desc: "A correspondência entre o diagnóstico e as limitações dos laudos é determinante. O INSS erra ao ignorar o impacto funcional real." },
        { icon: <UsersIcon />, title: "Qualidade de segurado", desc: "O histórico contributivo e o período de graça são verificados rigorosamente. Temos teses para estender essa proteção." }
    ],
    deadlineText: <>O quanto antes você procurar um advogado para reverter a alta, maiores as chances de reaver TODOS os valores desde o dia em que o benefício foi suspenso no INSS.</>,
    faqTitle: <>Dúvidas comuns sobre<br />Auxílio-Doença</>,
    faqs: [
        { q: "O INSS me deu alta após a perícia. O que fazer agora?", a: "Se você tem laudos recentes afirmando que NÃO pode voltar ao trabalho, podemos pedir a Reconsideração (administrativa dentro de 30 dias) ou ingressar na Justiça com pedido de liminar para restabelecer imediatamente os seus pagamentos.", cta: "Recorrer da alta do INSS", ctaMsg: "Me deram alta do INSS mas meu médico particular proibiu voltar ao trabalho." },
        { q: "Não tenho 12 meses pagos de INSS, posso pedir Auxílio-Doença?", a: "Em regra, a carência é de 12 meses. MAS, para acidentes de qualquer natureza (ou de trabalho), bem como doenças graves listadas em lei (como câncer, tuberculose, HIV, entre outras), a carência é isenta, bastando 1 contribuição.", cta: "Descobrir se minha doença isenta carência", ctaMsg: "Olá, queria saber se a minha doença isenta a carência dos 12 meses." },
        { q: "O AtestaMed é confiável? Meu benefício não é analisado nunca.", a: "O AtestaMed (análise documental) é ótimo para evitar meses de espera. No entanto, o sistema é rigoroso: o atestado deve ter CRM do médico, datas corretas e prazo de repouso explícito. Pedidos indeferidos no sistema devem seguir para perícia presencial ou judicial." },
        { q: "Demoraram para marcar a perícia. Vou perder esses dias sem ganhar nada?", a: "Não. Sendo o benefício aprovado, o INSS pagará todos os retroativos desde a Data da Entrada do Requerimento (DER). Nós cuidamos para que o seu pagamento não seja atrasado ou calculado menor." },
        { q: "Precisa contratar advogado para pedir o Auxílio-Doença?", a: "Para o pedido inicial no INSS (130), você mesmo pode fazer online. Agora, se o pedido for NEGADO, CORTADO, ou se o INSS calcular com valor abaixo do seu salário-base, é fortemente recomendado consultar um advogado especialista antes de tentar outro pedido que pode ser bloqueado." }
    ],
    ctaTitle: <>Entenda sua situação<br />com nossos especialistas</>,
    ctaDescription: "Envie a folha da negativa e seu laudo médico para verificarmos se você tem chances.",
    ctaButtonText: "Quero saber se tenho direito",
    ctaMsg: "Olá! Gostaria de analisar meu Auxílio-Doença negado."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
