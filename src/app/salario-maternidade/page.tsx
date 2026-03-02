import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon, HeartIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salário-Maternidade INSS | Negado ou Calculado Errado | Advogadas Prev",
    description: "O INSS negou seu salário-maternidade por falta de carência ou diz que você perdeu a qualidade de segurado? Veja respostas e o que fazer.",
};

const data: LandingPageData = {
    title: "Salário-Maternidade INSS | Negado ou Calculado Errado | Advogadas Prev",
    description: "O INSS negou seu salário-maternidade por falta de carência ou diz que você perdeu a qualidade de segurado? Veja respostas e o que fazer.",
    heroTitle: <>Salário-Maternidade<br /><em className="text-[#1B3A6B] not-italic">negado ou com</em><br /><em className="text-[#1B3A6B] not-italic">valor incorreto</em>?</>,
    heroDescription: "O salário-maternidade é um benefício para gestantes, adotantes e seguradas que sofreram aborto espontâneo. O INSS pode negar por falta de carência, qualidade de segurado ou outros motivos contestáveis.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Meu salário-maternidade foi negado e gostaria de orientação.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre salário-maternidade. Pode me orientar?",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Análise individual das contribuições", "Foco exclusivo em Direito Previdenciário"],
    stripFocus: "Proteção à maternidade",
    profileFocus: "Especialista em benefícios previdenciários para mulheres",
    profileBio: [
        "Com atuação focada em direitos previdenciários, analisa cada caso de salário-maternidade verificando a carência, a qualidade de segurado e a categoria de contribuição — fatores que frequentemente geram negativas indevidas.",
        "O atendimento é 100% online, com suporte dedicado ao momento da gestação."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Meu salário-maternidade foi negado e gostaria de orientação.",
    infoLabel: "Requisitos verificados",
    infoTitle: <>O que o INSS avalia<br />no salário-maternidade</>,
    infoSub: "A carência e a qualidade de segurado são os critérios mais verificados.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Quantas contribuições você tem?", desc: "A carência varia: 10 meses para MEI/individual/facultativa. Empregada CLT não tem carência mínima." },
        { icon: <UsersIcon />, title: "Estava contribuindo no parto?", desc: "É necessário ter qualidade de segurado na data do parto, adoção ou aborto espontâneo." },
        { icon: <BookIcon />, title: "Qual sua categoria de segurado?", desc: "Empregada CLT, MEI, contribuinte individual, segurada especial (rural) — cada categoria tem regras diferentes." },
        { icon: <BriefcaseIcon />, title: "O valor está correto?", desc: "Para CLT, o valor é o salário integral. Para contribuinte individual, é a média das contribuições. Erros no cálculo são comuns." }
    ],
    faqTitle: <>Dúvidas comuns sobre<br />salário-maternidade</>,
    faqs: [
        { q: "Estou desempregada. Ainda posso receber Salário-Maternidade?", a: "Sim! Se você teve carteira assinada ou pagou INSS nos últimos 12 a 36 meses antes do parto, você pode estar no que chamamos de 'Período de Graça'. Muitas mães desempregadas acham que não têm direito e perdem o benefício.", cta: "Checar meu período de graça", ctaMsg: "Estou desempregada e tive bebê. Quero saber se tenho direito ao salário-maternidade." },
        { q: "Atrasei o MEI. O INSS pode negar o salário-maternidade?", a: "Sim. O INSS exige que quem é MEI ou autônoma pague pelo menos 10 meses de contribuição (carência) sem perder a qualidade de segurado. Pagamentos muito atrasados podem não contar. Uma análise no seu CNIS ditará a melhor estratégia.", cta: "Analisar CNIS de MEI/Autônoma", ctaMsg: "O INSS negou meu maternidade dizendo que não tenho carência no MEI." },
        { q: "Quanto tempo depois do nascimento tenho para pedir?", a: "O prazo decadencial para pedir o salário-maternidade na área urbana é de 5 anos após a data do parto ou adoção. Após esse tempo o direito de pedir se extingue totalmente.", cta: "Quero fazer o requerimento", ctaMsg: "Tive bebê recentemente e quero dar entrada no Salário-Maternidade." },
        { q: "Sofri um aborto não criminoso (espontâneo). Tenho algum direito?", a: "Sim. Em caso de aborto não criminoso comprovado por atestado médico com CID específico, a mulher tem direito a receber 14 dias de salário-maternidade para repouso." },
        { q: "No caso de mãe que falece no parto, quem recebe?", a: "Se a mãe segurada falecer no parto, o salário-maternidade é garantido ao viúvo(a) ou companheiro(a) sobrevivente pelo tempo restante a que a mãe teria direito, contanto que o sobrevivente também seja filiado ao INSS." }
    ],
    ctaTitle: <>Proteja seu direito<br />ao salário-maternidade</>,
    ctaDescription: "Envie suas contribuições e receba uma análise gratuita da viabilidade.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar meu direito ao salário-maternidade."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
