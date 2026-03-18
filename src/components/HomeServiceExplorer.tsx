"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, PILLAR_LABELS, type ServicePillar, type ServiceInfo } from '@/lib/services';

/* ═══════════════════════════════════════════
   PILLAR CONFIG — Icons, colors, descriptions
   ═══════════════════════════════════════════ */

interface PillarConfig {
  pillar: ServicePillar;
  label: string;
  tag: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
  colors: {
    tagBg: string; tagText: string;
    iconBg: string; iconText: string;
    accentBg: string; accentBorder: string;
    barColor: string;
    ctaBg: string; ctaText: string; ctaHover: string;
  };
}

const PILLAR_CONFIG: PillarConfig[] = [
  {
    pillar: 'aposentadoria',
    label: PILLAR_LABELS.aposentadoria,
    tag: 'O Futuro',
    description: 'Cada ano de contribuição tem valor. Com a estratégia certa, a diferença pode ser de anos de espera — ou de milhares de reais a mais.',
    ctaText: 'Planejar minha aposentadoria',
    ctaHref: '/planejamento-previdenciario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-amber-50', tagText: 'text-amber-700',
      iconBg: 'bg-amber-50', iconText: 'text-amber-600',
      accentBg: 'bg-amber-50/60', accentBorder: 'border-amber-200',
      barColor: 'bg-amber-400',
      ctaBg: 'bg-amber-600', ctaText: 'text-white', ctaHover: 'hover:bg-amber-700',
    },
  },
  {
    pillar: 'incapacidade',
    label: PILLAR_LABELS.incapacidade,
    tag: 'O Presente',
    description: 'Quando a saúde impede de trabalhar, o INSS tem obrigação de garantir sua renda. Se foi negado ou cortado, existe caminho para reverter.',
    ctaText: 'Analisar meu benefício negado',
    ctaHref: '/auxilio-doenca',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-blue-50', tagText: 'text-blue-700',
      iconBg: 'bg-blue-50', iconText: 'text-blue-600',
      accentBg: 'bg-blue-50/60', accentBorder: 'border-blue-200',
      barColor: 'bg-blue-500',
      ctaBg: 'bg-[#1B3A6B]', ctaText: 'text-white', ctaHover: 'hover:bg-[#15305A]',
    },
  },
  {
    pillar: 'bpc',
    label: PILLAR_LABELS.bpc,
    tag: 'O Amparo',
    description: 'Para quem mais precisa. Famílias em vulnerabilidade, pessoas com deficiência e dependentes têm direitos que muitas vezes são negados.',
    ctaText: 'Verificar elegibilidade BPC',
    ctaHref: '/bpc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-violet-50', tagText: 'text-violet-700',
      iconBg: 'bg-violet-50', iconText: 'text-violet-600',
      accentBg: 'bg-violet-50/60', accentBorder: 'border-violet-200',
      barColor: 'bg-violet-500',
      ctaBg: 'bg-violet-600', ctaText: 'text-white', ctaHover: 'hover:bg-violet-700',
    },
  },
  {
    pillar: 'pensao',
    label: PILLAR_LABELS.pensao,
    tag: 'A Proteção',
    description: 'Proteção para quem perdeu um ente, para famílias em situação delicada e para mães que precisam do salário-maternidade.',
    ctaText: 'Verificar meu direito',
    ctaHref: '/pensao-por-morte',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-teal-50', tagText: 'text-teal-700',
      iconBg: 'bg-teal-50', iconText: 'text-teal-600',
      accentBg: 'bg-teal-50/60', accentBorder: 'border-teal-200',
      barColor: 'bg-teal-500',
      ctaBg: 'bg-teal-600', ctaText: 'text-white', ctaHover: 'hover:bg-teal-700',
    },
  },
  {
    pillar: 'revisao',
    label: PILLAR_LABELS.revisao,
    tag: 'A Correção',
    description: 'Erro no cálculo, alta indevida ou benefício cortado no pente-fino? Existem caminhos administrativos e judiciais.',
    ctaText: 'Revisar meu benefício',
    ctaHref: '/revisao-beneficio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-emerald-50', tagText: 'text-emerald-700',
      iconBg: 'bg-emerald-50', iconText: 'text-emerald-600',
      accentBg: 'bg-emerald-50/60', accentBorder: 'border-emerald-200',
      barColor: 'bg-emerald-500',
      ctaBg: 'bg-emerald-600', ctaText: 'text-white', ctaHover: 'hover:bg-emerald-700',
    },
  },
  {
    pillar: 'planejamento',
    label: PILLAR_LABELS.planejamento,
    tag: 'A Estratégia',
    description: 'Planejar antes de pedir a aposentadoria pode significar anos a menos de espera e milhares a mais no bolso.',
    ctaText: 'Fazer meu planejamento',
    ctaHref: '/planejamento-previdenciario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" />
        <path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    colors: {
      tagBg: 'bg-sky-50', tagText: 'text-sky-700',
      iconBg: 'bg-sky-50', iconText: 'text-sky-600',
      accentBg: 'bg-sky-50/60', accentBorder: 'border-sky-200',
      barColor: 'bg-sky-500',
      ctaBg: 'bg-sky-600', ctaText: 'text-white', ctaHover: 'hover:bg-sky-700',
    },
  },
];

/* ═══════════════════════════════════════════
   GET SERVICES PER PILLAR
   ═══════════════════════════════════════════ */

function getServicesForPillar(pillar: ServicePillar): ServiceInfo[] {
  return SERVICES.filter(s => s.pillar === pillar);
}

/* ═══════════════════════════════════════════
   HOMEPAGE SERVICE EXPLORER COMPONENT
   Progressive Disclosure + Mobile Affordance
   ═══════════════════════════════════════════ */

export default function HomeServiceExplorer() {
  const [expanded, setExpanded] = useState<ServicePillar | null>(null);
  const [tapped, setTapped] = useState<string | null>(null);

  const togglePillar = (pillar: ServicePillar) => {
    setExpanded(prev => prev === pillar ? null : pillar);
    setTapped(null);
  };

  return (
    <div className="flex flex-col gap-3">
      {PILLAR_CONFIG.map((config) => {
        const services = getServicesForPillar(config.pillar);
        const isOpen = expanded === config.pillar;

        if (services.length === 0) return null;

        return (
          <div
            key={config.pillar}
            className={`
              rounded-2xl border overflow-hidden
              transition-all duration-300 ease-out
              ${isOpen
                ? `${config.colors.accentBorder} shadow-lg ${config.colors.accentBg}`
                : 'border-[#E8E8EE] bg-white hover:border-[#D0D0DD] hover:shadow-sm'
              }
            `}
          >
            {/* ─── Pillar Header ─── */}
            <button
              onClick={() => togglePillar(config.pillar)}
              className="w-full text-left p-5 md:p-7 select-none active:scale-[0.995] transition-transform duration-100"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`
                  w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0
                  transition-all duration-300
                  ${isOpen
                    ? `${config.colors.iconBg} ${config.colors.iconText} scale-110`
                    : `${config.colors.iconBg} ${config.colors.iconText}`
                  }
                `}>
                  {config.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`
                      text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full
                      ${config.colors.tagBg} ${config.colors.tagText}
                    `}>
                      {config.tag}
                    </span>
                    <span className="text-[11px] text-[#8A8A9A] font-medium">
                      {services.length} {services.length === 1 ? 'serviço' : 'serviços'}
                    </span>
                  </div>
                  <h3 className={`
                    font-playfair text-[19px] md:text-[21px] font-bold leading-[1.2] mb-1.5
                    transition-colors duration-200
                    ${isOpen ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'}
                  `}>
                    {config.label}
                  </h3>
                  <p className={`
                    text-[13px] md:text-sm leading-[1.7] text-[#6A6A7A] 
                    transition-all duration-300
                    ${isOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-24 md:opacity-100'}
                  `}>
                    {config.description}
                  </p>
                </div>

                {/* Chevron */}
                <div className={`
                  w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-1
                  transition-all duration-300
                  ${isOpen
                    ? `${config.colors.iconBg} ${config.colors.iconText}`
                    : 'bg-[#F0F0F5] text-[#8A8A9A]'
                  }
                `}>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>

            {/* ─── Expanded Content: Service Links ─── */}
            <div
              className={`
                transition-all duration-300 ease-out overflow-hidden
                ${isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="px-4 md:px-7 pb-5 md:pb-7">
                {/* Service Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                  {services.map((service) => {
                    const isTapped = tapped === service.slug;

                    return (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        onClick={() => setTapped(service.slug)}
                        className={`
                          group relative flex items-center gap-3 p-4
                          rounded-xl bg-white border border-[#E8E8EE]
                          transition-all duration-200 ease-out
                          hover:border-[#1B3A6B]/20 hover:shadow-sm
                          active:scale-[0.97] active:bg-[#F7F8FA]
                          ${isTapped ? 'ring-2 ring-[#1B3A6B]/20 border-[#1B3A6B]/30 bg-[#F7F8FA]' : ''}
                        `}
                      >
                        {/* Left Accent Bar */}
                        <div className={`
                          absolute left-0 top-3 bottom-3 w-[3px] rounded-full
                          transition-all duration-200
                          ${isTapped ? config.colors.barColor : `${config.colors.iconBg} group-hover:${config.colors.barColor}`}
                        `} />

                        {/* Service Name */}
                        <div className="flex-1 min-w-0 pl-1.5">
                          <span className={`
                            text-[14px] font-semibold block
                            transition-colors duration-200
                            ${isTapped ? 'text-[#1B3A6B]' : 'text-[#1A1A2E] group-hover:text-[#1B3A6B]'}
                          `}>
                            {service.shortTitle}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className={`
                          w-7 h-7 rounded-full flex items-center justify-center shrink-0
                          transition-all duration-200
                          ${isTapped
                            ? 'bg-[#1B3A6B] text-white'
                            : 'bg-[#F0F0F5] text-[#8A8A9A] group-hover:bg-[#E8EFF8] group-hover:text-[#1B3A6B]'
                          }
                        `}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Pillar CTA */}
                <Link
                  href={config.ctaHref}
                  className={`
                    inline-flex items-center gap-2 text-[13px] font-bold px-6 py-3 rounded-full
                    transition-all duration-200
                    ${config.colors.ctaBg} ${config.colors.ctaText} ${config.colors.ctaHover}
                    hover:shadow-md active:scale-[0.97]
                  `}
                >
                  {config.ctaText}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px]">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
