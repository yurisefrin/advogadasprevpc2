import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auxílio-Acidente INSS | Indenização por Sequelas | Advogadas Prev",
    description: "Sofreu um acidente ou tem doença ocupacional que deixou sequelas? Saiba como receber metade do seu benefício e continuar trabalhando.",
    alternates: { canonical: '/auxilio-acidente' },
    openGraph: {
        title: "Auxílio-Acidente INSS | Sequelas e Redução de Capacidade",
        description: "Sofreu um acidente ou tem doença ocupacional que deixou sequelas? Saiba como receber metade do seu benefício e continuar trabalhando.",
        url: '/auxilio-acidente',
        siteName: 'Advogadas Prev',
        type: 'website',
    },
};

const data: LandingPageData = {
    slug: 'auxilio-acidente',
    title: "Auxílio-Acidente INSS | Indenização por Sequelas | Advogadas Prev",
    description: "Sofreu um acidente ou tem doença ocupacional que deixou sequelas? Saiba como receber metade do seu benefício e continuar trabalhando.",
    heroTitle: <>Auxílio-Acidente<br /><em className="text-[#1B3A6B] not-italic">negado ou não</em><br /><em className="text-[#1B3A6B] not-italic">reconhecido</em> pelo INSS?</>,
    heroDescription: "O auxílio-acidente é um benefício indenizatório para quem ficou com sequelas permanentes após acidente ou doença ocupacional. É pago mesmo que você continue trabalhando.",
    heroPrimaryCTA: "Quero saber se tenho direito",
    heroPrimaryMsg: "Olá! Fiquei com sequelas de acidente/doença e gostaria de saber sobre o auxílio-acidente.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre auxílio-acidente. Pode me orientar?",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Análise das sequelas e redução da capacidade", "Benefício pago junto com o salário"],
    stripFocus: "Benefícios por sequelas permanentes",
    profileFocus: "Especialista em benefícios por incapacidade e sequelas",
    profileBio: [
        "Com atuação focada em benefícios por incapacidade, analisa cada caso avaliando a extensão das sequelas, a redução da capacidade laboral e a documentação médica necessária para comprovar o direito ao auxílio-acidente.",
        "O atendimento é 100% online para segurados de todo o Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Fiquei com sequelas e gostaria de orientação sobre auxílio-acidente.",
    infoLabel: "Critérios avaliados",
    infoTitle: <>O que define o direito<br />ao auxílio-acidente</>,
    infoSub: "O benefício é indenizatório — adicional ao salário, não substitutivo.",
    infoItems: [
        { icon: <UsersIcon />, title: "Houve redução da capacidade laboral?", desc: "A sequela precisa reduzir permanentemente sua capacidade para o trabalho que exercia habitualmente." },
        { icon: <BriefcaseIcon />, title: "Qual a origem da sequela?", desc: "Acidente de trabalho, acidente de qualquer natureza ou doença ocupacional/equiparada podem gerar o direito." },
        { icon: <BookIcon />, title: "A sequela é permanente?", desc: "O auxílio-acidente exige que a consolidação das lesões resulte em sequela definitiva, mesmo que parcial." },
        { icon: <CalendarIcon />, title: "Você estava contribuindo?", desc: "É necessário ter qualidade de segurado na data do acidente ou da consolidação da doença." }
    ],
    faqTitle: <>Dúvidas comuns sobre<br />auxílio-acidente</>,
    faqs: [
        { q: "Eu posso receber Auxílio-Acidente e continuar trabalhando com carteira assinada?", a: "Sim, com certeza. A maior confusão é achar que todo auxílio corta o direito de trabalhar. O Auxílio-Acidente é uma indenização: você continua no seu emprego formal e recebe o auxílio do INSS todo mês até a aposentadoria.", cta: "Avaliar meu direito ao Auxílio-Acidente", ctaMsg: "Olá! Voltei a trabalhar com sequelas e quero saber se tenho direito a receber o auxílio-acidente." },
        { q: "Precisa ser acidente de trabalho na empresa?", a: "Não! Qualquer acidente dá direito, inclusive acidentes de trânsito, acidentes de moto nos finais de semana ou até jogando futebol, desde que isso deixe uma sequela definitiva que atrapalhe o seu trabalho.", cta: "Tive acidente fora do trabalho", ctaMsg: "Olá! Sofri um acidente e fiquei com sequelas. Quero verificar meu benefício." },
        { q: "Lesão por Esforço Repetitivo (DORT) e coluna dão direito?", a: "Sim. Muitas pessoas sofrem com hérnia de disco ou problemas graves nos punhos adquiridos no trabalho formam uma 'doença ocupacional'. O INSS entende isso como acidente de trabalho, gerando direito ao benefício. O processo é judicial na maioria dos casos.", cta: "Falar sobre lesão do trabalho (LER/DORT)", ctaMsg: "Tenho LER/DORT do trabalho e quero solicitar minha indenização do INSS." },
        { q: "Se eu me aposentar ou for demitido, eu perco?", a: "Se for demitido, você CONTINUA recebendo o Auxílio-Acidente normalmente. Você só perde esse benefício no dia em que finalmente se aposentar ou em caso de óbito. O valor desse auxílio entra para aumentar a média da sua aposentadoria no futuro." },
        { q: "Faltou um dedo ou perdi o movimento parcial da mão. O INSS negou por ser mínima a lesão. E agora?", a: "O STJ decidiu que o nível do dano é irrelevante (Tema 416). Se a sequela exige maior esforço da sua parte (ex: falta de falange), você tem direito. O INSS sempre vai negar lesões mínimas administrativamente. Entre em contato.", cta: "Recorrer de lesão negada pelo INSS", ctaMsg: "Inss recusou meu auxílio acidente dizendo que a lesão era 'mínima', quero recorrer." }
    ],
    ctaTitle: <>Entenda seu direito<br />ao auxílio-acidente</>,
    ctaDescription: "Envie seus laudos médicos e receba uma análise gratuita das suas sequelas.",
    ctaButtonText: "Quero saber se tenho direito",
    ctaMsg: "Olá! Gostaria de analisar meu direito ao auxílio-acidente."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
