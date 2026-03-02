import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planejamento Previdenciário | Advogadas Prev",
    description: "Faça seu planejamento previdenciário e garanta a melhor aposentadoria possível sem perder tempo ou dinheiro.",
};

const data: LandingPageData = {
    title: "Planejamento Previdenciário | Advogadas Prev",
    description: "Faça seu planejamento previdenciário e garanta a melhor aposentadoria possível sem perder tempo ou dinheiro.",
    heroTitle: <>Planejamento<br /><em className="text-[#1B3A6B] not-italic">Previdenciário</em><br />inteligente e estratégico</>,
    heroDescription: "A diferença entre uma aposentadoria comum e a aposentadoria que você merece pode ser de anos de espera — ou de dezenas de milhares de reais. O planejamento previdenciário identifica o melhor momento e a melhor regra.",
    heroImg: "/juliana-perfil-5.jpg",
    profileImg: "/juliana-perfil-4.jpg",
    heroPrimaryCTA: "Quero Planejar Minha Aposentadoria",
    heroPrimaryMsg: "Olá! Gostaria de fazer um planejamento previdenciário para minha aposentadoria.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre planejamento previdenciário. Pode me orientar?",
    trustItems: ["Análise completa de todas as regras aplicáveis", "Simulação de cenários e valores com dados reais", "Estratégia personalizada para maximizar benefício"],
    stripFocus: "Planejamento estratégico",
    profileFocus: "Especialista em planejamento previdenciário",
    profileBio: [
        "Com atuação focada em planejamento previdenciário, a Dra. Juliana cruza os dados do CNIS com todas as regras vigentes para encontrar o cenário mais vantajoso — evitando que você se aposente antes da hora ou com valor abaixo do ideal.",
        "O atendimento é realizado de forma 100% online, com entrega de relatório completo."
    ],
    profileCTAMsg: "Olá, Dra. Juliana! Gostaria de fazer um planejamento previdenciário.",
    infoLabel: "O que analisamos",
    infoTitle: <>O que faz a diferença<br />no seu planejamento</>,
    infoSub: "Um planejamento bem feito compara cenários e descobre oportunidades que o INSS não conta para você.",
    infoItems: [
        { icon: <CalendarIcon />, title: "Todas as regras de transição comparadas", desc: "São 5 regras de transição. O planejamento simula cada uma para encontrar a que oferece o melhor resultado." },
        { icon: <BriefcaseIcon />, title: "Correção e análise do CNIS", desc: "Identificamos vínculos ausentes, contribuições em atraso e períodos que podem ser incluídos no cálculo." },
        { icon: <BookIcon />, title: "Simulação de valores futuros", desc: "Projetamos o valor do benefício em diferentes cenários: aposentar agora, contribuir mais 1, 2 ou 5 anos." },
        { icon: <UsersIcon />, title: "Estratégia personalizada", desc: "Cada segurado tem uma realidade diferente. O relatório indica o melhor caminho considerando suas prioridades." }
    ],
    faqTitle: <>Dúvidas comuns sobre<br />planejamento previdenciário</>,
    faqs: [
        { q: "O que é planejamento previdenciário?", a: "É uma análise técnica que cruza seu histórico de contribuições com todas as regras aplicáveis para definir o melhor momento de se aposentar e com o maior valor possível." },
        { q: "Quanto custa o planejamento?", a: "O primeiro contato é gratuito. O valor do relatório completo depende da complexidade do caso e é informado antes de qualquer compromisso.", cta: "Saber mais sobre valores", ctaMsg: "Olá! Gostaria de saber o valor para fazer um planejamento previdenciário." },
        { q: "Já posso me aposentar. Vale a pena planejar?", a: "Sim. Mesmo quem já tem direito pode se beneficiar esperando poucos meses para entrar em uma regra com valor maior. A diferença pode chegar a milhares de reais." },
        { q: "Preciso de quais documentos?", a: "O principal é o CNIS (Cadastro Nacional de Informações Sociais). A própria advogada pode orientar como extrair pelo Meu INSS." },
        { q: "O planejamento serve para autônomos e MEI?", a: "Sim. Contribuintes individuais, MEI e facultativos também precisam de planejamento — e frequentemente têm mais a ganhar com a análise estratégica." }
    ],
    ctaTitle: <>Descubra o melhor caminho<br />para sua aposentadoria</>,
    ctaDescription: "Envie seu CNIS e receba uma análise preliminar das estratégias disponíveis para o seu caso.",
    ctaButtonText: "Quero Planejar Minha Aposentadoria",
    ctaMsg: "Olá! Gostaria de fazer um planejamento previdenciário.",
    lawyerId: "juliana"
};

export default function Page() { return <LandingPageTemplate data={data} />; }
