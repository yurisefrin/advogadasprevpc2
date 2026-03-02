import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verificador BPC/LOAS Gratuito | Advocacia Especializada",
    description: "Faça o cálculo de renda per capita e preencha as 5 perguntas e descubra na hora se você ou sua família tem direito ao BPC/LOAS no INSS em 2026.",
};

export default function BpcPage() {
    return (
        <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
            <iframe
                src="/calculadora-bpc.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Calculadora BPC/LOAS"
            />
        </div>
    );
}
