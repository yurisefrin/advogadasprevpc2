import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Revisão de Benefício INSS | Majoração de Aposentadoria | Advogadas Prev",
    description: "Acredita que sua aposentadoria foi calculada com erro? Entenda os prazos, teses de revisão e descubra como aumentar o valor do seu benefício.",
    alternates: { canonical: '/revisao-beneficio' },
    openGraph: {
        title: "Revisão de Benefício INSS | Majoração de Aposentadoria",
        description: "Acredita que sua aposentadoria foi calculada com erro? Entenda os prazos, teses de revisão e descubra como aumentar o valor do seu benefício.",
        url: '/revisao-beneficio',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'revisao-beneficio',
    title: "Revisão de Benefício INSS | Majoração de Aposentadoria | Advogadas Prev",
    description: "Acredita que sua aposentadoria foi calculada com erro? Entenda os prazos, teses de revisão e descubra como aumentar o valor do seu benefício.",
    heroTitle: <>Revisão e<br /><em className="text-[#1B3A6B] not-italic">Majoração</em><br />de Benefício</>,
    heroDescription: "Se você já se aposentou, mas acredita que o valor está abaixo do correto, existe a possibilidade de revisão. Erros de cálculo, vínculos não computados e regras mal aplicadas são mais comuns do que se imagina.",
    heroImg: "/juliana-perfil-2.jpg",
    profileImg: "/juliana-perfil-1.jpg",
    heroPrimaryCTA: "Quero Revisar Meu Benefício",
    heroPrimaryMsg: "Olá! Gostaria de revisar o valor da minha aposentadoria ou benefício do INSS.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre revisão de benefício. Pode me orientar?",
    trustItems: ["Análise detalhada do cálculo do INSS", "Identificação de erros e valores devidos", "Foco exclusivo em Direito Previdenciário"],
    stripFocus: "Revisão de benefícios",
    profileFocus: "Especialista em revisão e majoração de benefícios",
    profileBio: [
        "A Dra. Juliana atua como procuradora de direitos já conquistados. Ao analisar seu processo de aposentadoria e o CNIS, ela avalia descartes de salários baixos, conversão de tempo especial em comum, e se o INSS deixou de aplicar a regra mais benéfica.",
        "O atendimento é totalmente online e seguro. O objetivo é buscar o aumento da sua renda mensal sem colocar o seu benefício atual em risco."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Gostaria de verificar se minha aposentadoria pode ser revisada.",
    infoLabel: "O que verificamos",
    infoTitle: <>O que pode estar errado<br />no cálculo do seu benefício</>,
    infoSub: "Erros no INSS são mais comuns do que se imagina. Uma análise técnica pode revelar valores significativos.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Contribuições não computadas", desc: "Vínculos empregatícios, trabalho rural e contribuições como autônomo podem ter sido excluídos do cálculo." },
        { icon: <BriefcaseIcon />, title: "Erro nos índices de correção", desc: "O INSS pode ter aplicado índices de atualização monetária incorretos nos seus salários de contribuição." },
        { icon: <BookIcon />, title: "Regra de cálculo errada", desc: "A escolha da regra de cálculo influencia diretamente no valor. Uma regra menos favorável pode ter sido aplicada." },
        { icon: <UsersIcon />, title: "Direito a teses revisionais", desc: "Teses como revisão da vida toda, buraco negro e teto EC 20/1998 podem aumentar significativamente o valor." }
    ],
    deadlineText: <>A revisão tem prazo decadencial de <strong>10 anos</strong> a partir do primeiro pagamento. Após esse prazo, o direito de revisar se extingue.</>,
    faqTitle: <>Dúvidas comuns sobre<br />revisão de benefício</>,
    faqs: [
        { q: "Quais os motivos mais comuns para erro de cálculo no INSS?", a: "O INSS erra frequentemente ao ignorar períodos trabalhados em condições insalubres (tempo especial), não incluir vínculos que constam na carteira de trabalho mas não no sistema deles, ou descartar contribuições simultâneas e recolhimentos como autônomo." },
        { q: "Existe prazo para pedir a revisão de aposentadoria?", a: "Sim, existe o prazo decadencial de 10 anos. Ele começa a contar do primeiro dia do mês seguinte ao recebimento da primeira parcela da sua aposentadoria. Se passar desse prazo, o direito de revisar se extingue na maioria dos casos.", cta: "Verificar se ainda estou no prazo", ctaMsg: "Olá! Quero saber se ainda estou no prazo para pedir revisão da minha aposentadoria." },
        { q: "Revisão da Vida Toda ainda é possível?", a: "A tese da Revisão da Vida Toda sofreu reviravoltas no STF recentemente. É preciso avaliar com cautela o andamento das modulações do Supremo Tribunal Federal para entender se o seu caso específico ainda possui brechas legais ou se enquadra em outras teses revisionais similares.", cta: "Falar sobre outras teses revisionais", ctaMsg: "Olá! Acredito que meu benefício está baixo e queria avaliar teses de revisão." },
        { q: "A Revisão das Atividades Concomitantes vale a pena?", a: "Sim! Se você teve dois ou mais empregos ao mesmo tempo (antes de abril/2003), o INSS usava um cálculo prejudicial dividindo as atividades em primária e secundária. Com a nova regra, as contribuições do mesmo mês devem ser somadas integralmente.", cta: "Avaliar cálculo por atividades concomitantes", ctaMsg: "Olá, trabalhei em dois lugares ao mesmo tempo e quero revisar meu benefício." },
        { q: "Pedir revisão pode cancelar minha aposentadoria?", a: "Se a ação revisional for mal planejada e o INSS constatar que você não tinha direito adquirido na época, existe sim o risco. Por isso é indispensável a contratação de advogados especializados para fazer cálculos exatos ANTES de entrar com qualquer pedido, anulando os riscos de diminuição.", cta: "Faça meu cálculo de revisão com segurança", ctaMsg: "Olá! Gostaria de fazer o cálculo de revisão antes de entrar no INSS." }
    ],
    ctaTitle: <>Descubra se seu benefício<br />pode ser aumentado</>,
    ctaDescription: "Envie a carta de concessão e receba uma análise de viabilidade do pedido de revisão.",
    ctaButtonText: "Quero Revisar Meu Benefício",
    ctaMsg: "Olá! Gostaria de analisar se meu benefício pode ser revisado.",
    lawyerId: "juliana"
};

export default function Page() { return <LandingPageTemplate data={data} />; }
