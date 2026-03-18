import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "BPC LOAS para Idoso | Aposentadoria sem Contribuição | Advogadas Prev",
    description: "Tem 65 anos ou mais e nunca contribuiu para o INSS? Saiba como funciona a lei do BPC/LOAS, como descontar renda da família e pedir seu benefício.",
    alternates: { canonical: '/bpc-loas-idoso' },
    openGraph: {
        title: "BPC/LOAS para Idoso | Benefício Assistencial",
        description: "Tem 65 anos ou mais e nunca contribuiu para o INSS? Saiba como funciona a lei do BPC/LOAS, como descontar renda da família e pedir seu benefício.",
        url: '/bpc-loas-idoso',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'bpc-loas-idoso',
    title: "BPC LOAS para Idoso | Aposentadoria sem Contribuição | Advogadas Prev",
    description: "Tem 65 anos ou mais e nunca contribuiu para o INSS? Saiba como funciona a lei do BPC/LOAS, como descontar renda da família e pedir seu benefício.",
    heroTitle: <>BPC/LOAS para<br /><em className="text-[#1B3A6B] not-italic">Idoso</em> — garanta<br />seu benefício</>,
    heroDescription: "O BPC/LOAS garante 1 salário mínimo mensal para idosos com 65 anos ou mais em situação de vulnerabilidade econômica. É um direito que independe de contribuição ao INSS.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero saber se tenho direito",
    heroPrimaryMsg: "Olá! Sou idoso e gostaria de saber se tenho direito ao BPC/LOAS.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre o BPC/LOAS para idoso. Pode me orientar?",
    trustItems: ["Benefício de 1 salário mínimo sem contribuição", "Para idosos a partir de 65 anos", "Análise individual dos critérios de renda"],
    bpcCalculatorCTA: true,
    stripFocus: "BPC/LOAS · Proteção ao Idoso",
    profileFocus: "Especialista em BPC/LOAS e proteção social",
    profileBio: [
        "Com atuação focada em BPC/LOAS, analisa cada caso de idoso considerando a composição familiar, a renda per capita e as exceções legais que podem viabilizar o benefício mesmo quando a renda parece estar acima do limite.",
        "O atendimento é totalmente online para idosos e familiares em qualquer estado do Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Sou idoso e gostaria de orientação sobre o BPC/LOAS.",
    infoLabel: "Critérios de concessão",
    infoTitle: <>O que o INSS avalia<br />no BPC/LOAS para idoso</>,
    infoSub: "O critério principal é a renda familiar per capita — e existem exceções que podem beneficiar você.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Tem 65 anos ou mais?", desc: "A idade mínima para o BPC idoso é 65 anos, tanto para homens quanto para mulheres." },
        { icon: <UsersIcon />, title: "A renda per capita está dentro do limite?", desc: "A renda por pessoa da família deve ser de até ¼ do salário mínimo. O BPC de outro idoso da casa não conta para esse cálculo." },
        { icon: <BriefcaseIcon />, title: "Quem mora na mesma casa?", desc: "A composição do grupo familiar influencia diretamente o cálculo. Nem todas as pessoas que moram junto entram na conta." },
        { icon: <BookIcon />, title: "Está inscrito no CadÚnico?", desc: "O Cadastro Único é requisito obrigatório. Se não está inscrito, a orientação inclui como providenciar." }
    ],
    deadlineText: <>Use nossa <strong>Calculadora BPC</strong> para verificar instantaneamente se a renda familiar está dentro do limite.</>,
    faqTitle: <>Dúvidas comuns sobre<br />BPC/LOAS para idoso</>,
    faqs: [
        { q: "Meu cônjuge ganha 1 salário mínimo de aposentadoria, ainda tenho direito ao BPC?", a: "SIM! A lei estabelece que o benefício de 1 salário mínimo de outro idoso da MESMA casa (seja aposentadoria, BPC ou pensão) NÃO entra no cálculo da renda per capita para você pedir o seu BPC. Marido e mulher idosos podem receber SIM, um aposentadoria e outro BPC, ou até dois BPCs.", cta: "Avaliar o cálculo para minha família", ctaMsg: "Olá! Meu marido/esposa já recebe do INSS e quero saber se posso pedir o BPC." },
        { q: "A pessoa precisa estar doente ou com deficiência?", a: "Para o BPC/LOAS Idoso NÃO é preciso estar doente ou comprovar deficiência. O único requisito é ter 65 anos completos ou mais e comprovar que a renda da família (após descontadas as despesas extras de saúde se precisar) não é suficiente para a manutenção." },
        { q: "Os filhos moram comigo mas estão desempregados, afeta o pedido?", a: "O INSS analisa a renda de todos os filhos solteiros que moram na mesma casa. Filhos casados ou que moram em outra residência NÃO entram na conta do grupo familiar para fins de BPC da mãe ou pai." },
        { q: "Posso perder o benefício?", a: "O BPC deve ser revisto a cada 2 anos. Você pode perdê-lo se começar a trabalhar informalmente de carteira assinada ou se houver uma mudança drástica de renda na residência (ex: um filho arruma um emprego de salário alto morando junto). É essencial manter o CadÚnico sempre atualizado.", cta: "Falar sobre atualização do CadÚnico e bloqueios", ctaMsg: "Meu BPC/LOAS Idoso foi bloqueado ou suspenso. Pode me ajudar?" },
        { q: "O INSS negou dizendo que a renda passa do limite. E agora?", a: "Um dos nossos principais trabalhos judiciais é comprovar que o INSS errou no cálculo. Na Justiça, podemos descontar contas de água, luz, aluguel, plano de saúde, farmácia e fraldas da renda bruta, enquadrando vocês no limite legal novamente.", cta: "Tive o BPC Idoso negado por renda", ctaMsg: "O INSS negou meu BPC dizendo que a renda per capita não cumpriu a regra." }
    ],
    ctaTitle: <>Garanta seu direito<br />ao BPC/LOAS</>,
    ctaDescription: "Use a calculadora inteligente ou fale diretamente com a advogada para uma análise personalizada.",
    ctaButtonText: "Quero saber se tenho direito",
    ctaMsg: "Olá! Sou idoso e gostaria de analisar meu direito ao BPC/LOAS."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
