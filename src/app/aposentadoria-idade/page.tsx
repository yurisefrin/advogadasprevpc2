import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aposentadoria por Idade | Valor e Requisitos INSS | Advogadas Prev",
    description: "Aposentadoria por Idade negada ou com valor baixo? Veja os requisitos para 2026, cálculo do benefício e carência exigida pelo INSS.",
};

const data: LandingPageData = {
    // SEO
    title: "Aposentadoria por Idade | Valor e Requisitos INSS | Advogadas Prev",
    description: "Aposentadoria por Idade negada ou com valor baixo? Veja os requisitos para 2026, cálculo do benefício e carência exigida pelo INSS.",
    // Hero
    heroTitle: <>Aposentadoria por<br /><em className="text-[#1B3A6B] not-italic">Idade</em> negada<br />ou com valor baixo?</>,
    heroDescription: "Você trabalhou a vida toda e agora merece o descanso com o melhor valor possível. Analisamos descartes inteligentes e regras de transição para garantir o maior benefício.",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Gostaria de uma análise da minha aposentadoria por idade.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre aposentadoria por idade. Pode me orientar?",
    heroImg: "/juliana-celebracao.png",
    profileImg: "/juliana-perfil-5.jpg",
    lawyerId: "juliana",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Cálculo preciso do tempo de contribuição", "Foco em maximizar o valor do benefício"],
    stripFocus: "Especialistas em aposentadorias",
    profileFocus: "Especialista em aposentadorias e benefícios do INSS",
    profileBio: [
        "A Dra. Juliana atua de forma cirúrgica na análise de aposentadorias por idade. Uma simples falha no CNIS, como um vínculo não reconhecido ou carência não computada, pode gerar o indeferimento do seu pedido no INSS.",
        "Com atendimento humanizado e 100% online, nossa equipe consegue identificar exatamente onde está o erro do INSS e reverter negativas em qualquer estado do Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Gostaria de orientação sobre minha aposentadoria por idade.",
    infoLabel: "Requisitos avaliados",
    infoTitle: <>O que o INSS verifica<br />na aposentadoria por idade</>,
    infoSub: "Entender os requisitos evita surpresas na hora do pedido.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Você já tem a idade mínima?", desc: "65 anos (homem) ou 62 anos (mulher) após a Reforma. Regras de transição podem alterar esse requisito." },
        { icon: <UsersIcon />, title: "Tem o tempo mínimo de contribuição?", desc: "São necessários pelo menos 15 anos de contribuição (180 meses). Para homens que começaram após 2019, são 20 anos." },
        { icon: <BookIcon />, title: "Seu CNIS reflete toda sua vida laboral?", desc: "Vínculos não registrados, trabalho rural e atividades informais podem ser incluídos com a documentação adequada." },
        { icon: <BriefcaseIcon />, title: "Qual o valor do seu benefício?", desc: "O cálculo considera a média de todos os salários desde julho/1994. A regra aplicada influencia diretamente o valor." }
    ],
    deadlineText: <>Cada mês sem análise pode representar perda de valor. As regras de transição exigem atenção ao momento certo de pedir.</>,
    faqTitle: <>Dúvidas comuns sobre<br />aposentadoria por idade</>,
    faqs: [
        { q: "Qual a idade mínima para se aposentar no INSS hoje?", a: "Após a Reforma da Previdência, a idade mínima passou a ser de 65 anos para os homens e 62 anos para as mulheres. É obrigatório também preencher o tempo mínimo de contribuição ou carência.", cta: "Verificar se atingi os requisitos", ctaMsg: "Olá! Quero saber se já tenho idade e tempo para me aposentar." },
        { q: "O que é carência na aposentadoria por idade?", a: "Carência é o número mínimo de meses pagos pontualmente ao INSS. Na aposentadoria por idade, a carência é de 180 meses (15 anos). Mesmo com a idade correta, sem os 180 meses pagos, o INSS negará o benefício." },
        { q: "Nunca paguei o INSS, posso me aposentar por idade?", a: "Aposentadoria exige contribuição prévia. Quem nunca pagou o INSS e tem 65 anos ou mais (ou deficiência) e vive em condição de vulnerabilidade, pode ter direito ao BPC/LOAS, que não exige contribuição.", cta: "Quero saber mais sobre o BPC/LOAS", ctaMsg: "Olá! Nunca paguei INSS, tenho 65 anos e quero saber sobre meus direitos." },
        { q: "Posso usar tempo de trabalho rural para completar os 15 anos?", a: "Sim! Se você trabalhou na roça com sua família em regime de economia familiar antes de 1991, esse período pode ser somado à sua contribuição urbana para completar os 15 anos exigidos pela aposentadoria por Idade Híbrida.", cta: "Analisar meu tempo rural", ctaMsg: "Olá! Quero saber se posso usar meu tempo de roça no INSS." },
        { q: "Meu pedido foi negado por 'falta de qualidade de segurado', o que fazer?", a: "Na Aposentadoria por Idade, a perda da qualidade de segurado (ficar muito tempo sem pagar o INSS) NÃO impede a concessão do benefício se você já cumpriu os 15 anos (180 meses) exigidos anteriormente. Essa é uma tese pacificada e podemos recorrer.", cta: "Reverter aposentadoria negada", ctaMsg: "Olá! O INSS negou minha aposentadoria por idade." }
    ],
    ctaTitle: <>Entenda seu direito<br />à aposentadoria por idade</>,
    ctaDescription: "O primeiro contato não tem custo. Envie seus dados e receba uma análise preliminar.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar minha aposentadoria por idade.",
};

export default function Page() { return <LandingPageTemplate data={data} />; }
