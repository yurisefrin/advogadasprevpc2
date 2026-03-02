import LandingPageTemplate, { type LandingPageData, UsersIcon, BriefcaseIcon, BookIcon, CalendarIcon, HeartIcon } from "@/components/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pensão por Morte INSS | Proteção aos Dependentes | Advogadas Prev",
    description: "Teve a pensão por morte negada pelo INSS por falta de união estável ou qualidade de segurado? Veja prazos e descubra como tentar reverter a decisão.",
};

const data: LandingPageData = {
    title: "Pensão por Morte INSS | Proteção aos Dependentes | Advogadas Prev",
    description: "Teve a pensão por morte negada pelo INSS por falta de união estável ou qualidade de segurado? Veja prazos e descubra como tentar reverter a decisão.",
    heroTitle: <>Pensão por Morte<br /><em className="text-[#1B3A6B] not-italic">negada ou com</em><br /><em className="text-[#1B3A6B] not-italic">valor incorreto</em>?</>,
    heroDescription: "A pensão por morte é um direito dos dependentes do segurado falecido. Mas o INSS frequentemente nega por falta de qualidade de segurado, dependência econômica não comprovada ou erros no cálculo.",
    heroImg: "/foto-isabela.webp",
    profileImg: "/isa2.webp",
    lawyerId: "isabela",
    heroPrimaryCTA: "Quero Analisar Meu Caso",
    heroPrimaryMsg: "Olá! Tive a pensão por morte negada ou com valor incorreto e gostaria de orientação.",
    heroSecondaryCTA: "Tenho dúvidas",
    heroSecondaryMsg: "Olá! Tenho dúvidas sobre pensão por morte. Pode me orientar?",
    trustItems: ["Análise individual da documentação", "Verificação da dependência econômica", "Foco exclusivo em Direito Previdenciário"],
    urgencyText: <>O prazo para requerer a pensão por morte com retroatividade total é de <strong>90 dias</strong> após o óbito.</>,
    urgencyMsg: "Olá! Preciso verificar o prazo da minha pensão por morte.",
    stripFocus: "Proteção aos dependentes",
    profileFocus: "Especialista em proteção familiar previdenciária",
    profileBio: [
        "Com atuação focada em pensão por morte, analisa cada caso verificando a qualidade de segurado do falecido, a dependência econômica dos beneficiários e o cálculo correto do benefício.",
        "O atendimento é 100% online, com suporte sensível ao momento delicado da família."
    ],
    profileCTAMsg: "Olá, Dra. Isabela! Gostaria de orientação sobre pensão por morte.",
    infoLabel: "Critérios avaliados",
    infoTitle: <>O que o INSS verifica<br />na pensão por morte</>,
    infoSub: "Cada detalhe pode ser determinante para o deferimento e o valor correto.",
    infoItems: [
        { icon: <UsersIcon />, title: "Quem é dependente?", desc: "Cônjuge, companheiro(a), filhos menores de 21 anos, filhos inválidos e, em alguns casos, pais e irmãos podem ser dependentes." },
        { icon: <CalendarIcon />, title: "O falecido estava contribuindo?", desc: "É necessário que o falecido fosse segurado do INSS ou estivesse no período de graça. A qualidade de segurado é verificada." },
        { icon: <BookIcon />, title: "Existe prova de união estável?", desc: "Para companheiros e companheiras, é necessário comprovar a união estável. Fotos, contas conjuntas e declarações são aceitas." },
        { icon: <BriefcaseIcon />, title: "Qual o valor correto da pensão?", desc: "Após a Reforma, a pensão é de 50% + 10% por dependente adicional. A base de cálculo pode gerar erros." }
    ],
    deadlineText: <>Se requerida até <strong>90 dias</strong> do óbito, o pagamento retroage à data do falecimento. Após esse prazo, conta a partir do requerimento.</>,
    faqTitle: <>Dúvidas comuns sobre<br />pensão por morte</>,
    faqs: [
        { q: "O INSS não reconheceu nossa união estável. O que fazer?", a: "Esse é o motivo nº 1 de negativas para companheiros. A lei exige no mínimo 2 provas materiais (contas conjuntas, filhos em comum, fotos, plano de saúde). Se o INSS negou administrativamente, a Justiça costuma ser muito mais flexível, aceitando testemunhas fortes aliadas a provas simples.", cta: "Falar sobre prova de União Estável", ctaMsg: "Olá! O INSS negou minha união estável para a pensão por morte." },
        { q: "Se eu casar de novo, perco a pensão do primeiro cônjuge?", a: "Regra geral: NÃO! Um mito muito comum é achar que perde a pensão se casar novamente. Você só não pode acumular duas pensões por morte de cônjuges diferentes (terá que escolher a de maior valor)." },
        { q: "O INSS disse que ele tinha perdido a 'qualidade de segurado'. E agora?", a: "Significa que ele estava há muito tempo sem pagar o INSS antes de falecer. Porém, existem teses jurídicas para estender esse 'período de graça' (tempo que a pessoa fica coberta mesmo sem pagar) para até 3 anos se houver desemprego involuntário.", cta: "Analisar perda de qualidade de segurado", ctaMsg: "O INSS disse que o falecido não tinha qualidade de segurado." },
        { q: "Como ficou o valor da pensão depois da Reforma?", a: "A pensão agora paga 50% do valor que o falecido recebia (ou teria direito a receber se aposentado por invalidez) + 10% por cada dependente. Uma viúva sozinha, por exemplo, recebe 60% da aposentadoria dele, limitado ao salário mínimo se for a única renda." },
        { q: "Ex-esposa que recebe pensão alimentícia tem direito?", a: "Sim! Se a ex-esposa recebia pensão alimentícia ou comprovar forte dependência econômica após a separação, ela tem direito de concorrer à pensão por morte junto com a atual companheira de forma dividida." }
    ],
    ctaTitle: <>Proteja seus direitos<br />como dependente</>,
    ctaDescription: "O primeiro contato é gratuito. Envie a documentação disponível e receba orientação.",
    ctaButtonText: "Quero Analisar Meu Caso",
    ctaMsg: "Olá! Gostaria de analisar meu caso de pensão por morte."
};

export default function Page() { return <LandingPageTemplate data={data} />; }
