import PageWrapper from "@/components/pageWrapper";
import { useRouter } from "next/router";


export default function Sobre() {
  const router = useRouter();
 
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Sobre o Barão
        </h1>
        <p className="text-gray-700 mb-6">
          Foi fundado no dia 12 de janeiro de 1975, já são mais de 50 anos no mercado de conserto de calçados. Foi
          criado com o objetivo de oferecer serviços de alta qualidade e confiança para nossos clientes e atendemos em domicílio.
        </p>

        <div className="mt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Voltar à Home
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-96 md:h-auto p-[16px]">
        <img
          src="Imagem do barão de 2025-06-24 à(s) 22.23.10_63b4c754.jpg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    </PageWrapper>
  );
}