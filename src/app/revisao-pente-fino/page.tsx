import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Benefício Cortado no Pente-Fino INSS | Como Restabelecer | Advogadas Prev",
    description: "Teve a aposentadoria por invalidez, auxílio-doença ou BPC cortado na revisão do INSS? Veja como contestar a alta indevida e pedir liminar na Justiça.",
    alternates: { canonical: '/revisao-pente-fino' },
    openGraph: {
        title: "Benefício Cortado no Pente-Fino INSS | Como Restabelecer",
        description: "Teve a aposentadoria por invalidez, auxílio-doença ou BPC cortado na revisão do INSS? Veja como contestar a alta indevida e pedir liminar na Justiça.",
        url: '/revisao-pente-fino',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'revisao-pente-fino',
    title: "Benefício Cortado no Pente-Fino INSS | Como Restabelecer | Advogadas Prev",
    description: "Teve a aposentadoria por invalidez, auxílio-doença ou BPC cortado na revisão do INSS? Veja como contestar a alta indevida e pedir liminar na Justiça.",
    heroTitle: <>Benefício cortado<br /><em className="text-[#1B3A6B] not-italic">no Pente-Fino</em><br />do INSS?</>,
    heroDescription: "O pente-fino do INSS revisou e cortou milhares de benefícios nos últimos anos. Se o seu foi cessado sem aviso prévio ou sem nova perícia adequada, é possível contestar e restabelecer.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero Contestar o Corte",
    heroPrimaryMsg: "Olá! Meu benefício foi cortado no pente-fino do INSS e quero saber como contestar.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre o corte de benefício no pente-fino. Pode me orientar?",
    trustItems: ["Análise individual de cada caso de pente-fino", "Recurso ou ação com pedido de restabelecimento urgente", "Foco exclusivo em benefícios por incapacidade"],
    urgencyText: <>Você tem <strong>30 dias</strong> para recorrer administrativamente. Após esse prazo, pode restar apenas a via judicial.</>,
    urgencyMsg: "Olá! Meu benefício foi cortado no pente-fino e preciso agir dentro do prazo.",
    stripFocus: "Revisão de pente-fino",
    profileFocus: "Especialista em restabelecimento de benefícios cortados",
    profileBio: [
        "Com atuação focada em benefícios por incapacidade, analisa cada caso de pente-fino verificando se a perícia foi adequada, se houve notificação prévia e se as condições de saúde mudaram de fato.",
        "Muitos cortes são feitos de forma irregular — sem nova perícia real ou com avaliação inadequada."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Meu benefício foi cortado no pente-fino e preciso de orientação.",
    infoLabel: "O que avaliamos",
    infoTitle: <>O que pode estar errado<br />no corte do seu benefício</>,
    infoSub: "O pente-fino cortou benefícios legítimos. A análise jurídica identifica irregularidades.",
    infoItems: [
        { icon: <UsersIcon />, title: "A perícia foi presencial e adequada?", desc: "Muitas cessações ocorreram com base em análise documental ou perícia de poucos minutos — ambas contestáveis." },
        { icon: <BriefcaseIcon />, title: "Sua condição de saúde mudou?", desc: "Se sua doença é crônica, degenerativa ou estável, o INSS não deveria cessar o benefício sem justificativa médica." },
        { icon: <BookIcon />, title: "Você foi notificado antes?", desc: "O INSS deve notificar o segurado e dar oportunidade de apresentar novos documentos antes de cortar o benefício." },
        { icon: <CalendarIcon />, title: "O prazo para recurso ainda está aberto?", desc: "Você tem 30 dias da ciência do corte para recorrer administrativamente. Após esse prazo, a via judicial permanece." }
    ],
    deadlineText: <>Mais de <strong>52%</strong> dos auxílios revisados no pente-fino foram cortados. Mas muitos desses cortes são reversíveis.</>,
    faqTitle: <>Dúvidas comuns sobre<br />revisão após pente-fino</>,
    faqs: [
        { q: "O INSS cortou meu benefício sem fazer perícia nova. Pode isso?", a: "Não! A lei e os tribunais exigem que, antes de cancelar um benefício por incapacidade em um Pente-Fino, o INSS precisa obrigatoriamente realizar nova perícia médica e notificar o segurado para defesa. Cortes automáticos são nulos de pleno direito.", cta: "Cortaram sem perícia, quero agir", ctaMsg: "Olá! O INSS cortou meu benefício no pente-fino sem me consultar nem fazer perícia." },
        { q: "Quanto tempo tenho para recorrer do corte?", a: "Você tem 30 dias para apresentar recurso administrativo ou marcar uma perícia de prorrogação. Passado o prazo, o único caminho (e geralmente o mais eficaz em casos de pente-fino) é a Justiça, com pedido de liminar médica." },
        { q: "Tenho mais de 60 anos, o pente-fino pode cortar minha invalidez?", a: "Em regra, NÃO! Aposentados por Invalidez com mais de 60 anos (ou com mais de 55 anos e 15 de benefício) ou doentes de HIV estão blindados pela lei contra o Pente-Fino e não podem ser convocados. Se foi convocado e cortado, é erro grave do INSS.", cta: "Tenho mais de 60 e fui convocado(a)", ctaMsg: "Olá! Fui cortado no pente fino mas tenho idade para estar isento. Quero restabelecer." },
        { q: "E se a perícia do Pente-Fino der alta e disser que estou apto?", a: "O perito do INSS nem sempre acerta. Se seus médicos particulares atestam que a sua incapacidade continua grave e impossibilita o trabalho, é possível levar essa prova para um Perito Médico Judicial e anular a alta do INSS, pedindo inclusive os atrasados desde o dia do corte." },
        { q: "Qual a diferença entre reconsideração, recurso e ação judicial?", a: "O Pedido de Reconsideração agenda uma nova perícia no INSS (mesma agência). O Recurso vai para o CRPS em Brasília. A Ação Judicial vai para um Juiz Federal. Advogados especialistas recomendam a via judicial em cortes de pente-fino por ter auxílio de perícias imparciais e pedidos de liminar urgente." }
    ],
    ctaTitle: <>Conteste o corte<br />e recupere seu benefício</>,
    ctaDescription: "Envie a carta de cessação e receba uma análise gratuita do seu caso.",
    ctaButtonText: "Quero Contestar o Corte",
    ctaMsg: "Olá! Meu benefício foi cortado no pente-fino e quero saber como reverter."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
