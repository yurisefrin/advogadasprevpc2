import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recurso ao CRPS | Contestar INSS Administrativamente | Advogadas Prev",
    description: "Teve o benefício negado pelo INSS? Veja como o recurso administrativo ao CRPS pode ser mais rápido e eficiente que uma ação na Justiça.",
    alternates: { canonical: '/recursos-crps' },
    openGraph: {
        title: "Recurso ao CRPS | Contestar INSS Administrativamente",
        description: "Teve o benefício negado pelo INSS? Veja como o recurso administrativo ao CRPS pode ser mais rápido e eficiente que uma ação na Justiça.",
        url: '/recursos-crps',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'recursos-crps',
    title: "Recurso ao CRPS | Contestar INSS Administrativamente | Advogadas Prev",
    description: "Teve o benefício negado pelo INSS? Veja como o recurso administrativo ao CRPS pode ser mais rápido e eficiente que uma ação na Justiça.",
    heroTitle: <>Recurso ao<br /><em className="text-[#1B3A6B] not-italic">CRPS</em> — conteste<br />a decisão do INSS</>,
    heroDescription: "O Conselho de Recursos da Previdência Social (CRPS) é a instância administrativa para contestar decisões do INSS. É sem custos judiciais iniciais, mais rápido que a via judicial e pode reverter negativas sem a necessidade de um processo.",
    heroImg: "/juliana-perfil-2.jpg",
    profileImg: "/juliana-perfil-1.jpg",
    lawyerId: "juliana",
    heroPrimaryCTA: "Quero Recorrer ao CRPS",
    heroPrimaryMsg: "Olá! Tive meu benefício negado pelo INSS e gostaria de recorrer ao CRPS.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre recurso ao CRPS. Pode me orientar?",
    trustItems: ["Recurso gratuito — sem custos processuais", "Prazo de 30 dias a partir da ciência da decisão", "Resultado mais rápido que ação judicial"],
    urgencyText: <>O prazo para recurso ao CRPS é de <strong>30 dias corridos</strong> da data da ciência da decisão do INSS.</>,
    urgencyMsg: "Olá! Preciso verificar se meu prazo para recurso ao CRPS ainda está válido.",
    stripFocus: "Recursos administrativos",
    profileFocus: "Especialista em recursos administrativos ao CRPS",
    profileBio: [
        "Com atuação em recursos ao CRPS, elabora peças técnicas fundamentadas na legislação previdenciária, nos precedentes do Conselho e na documentação específica de cada caso.",
        "O atendimento é 100% online e o recurso pode ser protocolado digitalmente."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Quero recorrer da decisão do INSS no CRPS.",
    infoLabel: "Como funciona o CRPS",
    infoTitle: <>O que saber sobre<br />o recurso administrativo</>,
    infoSub: "É uma segunda chance de análise — gratuita e mais rápida que a Justiça.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Prazo de 30 dias", desc: "O recurso deve ser protocolado até 30 dias corridos a partir da ciência da decisão do INSS." },
        { icon: <BriefcaseIcon />, title: "Revisão por nova junta", desc: "O caso é reanalisado por uma Junta de Recursos diferente da que negou — uma nova chance de avaliação." },
        { icon: <BookIcon />, title: "Novos documentos podem ser juntados", desc: "Você pode apresentar novos laudos, exames e documentos que não foram considerados na primeira análise." },
        { icon: <UsersIcon />, title: "Sem custos", desc: "O recurso ao CRPS é totalmente gratuito. Você não paga taxas nem custas processuais." }
    ],
    deadlineText: <>Perdeu o prazo de 30 dias? Ainda pode ser possível recorrer pela via judicial. Consulte os caminhos disponíveis.</>,
    faqTitle: <>Dúvidas comuns sobre<br />recursos ao CRPS</>,
    faqs: [
        { q: "O INSS negou meu benefício. Devo entrar na Justiça direto?", a: "Nem sempre! O Recurso ao CRPS (Conselho de Recursos da Previdência) é uma via administrativa muitas vezes mais rápida que a Justiça. Além disso, os conselheiros costumam ter entendimentos mais favoráveis ao segurado do que os próprios peritos locais do INSS.", cta: "Avaliar se cabe recurso CRPS", ctaMsg: "Olá! O INSS negou meu pedido e quero saber se é melhor recorrer no CRPS ou na Justiça." },
        { q: "Qual o prazo para entrar com o recurso no INSS?", a: "Você tem 30 dias corridos a partir da data em que tomou ciência da negativa (pelo aplicativo Meu INSS, carta ou e-mail). Perder esse prazo significa que a decisão se torna definitiva naquela via administrativa." },
        { q: "Precisa pagar alguma taxa para o CRPS?", a: "Não. O recurso é um direito totalmente gratuito em todas as instâncias administrativas (Junta de Recursos e Câmaras de Julgamento)." },
        { q: "Posso colocar laudos médicos novos no recurso?", a: "Sim! Um dos maiores benefícios do recurso é a possibilidade de anexar documentos médicos novos ou que o INSS ignorou na primeira decisão, fortalecendo a chance de reversão sem precisar judicializar.", cta: "Verificar laudos para recurso", ctaMsg: "Olá! Tenho novos laudos e quero recorrer da negativa do INSS." },
        { q: "Preciso de advogado para fazer recurso administrativo?", a: "A lei não obriga, mas a redação de um recurso exige técnica. Um advogado sabe focar nos Enunciados do CRPS e nas teses que os conselheiros aceitam. Fazer o recurso sozinho ('no escuro') desperdiça uma grande oportunidade de reverter a decisão." }
    ],
    ctaTitle: <>Recorra da decisão<br />do INSS em até 30 dias</>,
    ctaDescription: "Envie a carta de negativa do INSS e receba uma análise gratuita do potencial do recurso.",
    ctaButtonText: "Quero Recorrer ao CRPS",
    ctaMsg: "Olá! Gostaria de analisar se vale a pena recorrer ao CRPS no meu caso."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
