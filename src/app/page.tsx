import Image from "next/image";
import React from "react";
import { CalculatorIcon } from "@/components/LandingPageTemplate";
import HomeServiceExplorer from "@/components/HomeServiceExplorer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogadas Prev | Especialistas em Direito Previdenciário",
  description: "Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS. Atendimento especializado 100% online para todo o Brasil.",
};

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://advogadasprev.com.br/#website",
        "url": "https://advogadasprev.com.br",
        "name": "Advogadas Prev",
        "description": "Especialistas em Previdência",
        "publisher": { "@id": "https://advogadasprev.com.br/#organization" },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "LegalService",
        "@id": "https://advogadasprev.com.br/#organization",
        "name": "Advogadas Prev",
        "url": "https://advogadasprev.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://advogadasprev.com.br/logo.webp",
          "width": 800,
          "height": 210
        },
        "image": "https://advogadasprev.com.br/logo.webp",
        "telephone": "+5545988110440",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Atendimento 100% Online",
          "addressCountry": "BR"
        },
        "sameAs": []
      }
    ]
  };

  return (
    <div className="font-sans">
      <Script id="schema-home" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(schemaOrg)}
      </Script>

      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-[20px] border-b border-[--line]">
        <div className="wrap flex items-center justify-between h-[68px] gap-4">
          <div className="logo">
            <Image src="/logo.webp" width={160} height={42} alt="Advogadas Prev" priority />
          </div>
          <nav className="hidden md:flex items-center gap-[2px]">
            <a href="#servicos" className="text-[13px] font-medium text-[--mid] px-[13px] py-2 rounded-lg hover:text-[--blue] hover:bg-[--blue-lter] transition-all">Áreas de Atuação</a>
            <a href="#sobre" className="text-[13px] font-medium text-[--mid] px-[13px] py-2 rounded-lg hover:text-[--blue] hover:bg-[--blue-lter] transition-all">Quem Somos</a>
            <a href="#atendimento" className="text-[13px] font-medium text-[--mid] px-[13px] py-2 rounded-lg hover:text-[--blue] hover:bg-[--blue-lter] transition-all">Como Funciona</a>
            <a href="#contato" className="text-[13px] font-medium text-[--mid] px-[13px] py-2 rounded-lg hover:text-[--blue] hover:bg-[--blue-lter] transition-all">Contato</a>
          </nav>
          <a href="https://wa.me/5545988110440" className="btn-wa flex items-center gap-2 bg-[--green-wa] text-white text-sm font-semibold px-5 py-[10px] rounded-full hover:opacity-90 transition-all">
            <WhatsAppIcon />
            Quero saber se tenho direito
          </a>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="hero pt-14 pb-16 border-b border-[--line] overflow-hidden relative">
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[72px] items-center relative z-[1]">
              <div>
                <p className="eyebrow a1 inline-flex items-center gap-2 bg-[--blue-lt] text-[--blue] text-[11px] font-bold tracking-[0.09em] uppercase px-[14px] py-[6px] rounded-full mb-5">
                  <span className="eyebrow-dot w-[6px] h-[6px] rounded-full bg-[--green-wa] animate-pulse"></span>
                  Especialistas em Direito Previdenciário · Todo o Brasil
                </p>
                <h1 className="a2 font-playfair text-[clamp(34px,4.4vw,52px)] font-bold leading-[1.1] text-[--ink] tracking-[-0.025em] mb-[18px]">
                  O INSS é complexo.<br /><em className="italic text-[--blue] not-italic">Proteger seus direitos</em><br />é o que fazemos.
                </h1>
                <p className="hero-sub a3 text-[17px] leading-[1.7] text-[--mid] max-w-[490px] mb-[14px]">
                  Do planejamento da aposentadoria ao restabelecimento de benefícios, o Advogadas Prev oferece orientação jurídica especializada, estratégica e 100% digital — para que você receba exatamente o que tem direito.
                </p>
                <p className="resp-pill a3 inline-flex items-center gap-[7px] bg-[--green-lt] border border-[--green-border] rounded-full px-[14px] py-[6px] text-xs font-semibold text-[--green] mb-[26px]">
                  <span className="resp-dot w-[6px] h-[6px] rounded-full bg-[--green-wa] animate-pulse"></span>
                  Respondemos em até 2h · Todos os dias, 8h–20h
                </p>
                <div className="hero-ctas a4 flex items-center gap-[14px] flex-wrap mb-[30px]">
                  <a href="https://wa.me/5545988110440" className="btn-wa bg-[--green-wa] text-white text-base font-semibold px-8 py-[15px] rounded-full flex items-center gap-2 hover:opacity-90 transition-all">
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    Quero saber se tenho direito
                  </a>
                  <a href="#servicos" className="btn-outline inline-flex items-center gap-2 bg-[--blue] text-white border-[1.5px] border-[--blue] text-[15px] font-semibold px-7 py-[13px] rounded-full hover:opacity-90 transition-all shadow-md">
                    Ver Áreas de Atuação
                  </a>
                </div>
                <div className="trust-list a5 flex flex-col gap-[9px]">
                  <TrustItem icon={<ShieldIcon />} text="Advogadas OAB/PR com especialização exclusiva em Previdenciário" />
                  <TrustItem icon={<ClockIcon />} text="Atendimento imediato · Sem burocracia, sem deslocamento" />
                  <TrustItem icon={<MapPinIcon />} text="Atendimento 100% online para qualquer estado do Brasil" />
                </div>
              </div>

              <div className="a6">
                <div className="hero-photo-wrap rounded-[--r] overflow-hidden aspect-[4/5] bg-[--blue-lt] shadow-[0_28px_72px_rgba(27,58,107,0.16)] relative">
                  <Image src="/foto-equipe.png" width={800} height={1000} className="w-full h-full object-cover object-[center_15%]" alt="Equipe Advogadas Prev - Dra. Isabela e Dra. Juliana" priority />
                   <div className="photo-badge absolute bottom-[18px] left-[14px] right-[14px] bg-[--ink]/80 backdrop-blur-[12px] rounded-[14px] p-[14px_18px] flex items-center justify-between shadow-2xl border border-white/10">
                    <div>
                       <div className="pb-names font-playfair text-sm font-bold text-white leading-[1.3]">Dra. Isabela & Dra. Juliana</div>
                       <div className="pb-oab text-[11px] text-white/70 mt-[3px]">OAB/PR · Direito Previdenciário</div>
                    </div>
                     <div className="pb-online flex items-center gap-[6px] text-[11px] font-semibold text-[#86EFAC] whitespace-nowrap">
                       <div className="pb-dot w-[7px] h-[7px] rounded-full bg-[--green-wa] animate-pulse"></div> Online agora
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STRIP ─── */}
        <div className="strip py-5 bg-[--bg] border-b border-[--line]">
          <div className="wrap flex items-center justify-center gap-8 flex-wrap">
            <StripItem icon={<ShieldIcon className="w-[17px] h-[17px] text-[--blue]" />} text="Inscritas na OAB/PR" />
            <div className="strip-sep hidden md:block w-[1px] h-[22px] bg-[--line]"></div>
            <StripItem icon={<DeviceIcon />} text="Atendimento 100% Digital" />
            <div className="strip-sep hidden md:block w-[1px] h-[22px] bg-[--line]"></div>
            <StripItem icon={<TargetIcon />} text="Foco exclusivo em Previdenciário" />
            <div className="strip-sep hidden md:block w-[1px] h-[22px] bg-[--line]"></div>
            <StripItem icon={<MapPinIcon className="w-[17px] h-[17px] text-[--blue]" />} text="Todo o Brasil" />
          </div>
        </div>

        {/* ─── DESTAQUE CALCULADORA BPC ─── */}
        <section className="py-12 bg-[#EEF2F6] border-b border-[#E2E8F0] overflow-hidden" id="calculadora-bpc">
          <div className="wrap">
            <div className="bg-gradient-to-r from-[#1B3A6B] to-[#0A1A3B] rounded-[24px] p-6 md:p-10 relative overflow-hidden group shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
                <div>
                  <h2 className="font-playfair text-[26px] md:text-[34px] font-bold text-white leading-tight mb-3">
                    A renda da sua família dá direito ao BPC?
                  </h2>
                  <p className="text-white/80 text-[15px] max-w-[500px] mb-6">
                    Responda 5 perguntas rápidas e entenda na hora sua viabilidade jurídica para 2026.
                  </p>
                  <a href="/bpc" className="bg-[#15803D] text-white text-[15px] font-bold px-8 py-3.5 rounded-full hover:bg-[#16A34A] transition-all flex items-center gap-2 w-fit">
                    Usar Calculadora BPC
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[18px] h-[18px]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
                <div className="hidden lg:flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <CalculatorIcon className="w-40 h-40 text-white/10 group-hover:text-white/20 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVIÇOS ─── */}
        <section className="section py-[56px] border-b border-[--line]" id="servicos">
          <div className="wrap">
            <p className="section-label text-[11px] font-bold tracking-[0.12em] uppercase text-[--blue] mb-[10px]">Áreas de Atuação</p>
            <h2 className="font-playfair text-[clamp(26px,3.2vw,38px)] font-bold text-[--ink] leading-[1.15] tracking-[-0.022em]">Em qual momento da sua vida<br />podemos ajudar?</h2>
            <p className="section-sub text-base leading-[1.7] text-[--mid] mt-[12px] max-w-[540px] mb-12">Nosso escritório atua exclusivamente em Direito Previdenciário. Toque em cada área para ver os serviços disponíveis.</p>

            <HomeServiceExplorer />
          </div>
        </section>

        {/* ─── SOBRE AS ESPECIALISTAS ─── */}
        <section className="section section-alt py-[56px] bg-[--bg]" id="sobre">
          <div className="wrap">
            <p className="section-label text-[11px] font-bold tracking-[0.12em] uppercase text-[--blue] mb-[10px]">Quem Somos</p>
            <h2 className="font-playfair text-[clamp(26px,3.2vw,38px)] font-bold text-[--ink] leading-[1.15] tracking-[-0.022em]">Especialização que faz<br />toda a diferença no seu caso.</h2>
            <p className="section-sub text-base leading-[1.7] text-[--mid] mt-[12px] max-w-[540px]">Não fazemos "de tudo um pouco". O Advogadas Prev tem foco exclusivo em Direito Previdenciário. Isso significa que cada detalhe das regras do INSS, cada jurisprudência relevante e cada mudança de política fazem parte do nosso dia a dia.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <TeamCard
                name="Dra. Isabela Cechet"
                oab="OAB/PR 95.762"
                image="/isa2.webp"
                bio="Com atuação focada em benefícios por incapacidade e auxílio-doença, a Dra. Isabela analisa cada caso com base na documentação médica, no histórico contributivo e na atividade profissional do cliente — os três pilares que determinam o resultado de qualquer contestação ao INSS."
                waNum="5545988110440"
              />
              <TeamCard
                name="Dra. Juliana Grignani"
                oab="OAB/PR 90.817"
                image="/juliana-perfil-5.jpg"
                placeholder={false}
                bio="Especialista em planejamento previdenciário, aposentadorias e proteção social, a Dra. Juliana atua com foco em maximizar o benefício de cada cliente, antecipando estratégias antes mesmo do pedido formal."
                waNum="5545999592867"
              />
            </div>

            {/* Números de credibilidade removidos a pedido do usuário */}
          </div>
        </section>

        {/* ─── EXPERIÊNCIA DO CLIENTE ─── */}
        <section className="section py-[56px]" id="atendimento">
          <div className="wrap">
            <p className="section-label text-[11px] font-bold tracking-[0.12em] uppercase text-[--blue] mb-[10px]">A Experiência do Cliente</p>
            <h2 className="font-playfair text-[clamp(26px,3.2vw,38px)] font-bold text-[--ink] leading-[1.15] tracking-[-0.022em]">Atendimento 100% digital.<br />Simples, ágil, de qualquer lugar.</h2>
            <p className="section-sub text-base leading-[1.7] text-[--mid] mt-[12px] max-w-[540px]">Você não precisa sair de casa, enfrentar fila ou depender de horário comercial. Todo o processo é conduzido pelo WhatsApp e videoconferência.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-12 bg-[--line] rounded-[--r] overflow-hidden">
              <StepItem
                num="01"
                title="Diagnóstico de Viabilidade em 2h"
                icon={<MessageIcon />}
                description="Não fique na dúvida. Nossa equipe analisa seu histórico e te diz, de forma clara e rápida, quais as chances reais de recuperar seu pagamento e receber os valores atrasados."
              />
              <StepItem
                num="02"
                title="Estratégia Jurídica"
                icon={<CheckCircleIcon />}
                description="Definimos a melhor estratégia: recurso administrativo, ação judicial ou planejamento preventivo. Orientação clara e sem 'juridiquês'."
              />
              <StepItem
                num="03"
                title="Acompanhamento Transparente"
                icon={<ShieldIcon className="w-[22px] h-[22px] text-[--blue]" />}
                description="Cada etapa do processo é comunicada em tempo real. Nada acontece sem que você saiba e entenda."
              />
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="final-cta py-24 text-center bg-[#0B0F19] relative overflow-hidden" id="contato">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(27,58,107,0.4)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="wrap relative z-[1]">
            <p className="section-label text-[11px] font-bold tracking-[0.12em] uppercase text-white/35 mb-[10px]">Próximo Passo</p>
            <h2 className="font-playfair text-[clamp(24px,7vw,34px)] font-bold text-white max-w-[580px] mx-auto mb-[14px]">Seu direito previdenciário<br />começa com uma conversa.</h2>
            <p className="section-sub text-base text-white/50 max-w-[460px] mx-auto mb-8">O primeiro contato é gratuito. Conte sua situação, envie os documentos disponíveis e receba orientação especializada — sem compromisso.</p>
            <p className="cta-resp inline-flex items-center gap-[7px] bg-[rgba(37,211,102,0.12)] border border-[rgba(37,211,102,0.25)] rounded-full px-[14px] py-[6px] text-xs font-semibold text-[#86EFAC] mb-7">
              <span className="cta-resp-dot w-[6px] h-[6px] rounded-full bg-[--green-wa] animate-pulse"></span>
              Respondemos em até 2h · Todos os dias, 8h–20h
            </p>
            <div className="flex items-center justify-center gap-[14px] flex-wrap">
              <a href="https://wa.me/5545988110440" className="btn-wa bg-[#15803D] text-white text-base font-semibold px-8 py-[15px] rounded-full flex items-center gap-2 hover:bg-[#16A34A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                Entrar em Contato com o Escritório
              </a>
            </div>
            <p className="mt-8 text-[11px] text-white/25 max-w-[480px] mx-auto">Este contato não implica contratação nem garante resultado. A orientação depende de análise individual da situação e documentação de cada cliente. Advogadas inscritas na OAB/PR.</p>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[--line] pt-11 pb-8 bg-white">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
            <div className="footer-brand">
              <Image src="/logo.webp" alt="Advogadas Prev" width={160} height={42} loading="lazy" className="mb-[14px]" />
              <p className="text-xs text-[--light] leading-[1.8]">
                Escritório especializado em Direito Previdenciário.<br />
                Atendimento 100% online para todo o Brasil.<br />
                R. Santa Catarina, 481 — Centro, Cascavel/PR · 85801-040<br />
                <a href="mailto:contato.advogadasprev@gmail.com" className="hover:text-[--mid]">contato.advogadasprev@gmail.com</a><br />
                <a href="https://wa.me/5545988110440" className="hover:text-[--mid]">+55 45 98811-0440</a> ·
                <a href="https://wa.me/5545999592867" className="hover:text-[--mid]">+55 45 99959-2867</a>
              </p>
            </div>
            <div className="footer-col">
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[--mid] mb-[14px]">Áreas de Atuação</h4>
              <ul className="flex flex-col gap-2 list-none">
                <FooterLink href="/aposentadoria-idade">Aposentadoria por Idade</FooterLink>
                <FooterLink href="/planejamento-previdenciario">Planejamento Previdenciário</FooterLink>
                <FooterLink href="/auxilio-doenca">Auxílio-Doença</FooterLink>
                <FooterLink href="/bpc-loas-deficiencia">BPC/LOAS</FooterLink>
                <FooterLink href="/pensao-por-morte">Pensão por Morte</FooterLink>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[--mid] mb-[14px]">Institucional</h4>
              <ul className="flex flex-col gap-2 list-none mb-5">
                <FooterLink href="#sobre">Quem Somos</FooterLink>
                <FooterLink href="/politica-de-privacidade">Política de Privacidade</FooterLink>
              </ul>
              <h4 className="text-[11px] font-bold tracking-[0.1em] uppercase text-[--mid] mb-[14px]">Redes Sociais</h4>
              <ul className="flex flex-col gap-2 list-none">
                <FooterLink href="https://www.instagram.com/julianawesslergrignani/">Instagram</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
              </ul>
            </div>
          </div>
          <div className="mt-9 pt-5 border-t border-[--line] flex items-center justify-between flex-wrap gap-3">
            <p className="text-[11px] text-[--light]">© 2026 Advogadas Prev · Dra. Isabela Wrubel Cechet — OAB/PR 95.762 · Dra. Juliana Grignani — OAB/PR 90.817</p>
            <a href="/politica-de-privacidade" className="text-[11px] text-[--light] hover:text-[--mid]">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* ─── COMPONENTES AUXILIARES ─── */ }

function WhatsAppIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.856L.063 23.487a.5.5 0 0 0 .617.611l5.75-1.633A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.577-.49-5.075-1.346l-.363-.213-3.758 1.068 1.002-3.659-.234-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function ShieldIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}

function MapPinIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}

function DeviceIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[17px] h-[17px] text-[--blue]"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>;
}

function TargetIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[17px] h-[17px] text-[--blue]"><path d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>;
}

function StackIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>;
}

function ActivityIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
}

function UsersIcon({ className = "" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-6 h-6 ${className}`}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

function MessageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-[--blue]"><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z" /></svg>;
}

function CheckCircleIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[22px] h-[22px] text-[--blue]"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>;
}

interface TrustItemProps {
  icon: React.ReactNode;
  text: string;
}

function TrustItem({ icon, text }: TrustItemProps) {
  return (
    <div className="trust-item flex items-center gap-[10px] text-[13px] text-[--mid] font-medium">
      <div className="text-[--blue] shrink-0">{icon}</div>
      {text}
    </div>
  );
}

interface StripItemProps {
  icon: React.ReactNode;
  text: string;
}

function StripItem({ icon, text }: StripItemProps) {
  return (
    <div className="strip-item flex items-center gap-[9px] text-[13px] font-medium text-[--mid]">
      {icon}
      {text}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  tag: string;
  tagClass: string;
  icon: React.ReactNode;
  iconClass: string;
  description: string;
  items: { label: string; href: string }[];
  ctaText: string;
  ctaClass: string;
  href?: string;
}

function ServiceCard({ title, tag, tagClass, icon, iconClass, description, items, ctaText, ctaClass, href = "#" }: ServiceCardProps) {
  return (
    <div className="svc-card bg-white p-[36px_30px] flex flex-col hover:bg-[--blue-lter] transition-colors relative group">
      <div className={`svc-icon ${iconClass} w-[52px] h-[52px] rounded-xe flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <p className={`svc-tag ${tagClass} text-[10px] font-bold tracking-[0.1em] uppercase mb-[10px]`}>{tag}</p>
      <h3 className="font-playfair text-[21px] font-bold text-[--ink] leading-[1.2] mb-3 group-hover:text-[--blue] transition-colors"><a href={href}>{title}</a></h3>
      <p className="text-sm leading-[1.75] text-[--mid] mb-5 flex-1">{description}</p>
      <div className="svc-list flex flex-col gap-2 mb-7">
        {items.map((item, idx) => (
          <a key={idx} href={item.href} className="svc-item flex items-center gap-[10px] text-[13px] text-[--mid] font-medium hover:text-[--blue] transition-colors">
            <span className="w-1 h-1 rounded-full bg-current shrink-0"></span>
            {item.label}
          </a>
        ))}
      </div>
      <a href={href} className={`svc-cta ${ctaClass} flex items-center gap-2 text-[13px] font-bold mt-auto group-hover:gap-3 transition-all z-20`}>
        {ctaText}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </a>
    </div>
  );
}

interface TeamCardProps {
  name: string;
  oab: string;
  image: string;
  bio: string;
  waNum: string;
  placeholder?: boolean;
}

function TeamCard({ name, oab, image, bio, waNum, placeholder = false }: TeamCardProps) {
  return (
    <div className="team-card bg-white border border-[--line] rounded-[--r] overflow-hidden flex flex-col hover:shadow-[0_16px_48px_rgba(27,58,107,0.1)] hover:-translate-y-1 transition-all">
      <div className="team-photo w-full aspect-square overflow-hidden bg-[--blue-lt] flex items-center justify-center">
        {placeholder ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14 text-[--blue] opacity-20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        ) : (
          <Image src={image} width={480} height={480} alt={name} className="w-full h-full object-cover object-[center_12%]" />
        )}
      </div>
      <div className="team-body p-7">
        <div className="team-name font-playfair text-[22px] font-bold text-[--ink] mb-1.5">{name}</div>
        <div className="team-oab inline-flex items-center gap-[7px] bg-[--blue-lt] text-[--blue] text-[11px] font-bold tracking-[0.06em] px-3 py-[5px] rounded-full mb-4">
          <ShieldIcon className="w-3 h-3" />
          {oab}
        </div>
        <p className="team-bio text-sm leading-[1.8] text-[--mid] mb-6">{bio}</p>
        <a href={`https://wa.me/${waNum}`} className="btn-wa bg-[--green-wa] text-white text-[13px] font-semibold px-[22px] py-[11px] rounded-full flex items-center gap-2 hover:opacity-90 transition-all w-fit">
          <WhatsAppIcon />
          Falar com a {name.split(' ')[1]}
        </a>
      </div>
    </div>
  );
}

interface NumItemProps {
  value: string;
  label: string;
}

function NumItem({ value, label }: NumItemProps) {
  return (
    <div className="num-item bg-white p-7 text-center">
      <div className="num-val font-playfair text-[38px] font-bold text-[--blue] leading-[1] mb-1.5">{value}</div>
      <div className="num-label text-[13px] text-[--mid] leading-[1.5]" dangerouslySetInnerHTML={{ __html: label }}></div>
    </div>
  );
}

interface StepItemProps {
  num: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

function StepItem({ num, title, icon, description }: StepItemProps) {
  return (
    <div className="step bg-white p-[32px_28px]">
      <div className="step-header flex items-center gap-[14px] mb-[18px]">
        <span className="step-num font-playfair text-[40px] font-bold text-[--line] leading-[1]">{num}</span>
        <div className="step-icon w-11 h-11 rounded-xl bg-[--blue-lt] flex items-center justify-center shrink-0">
          {icon}
        </div>
      </div>
      <h3 className="font-playfair text-[18px] font-semibold text-[--ink] mb-2.5">{title}</h3>
      <p className="text-sm leading-[1.7] text-[--mid]">{description}</p>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a href={href} className="text-[13px] text-[--light] hover:text-[--mid] transition-colors">{children}</a>
    </li>
  );
}
