"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const WA_NUMBER = "5545988110440";

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

export interface FaqItem {
    q: string;
    a: string;
    cta?: string;
    ctaMsg?: string;
}

export interface InfoGridItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export interface LandingPageData {
    // SEO
    title: string;
    description: string;
    // Hero
    heroTitle: React.ReactNode;
    heroDescription: string;
    heroPrimaryCTA: string;
    heroPrimaryMsg: string;
    heroSecondaryCTA?: string;
    heroSecondaryMsg?: string;
    trustItems: string[];
    // Urgency bar (optional)
    urgencyText?: React.ReactNode;
    urgencyMsg?: string;
    // Strip
    stripFocus: string;
    // Profile
    profileFocus: string;
    profileBio: string[];
    profileCTAMsg: string;
    // Info grid
    infoLabel: string;
    infoTitle: React.ReactNode;
    infoSub?: string;
    infoItems: InfoGridItem[];
    deadlineText?: React.ReactNode;
    // FAQ
    faqTitle: React.ReactNode;
    faqs: FaqItem[];
    // Final CTA
    ctaTitle: React.ReactNode;
    ctaDescription: string;
    ctaButtonText: string;
    ctaMsg: string;
    // BPC Calculator CTAs (optional)
    bpcCalculatorCTA?: boolean;
    // Images (optional overrides)
    heroImg?: string;
    profileImg?: string;
    // Lawyer override
    lawyerId?: "isabela" | "juliana";
}

/* ═══════════════════════════════════════════
   TEMPLATE
   ═══════════════════════════════════════════ */

export default function LandingPageTemplate({ data }: { data: LandingPageData }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleWhatsApp = (msg: string) => {
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    const isJuliana = data.lawyerId === "juliana";
    const lawyerName = isJuliana ? "Dra. Juliana Grignani" : "Dra. Isabela Cechet";
    const lawyerOAB = isJuliana ? "OAB/PR 90.817" : "OAB/PR 95.762";
    const lawyerShort = isJuliana ? "Dra. Juliana" : "Dra. Isabela";
    // Placeholders if no specific image exists yet
    const heroImg = data.heroImg || (isJuliana ? "/juliana-perfil-2.jpg" : "/isabela-perfil-1.jpg");
    const profileImg = data.profileImg || (isJuliana ? "/juliana-perfil-4.jpg" : "/isabela-perfil-2.jpg");
    const lawyerId = data.lawyerId || "isabela"; // Default to isabela if not specified
    const lawyerImage = lawyerId === "isabela" ? "Dra. Isabela Wrubel Cechet" : "Dra. Juliana Wessler Grignani";

    // ─── GERADOR DE SCHEMA JSON-LD ───
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LegalService",
                "@id": `https://advogadasprev.com.br/#legal-service-${lawyerId}`,
                "name": data.title,
                "description": data.description,
                "url": "https://advogadasprev.com.br",
                "logo": "https://advogadasprev.com.br/logo.webp",
                "image": "https://advogadasprev.com.br/logo.webp",
                "priceRange": "$$",
                "telephone": "+5545988110440",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Atendimento 100% Online",
                    "addressCountry": "BR"
                },
                "areaServed": "BR",
                "knowsAbout": [
                    "Direito Previdenciário",
                    "Revisão de Benefícios do INSS",
                    "Aposentadoria",
                    "BPC/LOAS",
                    "Auxílio-Doença"
                ],
                "employee": {
                    "@type": "Person",
                    "name": lawyerName,
                    "jobTitle": "Advogada Previdenciária",
                    "description": lawyerOAB
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://advogadasprev.com.br/#breadcrumb-${data.title.replace(/\s+/g, '-').toLowerCase()}`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Início",
                        "item": "https://advogadasprev.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": data.title,
                        "item": `https://advogadasprev.com.br/${data.title.replace(/\s+/g, '-').toLowerCase()}`
                    }
                ]
            },
            ...(data.faqs && data.faqs.length > 0 ? [{
                "@type": "FAQPage",
                "@id": `https://advogadasprev.com.br/#faq-${lawyerId}`,
                "mainEntity": data.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }] : [])
        ]
    };

    return (
        <div className="font-sans text-[#1C1C1E] bg-white pt-[68px]">
            {/* ─── SCHEMA JSON-LD ─── */}
            <Script id={`schema-${data.title.replace(/\s+/g, '-').toLowerCase()}`} type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(schemaData)}
            </Script>

            {/* ─── HEADER ─── */}
            <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-[20px] border-b border-[#E8E8EE]">
                <div className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.webp" width={160} height={42} alt="Advogadas Prev" priority />
                    </Link>
                    <button
                        onClick={() => handleWhatsApp(data.heroPrimaryMsg)}
                        className="hidden md:flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all"
                    >
                        <WhatsAppIcon className="w-[18px] h-[18px]" />
                        Falar no WhatsApp
                    </button>
                </div>
            </header>

            {/* ─── MOBILE STICKY ─── */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-[200] bg-white/97 backdrop-blur-[16px] border-t border-[#E8E8EE] p-3 pb-6">
                <button
                    onClick={() => handleWhatsApp(data.heroPrimaryMsg)}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white text-base font-semibold py-4 rounded-full shadow-lg"
                >
                    <WhatsAppIcon className="w-5 h-5" />
                    Falar no WhatsApp
                </button>
                <p className="text-center text-[11px] text-[#8A8A9A] mt-2 font-medium">Respondemos em até 2h · Todos os dias, 8h–20h</p>
            </div>

            <main>
                {/* ─── HERO ─── */}
                <section className="pt-12 pb-14 border-b border-[#E8E8EE] relative overflow-hidden">
                    <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(27,58,107,0.06)_0%,transparent_65%)] pointer-events-none" />
                    <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16 items-center">
                        <div className="animate-fade-up">
                            <div className="inline-flex items-center gap-2 bg-[#E8EFF8] text-[#1B3A6B] text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                                Atendimento online · Todo o Brasil
                            </div>
                            <h1 className="font-playfair text-[clamp(32px,4.2vw,50px)] font-bold leading-[1.12] tracking-tight mb-5">
                                {data.heroTitle}
                            </h1>
                            <p className="text-[17px] leading-relaxed text-[#4A4A5A] max-w-[480px] mb-5">
                                {data.heroDescription}
                            </p>
                            <div className="inline-flex items-center gap-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#128C4E] mb-7">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                                Respondemos em até 2h · Todos os dias, 8h–20h
                            </div>
                            <div className="flex items-start gap-3.5 flex-wrap mb-7">
                                {!data.bpcCalculatorCTA ? (
                                    <>
                                        <button
                                            onClick={() => handleWhatsApp(data.heroPrimaryMsg)}
                                            className="bg-[#25D366] text-white text-base font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#25D366]/20"
                                        >
                                            <WhatsAppIcon className="w-5 h-5" />
                                            {data.heroPrimaryCTA}
                                        </button>
                                        {data.heroSecondaryCTA && (
                                            <button
                                                onClick={() => handleWhatsApp(data.heroSecondaryMsg || data.heroPrimaryMsg)}
                                                className="bg-transparent text-[#128C4E] border-[1.5px] border-[#25D366] text-base font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-all"
                                            >
                                                {data.heroSecondaryCTA}
                                            </button>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-center gap-2">
                                            <Link
                                                href="/bpc"
                                                className="bg-[#15803D] text-white text-[15px] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#16A34A] transition-all shadow-xl shadow-[#15803D]/20 active:scale-95"
                                            >
                                                <CalculatorIcon className="w-5 h-5" />
                                                Usar calculadora BPC
                                            </Link>
                                            <span className="text-[12px] font-bold text-[#166534]">100% gratuito</span>
                                        </div>
                                        <button
                                            onClick={() => handleWhatsApp(data.heroSecondaryMsg || "Olá! Tenho dúvidas sobre o BPC/LOAS. Pode me orientar?")}
                                            className="bg-transparent text-[#128C4E] border-[1.5px] border-[#25D366] text-base font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-all"
                                        >
                                            Tenho dúvidas
                                        </button>
                                    </>
                                )}
                            </div>
                            <div className="flex flex-col gap-2.5">
                                {data.trustItems.map((t, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#4A4A5A] font-medium">
                                        <ShieldIcon className="w-4 h-4 text-[#1B3A6B]" />
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="animate-fade-in hidden md:block">
                            <div className="rounded-[28px] overflow-hidden aspect-[4/5] bg-[#E8EFF8] shadow-[0_24px_64px_rgba(27,58,107,0.15)] relative">
                                <Image src={heroImg} width={800} height={1000} className="w-full h-full object-cover object-[center_8%]" alt={lawyerName} priority />
                                <div className="absolute bottom-5 left-4 right-4 bg-white/96 backdrop-blur-[12px] rounded-2xl p-3.5 flex items-center justify-between shadow-lg">
                                    <div>
                                        <div className="font-playfair text-[15px] font-bold">{lawyerName}</div>
                                        <div className="text-[11px] text-[#8A8A9A] font-medium mt-0.5">{lawyerOAB} · Direito Previdenciário</div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#128C4E] whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> Online
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── URGENCY BAR ─── */}
                {data.urgencyText && (
                    <div className="bg-[#FFF3CD] border-b-2 border-[#F5C518] py-3.5">
                        <div className="max-w-[1080px] mx-auto px-6 flex items-center gap-3.5 flex-wrap">
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-9 h-9 rounded-full bg-[#F5C518] flex items-center justify-center">
                                    <ClockIcon className="w-[18px] h-[18px] text-[#7A5800]" />
                                </div>
                                <span className="font-playfair text-[15px] font-bold text-[#7A5800]">Atenção ao prazo</span>
                            </div>
                            <p className="text-sm text-[#7A5800] leading-relaxed">
                                {data.urgencyText}
                                {data.urgencyMsg && (
                                    <button onClick={() => handleWhatsApp(data.urgencyMsg!)} className="font-bold underline ml-1.5">Verificar meu prazo →</button>
                                )}
                            </p>
                        </div>
                    </div>
                )}

                {/* ─── BPC CALCULATOR BANNER (only for BPC pages) ─── */}
                {data.bpcCalculatorCTA && (
                    <div className="bg-[#1B3A6B] py-5">
                        <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-3 text-white">
                                <CalculatorIcon className="w-6 h-6" />
                                <div>
                                    <div className="text-sm font-bold">Calculadora BPC Gratuita</div>
                                    <div className="text-xs text-white/70">Descubra em 1 minuto se sua renda dá direito ao BPC/LOAS</div>
                                </div>
                            </div>
                            <Link href="/bpc" className="bg-white text-[#1B3A6B] text-sm font-bold px-6 py-3 rounded-full hover:scale-105 transition-all">
                                Acessar Calculadora →
                            </Link>
                        </div>
                    </div>
                )}

                {/* ─── STRIP ─── */}
                <div className="py-5 bg-[#F7F8FA] border-b border-[#E8E8EE]">
                    <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-center gap-9 flex-wrap text-[13px] font-medium text-[#4A4A5A]">
                        <div className="flex items-center gap-2"><ShieldIcon className="w-[18px] h-[18px] text-[#1B3A6B]" /> {lawyerOAB}</div>
                        <div className="hidden lg:block w-px h-6 bg-[#E8E8EE]" />
                        <div className="flex items-center gap-2"><DeviceIcon className="w-[18px] h-[18px] text-[#1B3A6B]" /> Atendimento 100% Online</div>
                        <div className="hidden lg:block w-px h-6 bg-[#E8E8EE]" />
                        <div className="flex items-center gap-2"><TargetIcon className="w-[18px] h-[18px] text-[#1B3A6B]" /> {data.stripFocus}</div>
                        <div className="hidden lg:block w-px h-6 bg-[#E8E8EE]" />
                        <div className="flex items-center gap-2"><MapPinIcon className="w-[18px] h-[18px] text-[#1B3A6B]" /> Todo o Brasil</div>
                    </div>
                </div>

                {/* ─── PROFILE ─── */}
                <section className="py-14 border-b border-[#E8E8EE]">
                    <div className="max-w-[1080px] mx-auto px-6">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-[#1B3A6B] mb-2.5">Advogada responsável</p>
                        <h2 className="font-playfair text-[clamp(24px,3.2vw,36px)] font-bold tracking-tight">Quem vai cuidar<br />do seu caso</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 mt-10 items-start">
                            <div className="bg-[#F7F8FA] border border-[#E8E8EE] rounded-2xl overflow-hidden lg:sticky lg:top-24">
                                <div className="aspect-square bg-[#E8EFF8]">
                                    <Image src={profileImg} width={260} height={260} className="w-full h-full object-cover object-[center_10%]" alt={lawyerName} />
                                </div>
                                <div className="p-4 md:p-5">
                                    <div className="font-playfair text-[17px] font-bold">{lawyerName}</div>
                                    <div className="text-[11px] text-[#8A8A9A] font-medium mt-1">{lawyerOAB} · Previdenciário</div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-[#1B3A6B] tracking-wider uppercase mb-2.5">{data.profileFocus}</p>
                                {data.profileBio.map((p, i) => (
                                    <p key={i} className="text-[16px] leading-[1.7] text-[#4A4A5A] mb-5">{p}</p>
                                ))}
                                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-4 md:p-5 flex items-start gap-3.5 mb-7">
                                    <ClockIcon className="w-5 h-5 text-[#128C4E] mt-1 shrink-0" />
                                    <div>
                                        <strong className="block text-sm font-bold text-[#166534] mb-1">Respondemos em até 2 horas</strong>
                                        <p className="text-[13px] text-[#15803D] leading-relaxed">Atendimento todos os dias, das 8h às 20h.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2.5 mb-7">
                                    <Commitment num="01" title="Linguagem clara" desc="Explicação objetiva da situação jurídica, dos caminhos disponíveis e das perspectivas reais." />
                                    <Commitment num="02" title="Análise individualizada" desc="Cada caso é avaliado de forma específica — sem diagnóstico genérico." />
                                    <Commitment num="03" title="Orientação com critério" desc="Indicação da via mais adequada conforme a viabilidade do caso." />
                                </div>
                                <button
                                    onClick={() => handleWhatsApp(data.profileCTAMsg)}
                                    className="bg-[#25D366] text-white text-base font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#25D366]/20"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Falar com a {lawyerShort}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── STEPS ─── */}
                <section className="py-14 bg-[#F7F8FA] border-b border-[#E8E8EE]">
                    <div className="max-w-[1080px] mx-auto px-6">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-[#1B3A6B] mb-2.5">Processo de atendimento</p>
                        <h2 className="font-playfair text-[clamp(24px,3.2vw,36px)] font-bold tracking-tight">Como funciona,<br />da primeira mensagem à orientação</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10 bg-[#E8E8EE] rounded-[22px] overflow-hidden">
                            <StepCard num="01" icon={<MessageIcon />} title="Você envia sua situação" desc="Descreve brevemente o que aconteceu — por mensagem, sem necessidade de ligar." />
                            <StepCard num="02" icon={<FileIcon />} title="Análise da documentação" desc="Se tiver laudos ou documentos do INSS, você envia pelo WhatsApp para análise." />
                            <StepCard num="03" icon={<ShieldIcon className="w-5 h-5" />} title="Orientação sobre os caminhos" desc="Você recebe orientação sobre as alternativas jurídicas aplicáveis ao seu caso." />
                        </div>
                    </div>
                </section>

                {/* ─── INFO GRID ─── */}
                <section className="py-14 border-b border-[#E8E8EE]">
                    <div className="max-w-[1080px] mx-auto px-6">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-[#1B3A6B] mb-2.5">{data.infoLabel}</p>
                        <h2 className="font-playfair text-[clamp(24px,3.2vw,36px)] font-bold tracking-tight">{data.infoTitle}</h2>
                        {data.infoSub && <p className="text-[16px] text-[#4A4A5A] mt-3 max-w-[520px]">{data.infoSub}</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10 bg-[#E8E8EE] rounded-[22px] overflow-hidden">
                            {data.infoItems.map((item, i) => (
                                <div key={i} className="bg-white p-7 md:p-8">
                                    <div className="w-10 h-10 bg-[#E8EFF8] rounded-xl flex items-center justify-center text-[#1B3A6B] mb-4">{item.icon}</div>
                                    <h3 className="font-playfair text-[16px] font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#4A4A5A] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        {data.deadlineText && (
                            <div className="bg-[#FFF8F0] border border-[#F5D9A8] rounded-2xl p-5 md:p-6 flex items-start gap-4 mt-10">
                                <div className="w-9 h-9 rounded-xl bg-[#FEF0D5] flex items-center justify-center shrink-0">
                                    <ClockIcon className="w-[18px] h-[18px] text-[#B45309]" />
                                </div>
                                <div>
                                    <strong className="block text-[13px] font-bold text-[#92400E] mb-1">Atenção</strong>
                                    <p className="text-[13px] text-[#78350F] leading-relaxed">{data.deadlineText}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* ─── BPC MID-PAGE CTA ─── */}
                {data.bpcCalculatorCTA && (
                    <section className="py-12 bg-gradient-to-r from-[#1B3A6B] to-[#0f2440]">
                        <div className="max-w-[1080px] mx-auto px-6 text-center">
                            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-white mb-3">
                                Sua renda dá direito ao BPC? <span className="text-[#86EFAC]">Descubra agora.</span>
                            </h2>
                            <p className="text-white/60 text-base mb-6 max-w-[480px] mx-auto">
                                Use nossa calculadora gratuita baseada nos critérios do INSS para 2026. Resposta em 1 minuto.
                            </p>
                            <Link href="/bpc" className="inline-flex items-center gap-2 bg-white text-[#1B3A6B] text-base font-bold px-10 py-4 rounded-full hover:scale-105 transition-all shadow-xl">
                                <CalculatorIcon className="w-5 h-5" />
                                Acessar Calculadora Gratuita
                            </Link>
                        </div>
                    </section>
                )}

                {/* ─── FAQ ─── */}
                <section className="py-14 bg-[#F7F8FA] border-b border-[#E8E8EE]">
                    <div className="max-w-[1080px] mx-auto px-6">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-[#1B3A6B] mb-2.5">Perguntas frequentes</p>
                        <h2 className="font-playfair text-[clamp(24px,3.2vw,36px)] font-bold tracking-tight">{data.faqTitle}</h2>
                        <div className="mt-10 bg-[#E8E8EE] rounded-[22px] overflow-hidden flex flex-col gap-0.5">
                            {data.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between gap-4 p-5 md:p-7 text-left hover:bg-[#F7F8FA] transition-all"
                                    >
                                        <span className="font-playfair text-[16px] font-bold tracking-tight">{faq.q}</span>
                                        <ChevronIcon className={`w-5 h-5 text-[#1B3A6B] transition-transform shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-5 md:px-7 pb-6 text-sm leading-relaxed text-[#4A4A5A]">
                                            {faq.a}
                                            {faq.cta && (
                                                <button onClick={() => handleWhatsApp(faq.ctaMsg || "")} className="block mt-2 font-bold text-[#1B3A6B] underline">
                                                    → {faq.cta}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FINAL CTA ─── */}
                <section className="py-20 bg-[#1A1A2E] text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(27,58,107,0.9)_0%,transparent_60%)] pointer-events-none" />
                    <div className="max-w-[1080px] mx-auto px-6 relative z-10">
                        <p className="text-[11px] font-bold tracking-widest uppercase text-white/45 mb-2.5">Próximo passo</p>
                        <h2 className="font-playfair text-[clamp(24px,3.2vw,36px)] font-bold text-white max-w-[560px] mx-auto leading-tight">{data.ctaTitle}</h2>
                        <p className="text-[16px] text-white/60 mt-3 max-w-[520px] mx-auto mb-4">{data.ctaDescription}</p>
                        <div className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#86EFAC] mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                            Respondemos em até 2h · Todos os dias, 8h–20h
                        </div>
                        <div className="flex justify-center flex-wrap gap-4">
                            {data.bpcCalculatorCTA ? (
                                <Link href="/bpc" className="bg-[#15803D] text-white text-base font-bold px-10 py-4 rounded-full shadow-lg shadow-[#15803D]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <CalculatorIcon className="w-5 h-5" />
                                    Usar Calculadora BPC (Gratuito)
                                </Link>
                            ) : (
                                <button
                                    onClick={() => handleWhatsApp(data.ctaMsg)}
                                    className="bg-[#25D366] text-white text-base font-bold px-10 py-4 rounded-full shadow-lg shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all"
                                >
                                    {data.ctaButtonText}
                                </button>
                            )}
                        </div>
                        <p className="text-[12px] text-white/30 max-w-[480px] mx-auto mt-7 leading-relaxed font-medium">Este contato não implica contratação nem garante resultado. A orientação depende de análise individual.</p>
                    </div>
                </section>
            </main>

            {/* ─── FOOTER ─── */}
            <footer className="py-10 bg-white border-t border-[#E8E8EE]">
                <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 md:items-end">
                    <div className="text-[13px] text-[#8A8A9A] leading-relaxed">
                        <strong className="text-[#4A4A5A]">Advogadas Prev</strong> · Dra. Isabela Wrubel Cechet · OAB/PR 95.762 · Dra. Juliana Grignani · OAB/PR 90.817<br />
                        Direito Previdenciário · Atendimento online para todo o Brasil<br />
                        R. Santa Catarina, 481 - Centro, Cascavel - PR, 85801-040 <br />
                        <Link href="/politica-de-privacidade" className="text-[#1B3A6B] hover:underline mt-1 inline-block">Política de Privacidade</Link>
                    </div>
                    <Link href="/" className="text-xs text-[#8A8A9A] hover:text-[#4A4A5A]">← Voltar ao início</Link>
                </div>
            </footer>
        </div>
    );
}

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function Commitment({ num, title, desc }: { num: string; title: string; desc: string }) {
    return (
        <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] border border-[#E8E8EE] rounded-2xl">
            <div className="w-8 h-8 rounded-lg bg-[#E8EFF8] flex items-center justify-center shrink-0 font-playfair text-[13px] font-bold text-[#1B3A6B]">{num}</div>
            <div>
                <strong className="block text-sm font-bold text-[#1A1A2E] mb-1">{title}</strong>
                <p className="text-[13px] text-[#4A4A5A] leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function StepCard({ num, icon, title, desc }: { num: string; icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="bg-white p-7 md:p-8">
            <div className="flex items-center gap-4 mb-4">
                <span className="font-playfair text-[32px] font-bold text-[#E8E8EE] leading-none shrink-0">{num}</span>
                <div className="w-10 h-10 rounded-xl bg-[#E8EFF8] flex items-center justify-center text-[#1B3A6B] shrink-0">{icon}</div>
            </div>
            <h3 className="font-playfair text-[17px] font-bold mb-2">{title}</h3>
            <p className="text-sm text-[#4A4A5A] leading-relaxed">{desc}</p>
        </div>
    );
}

/* ═══════════════════════════════════════════
   ICONS  (exported for page-level use)
   ═══════════════════════════════════════════ */

export function WhatsAppIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.856L.063 23.487a.5.5 0 0 0 .617.611l5.75-1.633A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.577-.49-5.075-1.346l-.363-.213-3.758 1.068 1.002-3.659-.234-.374A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
    );
}

export function ShieldIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
}
export function ClockIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}
export function DeviceIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>;
}
export function TargetIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>;
}
export function MapPinIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
export function MessageIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z" /></svg>;
}
export function FileIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h6" /></svg>;
}
export function UsersIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /></svg>;
}
export function BriefcaseIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>;
}
export function BookIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h5" /></svg>;
}
export function CalendarIcon() {
    return <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /><path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" /></svg>;
}
export function ChevronIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>;
}
export function CalculatorIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h4" /><path d="M8 18h4" /><path d="M16 14h.01" /><path d="M16 18h.01" /></svg>;
}
export function HeartIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
}
export function ScaleIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 3v18" /><path d="M3 7l9-4 9 4" /><path d="M3 7l4 9h-1a3 3 0 0 0 6 0H11L7 7" /><path d="M21 7l-4 9h-1a3 3 0 0 0 6 0h-1l-4-9" /></svg>;
}
export function StarIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
export function AlertIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>;
}
export function SearchIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>;
}
export function HomeIcon({ className = "" }: { className?: string }) {
    return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}
