"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { getServiceBySlug, SERVICES, PILLAR_LABELS, type ServicePillar, type ServiceInfo } from '@/lib/services';

/* ═══════════════════════════════════════════
   PILLAR ICONS — Each silo has a unique icon
   ═══════════════════════════════════════════ */

const PILLAR_ICONS: Record<ServicePillar, React.ReactNode> = {
  incapacidade: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  bpc: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
    </svg>
  ),
  aposentadoria: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  ),
  pensao: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  revisao: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  ),
  planejamento: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /><path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  outro: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

/* Pillar accent colors for visual differentiation */
const PILLAR_COLORS: Record<ServicePillar, { bg: string; accent: string; text: string; ring: string }> = {
  incapacidade:  { bg: 'bg-red-50',    accent: 'bg-red-100',    text: 'text-red-700',    ring: 'ring-red-200' },
  bpc:           { bg: 'bg-violet-50', accent: 'bg-violet-100', text: 'text-violet-700', ring: 'ring-violet-200' },
  aposentadoria: { bg: 'bg-blue-50',   accent: 'bg-blue-100',   text: 'text-blue-700',   ring: 'ring-blue-200' },
  pensao:        { bg: 'bg-amber-50',  accent: 'bg-amber-100',  text: 'text-amber-700',  ring: 'ring-amber-200' },
  revisao:       { bg: 'bg-emerald-50', accent: 'bg-emerald-100', text: 'text-emerald-700', ring: 'ring-emerald-200' },
  planejamento:  { bg: 'bg-sky-50',    accent: 'bg-sky-100',    text: 'text-sky-700',    ring: 'ring-sky-200' },
  outro:         { bg: 'bg-gray-50',   accent: 'bg-gray-100',   text: 'text-gray-700',   ring: 'ring-gray-200' },
};

/* ═══════════════════════════════════════════
   GROUP SERVICES BY PILLAR
   ═══════════════════════════════════════════ */

interface PillarGroup {
  pillar: ServicePillar;
  label: string;
  services: ServiceInfo[];
}

function getGroupedServices(currentSlug: string): PillarGroup[] {
  const groups: Record<string, PillarGroup> = {};

  for (const svc of SERVICES) {
    if (svc.slug === currentSlug) continue; // exclude current page
    if (!groups[svc.pillar]) {
      groups[svc.pillar] = {
        pillar: svc.pillar,
        label: PILLAR_LABELS[svc.pillar],
        services: [],
      };
    }
    groups[svc.pillar].services.push(svc);
  }

  return Object.values(groups).filter(g => g.services.length > 0);
}

/* ═══════════════════════════════════════════
   SILO NAVIGATION COMPONENT
   Progressive Disclosure + Mobile Affordance
   ═══════════════════════════════════════════ */

interface SiloNavigationProps {
  currentSlug: string;
}

export default function SiloNavigation({ currentSlug }: SiloNavigationProps) {
  const current = getServiceBySlug(currentSlug);
  const groups = getGroupedServices(currentSlug);

  // Auto-expand the current pillar
  const [expanded, setExpanded] = useState<ServicePillar | null>(current?.pillar || null);
  // Track which link was just tapped for visual feedback
  const [tapped, setTapped] = useState<string | null>(null);

  if (groups.length === 0) return null;

  const togglePillar = (pillar: ServicePillar) => {
    setExpanded(prev => prev === pillar ? null : pillar);
  };

  const handleTap = (slug: string) => {
    setTapped(slug);
  };

  return (
    <section className="py-10 md:py-14 bg-[#F7F8FA] border-t border-[#E8E8EE]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[#E8EFF8] flex items-center justify-center">
            <svg className="w-4 h-4 text-[#1B3A6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#8A8A9A]">
            Todos os serviços
          </p>
        </div>
        <h3 className="font-playfair text-[22px] md:text-[26px] font-bold text-[#1A1A2E] mb-6 md:mb-8">
          Em que mais podemos<br className="md:hidden" /> ajudar?
        </h3>

        {/* Pillar Accordions */}
        <div className="flex flex-col gap-2.5">
          {groups.map((group) => {
            const isOpen = expanded === group.pillar;
            const colors = PILLAR_COLORS[group.pillar];
            const icon = PILLAR_ICONS[group.pillar];
            const serviceCount = group.services.length;

            return (
              <div
                key={group.pillar}
                className={`
                  rounded-2xl border overflow-hidden
                  transition-all duration-300 ease-out
                  ${isOpen
                    ? `border-[#1B3A6B]/15 shadow-md ${colors.bg}`
                    : 'border-[#E8E8EE] bg-white hover:border-[#1B3A6B]/10 hover:shadow-sm'
                  }
                `}
              >
                {/* ─── Pillar Header (Accordion Trigger) ─── */}
                <button
                  onClick={() => togglePillar(group.pillar)}
                  className={`
                    w-full flex items-center gap-3.5 p-4 md:p-5
                    text-left select-none
                    active:scale-[0.99] transition-transform duration-100
                  `}
                  aria-expanded={isOpen}
                >
                  {/* Pillar Icon */}
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    transition-colors duration-300
                    ${isOpen ? `${colors.accent} ${colors.text}` : 'bg-[#E8EFF8] text-[#1B3A6B]'}
                  `}>
                    {icon}
                  </div>

                  {/* Pillar Label + Count */}
                  <div className="flex-1 min-w-0">
                    <span className={`
                      text-[15px] md:text-[16px] font-bold block
                      transition-colors duration-200
                      ${isOpen ? 'text-[#1A1A2E]' : 'text-[#4A4A5A]'}
                    `}>
                      {group.label}
                    </span>
                    <span className="text-[11px] text-[#8A8A9A] font-medium mt-0.5 block">
                      {serviceCount} {serviceCount === 1 ? 'serviço' : 'serviços'}
                    </span>
                  </div>

                  {/* Expand/Collapse Chevron */}
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0
                    transition-all duration-300
                    ${isOpen
                      ? `${colors.accent} ${colors.text}`
                      : 'bg-[#F0F0F5] text-[#8A8A9A]'
                    }
                  `}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* ─── Service Links (Expandable Content) ─── */}
                <div
                  className={`
                    transition-all duration-300 ease-out overflow-hidden
                    ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-3 pb-3 md:px-4 md:pb-4 space-y-1.5">
                    {group.services.map((service) => {
                      const isTapped = tapped === service.slug;

                      return (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          onClick={() => handleTap(service.slug)}
                          className={`
                            group relative flex items-center gap-3 p-3.5 md:p-4
                            rounded-xl
                            bg-white border border-[#E8E8EE]
                            transition-all duration-200 ease-out
                            hover:border-[#1B3A6B]/25 hover:shadow-sm
                            active:scale-[0.97] active:bg-[#F7F8FA]
                            ${isTapped ? 'ring-2 ring-[#1B3A6B]/20 border-[#1B3A6B]/30 bg-[#F7F8FA]' : ''}
                          `}
                        >
                          {/* Left Accent Bar */}
                          <div className={`
                            absolute left-0 top-3 bottom-3 w-[3px] rounded-full
                            transition-all duration-200
                            ${isTapped ? 'bg-[#1B3A6B]' : `${colors.accent} group-hover:bg-[#1B3A6B]/30`}
                          `} />

                          {/* Service Name */}
                          <div className="flex-1 min-w-0 pl-2">
                            <span className={`
                              text-[14px] md:text-[15px] font-semibold block
                              transition-colors duration-200
                              ${isTapped ? 'text-[#1B3A6B]' : 'text-[#1A1A2E] group-hover:text-[#1B3A6B]'}
                            `}>
                              {service.shortTitle}
                            </span>
                          </div>

                          {/* Arrow Icon — Clear affordance */}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
