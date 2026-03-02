import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aposentadoria por Invalidez INSS | Negada ou Cessada | Advogadas Prev",
    description: "Teve o Auxílio-Doença ou Aposentadoria por Invalidez negado no pente-fino do INSS? Entenda seus direitos, acréscimo de 25% e prazo de recurso.",
};

const data: LandingPageData = {
    title: "Aposentadoria por Invalidez INSS | Negada ou Cessada | Advogadas Prev",
    description: "Teve o Auxílio-Doença ou Aposentadoria por Invalidez negado no pente-fino do INSS? Entenda seus direitos, acréscimo de 25% e prazo de recurso.",
    heroTitle: <>Aposentadoria por<br /><em className="text-[#1B3A6B] not-italic">Invalidez</em> negada<br />ou cessada pelo INSS?</>,
    heroDescription: "A aposentadoria por incapacidade permanente é para quem não pode mais trabalhar em nenhuma atividade. Mas o INSS nega ou cessa frequentemente, mesmo com laudos médicos comprovando a invalidez.",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Minha aposentadoria por invalidez foi negada/cessada e gostaria de orientação.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre aposentadoria por invalidez. Pode me orientar?",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Análise individual da documentação médica", "Foco exclusivo em benefícios por incapacidade"],
    urgencyText: <>Após a decisão do INSS, você tem <strong>30 dias</strong> para recorrer administrativamente sem custo.</>,
    urgencyMsg: "Olá! Vi que tenho 30 dias para recorrer da negativa de aposentadoria por invalidez.",
    stripFocus: "Foco em incapacidade permanente",
    profileFocus: "Especialista em benefícios por incapacidade",
    profileBio: [
        "Com atuação focada em benefícios por incapacidade, analisa cada caso cruzando laudos médicos, CID, histórico contributivo e ocupação profissional — os fatores que determinam se o INSS reconhece a invalidez.",
        "O atendimento é 100% online para segurados de todo o Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Minha aposentadoria por invalidez foi negada e gostaria de orientação.",
    infoLabel: "Critérios técnicos",
    infoTitle: <>O que o INSS avalia<br />na aposentadoria por invalidez</>,
    infoSub: "Entender os critérios é fundamental para construir um caso sólido.",
    infoItems: [
        { icon: <UsersIcon />, title: "A incapacidade é total e permanente?", desc: "O perito avalia se você está impossibilitado de exercer qualquer atividade laboral, sem possibilidade de reabilitação." },
        { icon: <BriefcaseIcon />, title: "Existe possibilidade de reabilitação?", desc: "O INSS pode negar se considerar que você pode ser reabilitado para outra atividade. A análise jurídica pode contestar." },
        { icon: <BookIcon />, title: "Os laudos comprovam a gravidade?", desc: "Laudos genéricos são insuficientes. O documento deve descrever as limitações e a impossibilidade funcional de trabalhar." },
        { icon: <CalendarIcon />, title: "A qualidade de segurado está mantida?", desc: "É necessário estar contribuindo ou dentro do período de graça no momento em que a incapacidade se manifestou." }
    ],
    deadlineText: <>O prazo para recurso é de <strong>30 dias</strong>. Para ação judicial, é possível pedir tutela urgente para restabelecimento imediato.</>,
    faqTitle: <>Dúvidas comuns sobre<br />aposentadoria por invalidez</>,
    faqs: [
        { q: "O pente-fino cortou minha aposentadoria por invalidez. Como recorrer?", a: "Após a cessação pelo pente-fino do INSS, você tem 30 dias para entrar com Recurso Administrativo. Se o INSS mantiver a alta, entramos imediatamente com uma Ação Judicial com pedido de liminar para restabelecimento da sua renda.", cta: "Quero recorrer do corte da invalidez", ctaMsg: "Olá! O INSS cortou minha aposentadoria por invalidez e preciso recorrer com liminar." },
        { q: "Qual a diferença real entre Auxílio-Doença e Invalidez?", a: "O Auxílio-Doença (Benefício por Incapacidade Temporária) tem previsão de melhora e alta. A Aposentadoria por Invalidez (Incapacidade Permanente) ocorre quando a perícia atesta que você nunca mais poderá voltar a trabalhar em sua profissão ou ser reabilitado. A Aposentadoria, além de definitiva, pode ter um valor de benefício diferenciado dependendo do início." },
        { q: "Dona de casa tem direito a aposentar por invalidez?", a: "Sim! Se você pagava o INSS como Segurada Facultativa (dona de casa) ou Baixa Renda, tem cobertura do INSS contra invalidez e doenças graves, desde que tenha carência de 12 meses.", cta: "Falar sobre aposentadoria para dona de casa", ctaMsg: "Olá! Sou dona de casa e queria saber sobre aposentadoria por invalidez." },
        { q: "Quando cabe o adicional de 25% na aposentadoria?", a: "Apenas na Aposentadoria por Invalidez. Aposentados que precisam de assistência permanente de terceiros (para comer, tomar banho, se locomover) têm direito de pedir +25% no valor da aposentadoria, mesmo que ultrapasse o teto do INSS.", cta: "Pedir os 25% de acompanhante", ctaMsg: "Olá! Sou aposentado por invalidez e preciso de cuidador, tenho direito aos 25%?" },
        { q: "O INSS diz que eu posso me 'reabilitar' mesmo doente. E agora?", a: "Isso é muito comum. Médicos do INSS encaminham o segurado para a Reabilitação Profissional. A nossa análise jurídica foca em mostrar ao Juiz, através de laudos especialistas, que pela sua idade, histórico e gravidade, a reabilitação é inviável, transformando o caso em Invalidez." }
    ],
    ctaTitle: <>Entenda sua situação<br />com base na documentação médica</>,
    ctaDescription: "Envie seus laudos e receba uma análise gratuita do seu caso.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar meu caso de aposentadoria por invalidez."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
