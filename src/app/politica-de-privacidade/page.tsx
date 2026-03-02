import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Advogadas Prev",
    description: "Política de Privacidade e Termos de Uso do site Advogadas Prev. Saiba como coletamos e tratamos seus dados.",
};

export default function PoliticaDePrivacidade() {
    return (
        <div className="font-sans text-[#1A1A2E] bg-white pb-24">
            {/* HEADER SIMPLES */}
            <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-[20px] border-b border-[#E8E8EE]">
                <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center">
                    <Link href="/" className="font-playfair text-xl font-bold text-[#1B3A6B]">
                        Advogadas Prev
                    </Link>
                </div>
            </header>

            <main className="max-w-[800px] mx-auto px-6 pt-16">
                <h1 className="font-playfair text-4xl font-bold mb-8">Política de Privacidade</h1>
                <p className="text-sm text-[#4A4A5A] mb-12">Atualizada em 01 de março de 2026.</p>

                <div className="prose prose-blue max-w-none text-[#4A4A5A] text-[15px] leading-relaxed">
                    <p>O escritório <strong>Advogadas Prev</strong> ("Nós", "Nosso(a)") leva a sua privacidade a sério. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">1. Dados que Coletamos</h2>
                    <p>Coletamos dados estritamente necessários para a prestação dos nossos serviços jurídicos ou para melhorar a sua experiência em nosso site:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li><strong>Dados de Contato:</strong> Nome, número de telefone (WhatsApp) e informações que você decida nos enviar voluntariamente ao entrar em contato conosco.</li>
                        <li><strong>Dados de Navegação:</strong> Informações genéricas através de cookies e tecnologias de rastreamento (como Google Analytics e Google Ads), incluindo endereço IP, tipo de navegador, tempo gasto nas páginas e localização aproximada, de forma anonimizada quando possível.</li>
                        <li><strong>Dados Sensíveis Técnicos (Calculadora):</strong> As informações inseridas em nossas calculadoras de diagnóstico (como renda familiar ou idade) são processadas temporariamente no navegador de forma anônima e não são atreladas a você nem armazenadas em nossos servidores.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">2. Finalidade do Tratamento</h2>
                    <p>Usamos as suas informações para as seguintes finalidades:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Responder às suas solicitações e prestar o atendimento jurídico preventivo ou contencioso (via WhatsApp).</li>
                        <li>Cumprir obrigações legais, regulatórias ou do estatuto da OAB.</li>
                        <li>Melhorar nosso site, personalizar campanhas de marketing e analisar o tráfego de forma estatística.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">3. Compartilhamento de Dados</h2>
                    <p>As suas informações são tratadas sob sigilo profissional estrito. Nós <strong>não</strong> vendemos, alugamos ou repassamos seus dados a terceiros. Eles poderão ser compartilhados apenas com:</p>
                    <ul className="list-disc pl-5 mt-3 space-y-2">
                        <li>Sistemas do Poder Judiciário (INSS, TRF, etc) ou órgãos públicos no exercício da advocacia (após fechamento de contrato e procuração específica).</li>
                        <li>Parceiros de tecnologia (Google, Meta) para fins de processamento analítico de acessos no site, sob compromisso de confidencialidade padrão das respectivas plataformas.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">4. Política de Cookies</h2>
                    <p>Nosso site utiliza cookies para garantir seu funcionamento e analisar tráfego. No seu primeiro acesso, solicitamos o seu consentimento através de nosso Banner de Cookies. Você pode configurar seu navegador para bloquear cookies ou usar o menu do banner para aceitar apenas os "Essenciais". Note que o bloqueio de certos cookies pode afetar alguma funcionalidade ou desempenho do site.</p>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">5. Seus Direitos (LGPD)</h2>
                    <p>Você tem o direito de solicitar a confirmação do tratamento de seus dados, acesso a eles, correção de dados incompletos ou eliminação dos dados desnecessários através dos nossos canais oficiais.</p>

                    <h2 className="text-xl font-bold text-[#1B3A6B] mt-10 mb-4">6. Contato</h2>
                    <p>Para exercer qualquer um de seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco através de:</p>
                    <ul className="mt-3">
                        <li><strong>WhatsApp:</strong> (45) 98811-0440 / (45) 99959-2867</li>
                        <li><strong>E-mail:</strong> isabelacechet@gmail.com</li>
                        <li><strong>Endereço Sede:</strong> R. Santa Catarina, 481 — Centro, Cascavel/PR · 85801-040</li>
                    </ul>
                </div>

                <div className="mt-16 pt-8 border-t border-[#E8E8EE]">
                    <Link href="/" className="text-[#1B3A6B] font-bold text-sm hover:underline">← Voltar para a página inicial</Link>
                </div>
            </main>
        </div>
    );
}
