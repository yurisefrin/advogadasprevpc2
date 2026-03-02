"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // Aqui você pode disparar o consentimento para o GTM
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] p-4 md:p-6 animate-fade-up">
            <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex-1 text-sm text-[#4A4A5A] leading-relaxed">
                    <strong>Nós respeitamos sua privacidade.</strong> Utilizamos cookies e tecnologias semelhantes para entender como você interage com nosso site, personalizar conteúdo e melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies. Para mais detalhes, consulte nossa <Link href="/politica-de-privacidade" className="text-[#1B3A6B] font-bold underline hover:text-blue-800">Política de Privacidade</Link>.
                </div>
                <div className="flex items-center gap-3 shrink-0 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                    <button
                        onClick={declineCookies}
                        className="flex-1 md:flex-none whitespace-nowrap px-4 py-2.5 rounded-full border border-gray-300 text-[#4A4A5A] text-sm font-bold hover:bg-gray-50 transition-colors"
                    >
                        Apenas Essenciais
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="flex-1 md:flex-none whitespace-nowrap px-6 py-2.5 rounded-full bg-[#1B3A6B] text-white text-sm font-bold hover:bg-[#152d54] transition-colors"
                    >
                        Aceitar Todos
                    </button>
                </div>
            </div>
        </div>
    );
}
