import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aposentadoria Especial | Como Conseguir com o INSS | Advogadas Prev",
    description: "Trabalhou exposto a insalubridade ou periculosidade? Entenda a revisão do PPP, LTCAT e como conseguir sua Aposentadoria Especial em 2026.",
};

const data: LandingPageData = {
    title: "Aposentadoria Especial | Como Conseguir com o INSS | Advogadas Prev",
    description: "Trabalhou exposto a insalubridade ou periculosidade? Entenda a revisão do PPP, LTCAT e como conseguir sua Aposentadoria Especial em 2026.",
    heroTitle: <>Aposentadoria<br /><em className="text-[#1B3A6B] not-italic">Especial</em> negada<br />ou não reconhecida?</>,
    heroDescription: "Quem trabalhou exposto a agentes nocivos (ruído, calor, produtos químicos, eletricidade) pode se aposentar mais cedo. Mas o INSS frequentemente nega o enquadramento especial por falta de documentação adequada.",
    heroImg: "/juliana-perfil-1.jpg",
    profileImg: "/juliana-perfil-3.jpg",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Trabalhei em condições especiais e gostaria de analisar minha aposentadoria especial.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre aposentadoria especial. Pode me orientar?",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Análise individual de PPP e LTCAT", "Foco exclusivo em Direito Previdenciário"],
    stripFocus: "Especialistas em atividade especial",
    profileFocus: "Especialista em aposentadoria especial e atividades insalubres",
    profileBio: [
        "A Dra. Juliana atua de forma resolutiva em Aposentadorias Especiais, analisando minuciosamente o PPP, o LTCAT e a exposição aos agentes de insalubridade (ruído, química, calor) ou periculosidade (eletricidade, vigilância).",
        "O atendimento 100% online encurta distâncias, garantindo que o seu histórico profissional seja defendido contra os cortes arbitrários do INSS em qualquer lugar do Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Trabalhei em atividade especial e gostaria de orientação.",
    infoLabel: "Critérios avaliados",
    infoTitle: <>O que define o direito<br />à aposentadoria especial</>,
    infoSub: "A comprovação da exposição a agentes nocivos é o fator mais importante — e o mais contestado pelo INSS.",
    infoItems: [
        { icon: <BriefcaseIcon />, title: "Qual era sua atividade?", desc: "Eletricista, soldador, enfermeiro, motorista, metalúrgico e operador de máquinas são exemplos de atividades com direito à aposentadoria especial." },
        { icon: <BookIcon />, title: "Você tem PPP e LTCAT?", desc: "O Perfil Profissiográfico Previdenciário (PPP) e o Laudo Técnico são os documentos principais. Sem eles, o INSS nega automaticamente." },
        { icon: <CalendarIcon />, title: "Quanto tempo em atividade especial?", desc: "São necessários 15, 20 ou 25 anos de exposição, dependendo do grau de nocividade do agente." },
        { icon: <UsersIcon />, title: "Pode converter tempo especial em comum?", desc: "Sim. Quem não completou todo o tempo em atividade especial pode converter com fator multiplicador de 1,4 (homem) ou 1,2 (mulher)." }
    ],
    deadlineText: <>Empresas antigas podem não fornecer o PPP. Nesses casos, existem alternativas jurídicas para comprovar a exposição.</>,
    faqTitle: <>Dúvidas comuns sobre<br />aposentadoria especial</>,
    faqs: [
        { q: "Quais profissões têm direito à Aposentadoria Especial?", a: "Têm direito os trabalhadores expostos a agentes físicos (ruído, calor), químicos (solventes, hidrocarbonetos) ou biológicos (vírus, bactérias). Exemplos comuns: médicos, enfermeiros, soldadores, eletricistas, frentistas, vigilantes e operadores de máquinas pesadas.", cta: "Falar com especialista sobre minha profissão", ctaMsg: "Olá! Minha profissão dá direito a aposentadoria especial?" },
        { q: "A empresa fechou e não me deu o PPP. O que fazer?", a: "Esse é um problema clássico. Podemos exigir documentos de sindicatos, contatar ex-sócios, utilizar laudos emprestados (LTCAT) de empresas similares ou solicitar prova pericial na Justiça." },
        { q: "O que é conversão de tempo especial em comum?", a: "Quem não atingiu os 25 anos exigidos na atividade insalubre pode pegar o tempo trabalhado e aplicar um multiplicador (1.4x para homens e 1.2x para mulheres) para aumentar o tempo total de contribuição comum.", cta: "Quero converter meu tempo especial", ctaMsg: "Olá! Gostaria de uma análise para converter meu tempo especial em tempo comum." },
        { q: "Vigilante tem direito à Aposentadoria Especial?", a: "Sim, o Superior Tribunal de Justiça (Tema 1.031) confirmou que vigilantes armados e desarmados que comprovem a periculosidade têm direito à contagem especial de tempo." },
        { q: "O INSS negou meu pedido mesmo com PPP. Posso recorrer?", a: "Sim! Na maioria das vezes, o INSS diz que o 'EPI era eficaz' ou que o 'ruído estava abaixo do limite'. Nossa equipe questiona esses laudos do INSS no judiciário e restabelece a insalubridade.", cta: "Quero recorrer da negativa do INSS", ctaMsg: "Olá! Minha aposentadoria especial foi negada e preciso recorrer contra o INSS." }
    ],
    ctaTitle: <>Analise seu direito<br />à aposentadoria especial</>,
    ctaDescription: "O primeiro contato não tem custo e ajudamos você a verificar seus laudos antes de arriscar reprovação.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar minha aposentadoria especial.",
    lawyerId: "juliana"
};

export default function Page() { return <LandingPageTemplate data={data} />; }
