import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auxílio-Reclusão INSS | Benefício para Dependentes | Advogadas Prev",
    description: "O auxílio-reclusão é um direito dos dependentes. Saiba os critérios de baixa renda, quem tem direito e como comprovar qualidade de segurado.",
    alternates: { canonical: '/auxilio-reclusao' },
    openGraph: {
        title: "Auxílio-Reclusão INSS | Proteção à Família",
        description: "O auxílio-reclusão é um direito dos dependentes. Saiba os critérios de baixa renda, quem tem direito e como comprovar qualidade de segurado.",
        url: '/auxilio-reclusao',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'auxilio-reclusao',
    title: "Auxílio-Reclusão INSS | Benefício para Dependentes | Advogadas Prev",
    description: "O auxílio-reclusão é um direito dos dependentes. Saiba os critérios de baixa renda, quem tem direito e como comprovar qualidade de segurado.",
    heroTitle: <>Auxílio-Reclusão<br /><em className="text-[#1B3A6B] not-italic">negado ou não</em><br /><em className="text-[#1B3A6B] not-italic">reconhecido</em>?</>,
    heroDescription: "O auxílio-reclusão é um benefício pago aos dependentes do segurado preso em regime fechado. Tem critérios específicos de renda e contribuição que o INSS aplica de forma rigorosa.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero saber se tenho direito",
    heroPrimaryMsg: "Olá! Gostaria de saber se tenho direito ao auxílio-reclusão para os dependentes de familiar preso.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre auxílio-reclusão. Pode me orientar?",
    trustItems: ["Análise individual dos requisitos", "Verificação da qualidade de segurado", "Atendimento sigiloso e respeitoso"],
    stripFocus: "Proteção aos dependentes",
    profileFocus: "Especialista em benefícios para dependentes",
    profileBio: [
        "Com atuação focada em proteção familiar, analisa cada caso de auxílio-reclusão verificando o último salário de contribuição do segurado preso, sua qualidade de segurado e a condição dos dependentes.",
        "O atendimento é 100% online e conduzido com total sigilo."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Gostaria de orientação sobre auxílio-reclusão.",
    infoLabel: "Requisitos verificados",
    infoTitle: <>O que é avaliado<br />no auxílio-reclusão</>,
    infoSub: "Não é o preso que recebe — é a família. E os critérios são bem específicos.",
    infoItems: [
        { icon: <CalendarIcon />, title: "O segurado estava contribuindo?", desc: "É necessário que o preso tivesse qualidade de segurado na data da prisão — ou seja, com contribuições em dia ou no período de graça." },
        { icon: <UsersIcon />, title: "A renda do segurado está dentro do limite?", desc: "O último salário de contribuição deve ser igual ou inferior ao teto previsto em portaria (em 2026: R$ 1.903,98)." },
        { icon: <BookIcon />, title: "Quem são os dependentes?", desc: "Cônjuge, companheiro(a), filhos menores de 21 anos e filhos inválidos têm direito prioritário." },
        { icon: <BriefcaseIcon />, title: "O regime é fechado?", desc: "O benefício é pago apenas enquanto o segurado estiver em regime fechado. Progressão para semiaberto cessa o pagamento." }
    ],
    faqTitle: <>Dúvidas comuns sobre<br />auxílio-reclusão</>,
    faqs: [
        { q: "A família do preso rico também recebe?", a: "Não. O Auxílio-Reclusão é exclusivo para dependentes de segurados de BAIXA RENDA. A média dos salários de contribuição dele, antes de ser preso, deve ser inferior a R$ 1.819,26 (teto em 2024, pode variar)." },
        { q: "Preso no regime semiaberto ou aberto tem direito?", a: "Não mais. Após mudanças nas leis recentes, o auxílio-reclusão é pago apenas enquanto o segurado estiver cumprindo pena estritamente em REGIME FECHADO." },
        { q: "Ele estava desempregado no dia da prisão. Posso pedir o auxílio?", a: "Sim, desde que a prisão tenha ocorrido dentro do 'período de graça'. Geralmente são 12 meses após ele parar de pagar o INSS, podendo chegar a 36 meses se houver comprovação de desemprego involuntário.", cta: "Checar se o preso tinha qualidade de segurado", ctaMsg: "Ele estava desempregado quando foi preso, queria saber se tenho direito." },
        { q: "Quem tem direito a receber o valor?", a: "Esposa, esposo, companheiro(a) em união estável, filhos menores de 21 anos ou filhos com deficiência. Pais ou irmãos apenas se não houver filhos/cônjuge e comprovarem forte dependência financeira." },
        { q: "Precisa de carência (tempo mínimo de INSS)?", a: "Sim. A lei exige que o segurado tenha pago pelo menos 24 contribuições mensais ao INSS antes da ocorrência da prisão. Se tiver menos que isso, não gera direito aos dependentes.", cta: "Verificar tempo de contribuição", ctaMsg: "Queria saber se as 24 contribuições foram atingidas no caso do meu familiar." }
    ],
    ctaTitle: <>Entenda o direito dos<br />dependentes ao auxílio-reclusão</>,
    ctaDescription: "O primeiro contato é gratuito e sigiloso. Receba orientação sobre os caminhos disponíveis.",
    ctaButtonText: "Quero saber se tenho direito",
    ctaMsg: "Olá! Gostaria de analisar o direito ao auxílio-reclusão para os dependentes."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
