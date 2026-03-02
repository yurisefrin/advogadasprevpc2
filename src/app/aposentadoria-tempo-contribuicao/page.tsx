import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aposentadoria por Tempo de Contribuição | Advogadas Prev",
    description: "Descubra se você tem direito à Aposentadoria por Tempo de Contribuição, regras de transição em 2026 e como garantir o melhor benefício.",
};

const data: LandingPageData = {
    title: "Aposentadoria por Tempo de Contribuição | Regras 2026 | Advogadas Prev",
    description: "Saiba se você tem direito à Aposentadoria por Tempo de Contribuição nas regras de transição. Análise de pedágio 50% e 100%, pontos e idade progressiva.",
    heroTitle: <>Aposentadoria por<br /><em className="text-[#1B3A6B] not-italic">Tempo de Contribuição</em><br />negada ou com erro?</>,
    heroDescription: "As regras mudaram com a Reforma de 2019, mas direitos adquiridos e regras de transição ainda garantem aposentadorias vantajosas. A análise correta do seu histórico contributivo é determinante.",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Gostaria de analisar minha aposentadoria por tempo de contribuição.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre aposentadoria por tempo de contribuição. Pode me orientar?",
    heroImg: "/juliana-perfil-1.jpg",
    profileImg: "/juliana-perfil-4.jpg",
    lawyerId: "juliana",
    trustItems: ["Atendimento direto com advogada inscrita na OAB", "Análise individual do CNIS · primeiro contato gratuito", "Foco exclusivo em Direito Previdenciário"],
    stripFocus: "Especialistas em aposentadorias",
    profileFocus: "Especialista em planejamento de aposentadorias",
    profileBio: [
        "A Dra. Juliana atua de forma estratégica em aposentadorias, analisando cada caso considerando o tempo de contribuição, as regras de transição aplicáveis e o histórico do CNIS — fatores vitais que determinam o melhor momento e regra para se aposentar.",
        "O atendimento é realizado integralmente de forma online, possibilitando orientação jurídica de ponta para segurados em qualquer estado do Brasil."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Gostaria de uma orientação sobre minha aposentadoria por tempo de contribuição.",
    infoLabel: "O que avaliamos",
    infoTitle: <>O que define o sucesso<br />da sua aposentadoria</>,
    infoSub: "Uma análise detalhada evita erros que podem custar anos de espera ou milhares de reais.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Quanto tempo você já contribuiu?", desc: "O tempo total de contribuição, incluindo períodos especiais, rurais e em diferentes regimes, é o ponto de partida." },
        { icon: <BriefcaseIcon />, title: "Qual regra de transição se aplica?", desc: "A Reforma criou 5 regras de transição. A escolha errada pode atrasar sua aposentadoria ou reduzir o valor." },
        { icon: <BookIcon />, title: "Seu CNIS está correto?", desc: "Erros no CNIS são comuns e podem excluir vínculos, reduzir tempo ou diminuir o salário de benefício." },
        { icon: <UsersIcon />, title: "Você tem direito adquirido?", desc: "Quem cumpriu os requisitos antes da Reforma pode se aposentar pelas regras antigas, geralmente mais vantajosas." }
    ],
    deadlineText: <>Cada mês sem análise pode significar perda de valor. O fator previdenciário e as regras de transição mudam o cenário periodicamente.</>,
    faqTitle: <>Dúvidas comuns sobre<br />aposentadoria por tempo de contribuição</>,
    faqs: [
        { q: "A aposentadoria por tempo de contribuição acabou com a reforma?", a: "A modalidade pura e sem idade mínima acabou para quem começou a contribuir após a Reforma (13/11/2019). No entanto, quem já trabalhava antes dessa data entra nas chamadas 'Regras de Transição', que ainda permitem aposentadorias precoces ou com benefícios integrais.", cta: "Fazer estudo de regras de transição", ctaMsg: "Olá! Quero descobrir em qual regra de transição eu me encaixo." },
        { q: "Quais são as regras de transição em 2026?", a: "Para a aposentadoria por tempo de contribuição, destacam-se a Regra dos Pontos (102 homens / 92 mulheres em 2026), Idade Progressiva, Pedágio 50% e Pedágio 100%. Cada uma tem cálculos diferentes e pode gerar variações gigantescas no valor final.", cta: "Saber qual a melhor regra para mim", ctaMsg: "Olá! Gostaria de uma análise para saber qual regra de transição me paga o maior valor." },
        { q: "Posso usar tempo de escola técnica ou militar?", a: "Sim, é perfeitamente possível usar período de Aluno-Aprendiz, serviço militar militar e tempo de trabalho rural (economia familiar) para adiantar sua aposentadoria, desde que devidamente comprovados documentalmente." },
        { q: "O Pedágio de 50% e 100% vale a pena?", a: "O pedágio de 100% costuma ser a regra de ouro para não sofrer o redutor do fator previdenciário, enquanto a de 50% muitas vezes reduz o valor da sua aposentadoria drasticamente. É preciso colocar na ponta do lápis.", cta: "Comparar cálculos do pedágio", ctaMsg: "Olá, preciso de um cálculo para aposentadoria no pedágio de 50% ou 100%." },
        { q: "O que fazer se o INSS não reconhecer todo o meu tempo?", a: "Se o INSS negar o pedido ou descartar vínculos de empresas que faliram ou não pagaram o INSS, você pode apresentar um Recurso Administrativo ou entrar com Ação Judicial, apresentando sua carteira de trabalho (CTPS), holerites ou extrato de FGTS." },
        { q: "Devo fazer os recolhimentos em atraso?", a: "Cuidado! Pagar guias em atraso do INSS por conta própria pode ser dinheiro jogado fora. Em muitos casos, se a qualidade de segurado tiver sido perdida ou dependendo da época, os pagamentos em atraso não contam nem pra carência nem pra tempo. Fale com nossa equipe antes de emitir qualquer guia.", cta: "Falar com especialista sobre recolhimentos em atraso", ctaMsg: "Olá! Gostaria de saber se devo pagar o INSS em atraso." }
    ],
    ctaTitle: <>Descubra o melhor caminho<br />para sua aposentadoria</>,
    ctaDescription: "O primeiro contato é gratuito. Envie seu CNIS e receba uma análise das suas possibilidades.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar minha aposentadoria por tempo de contribuição.",
};

export default function Page() {
    return <LandingPageTemplate data={data} />;
}
