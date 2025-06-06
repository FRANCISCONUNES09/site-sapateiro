import PageWrapper from "@/components/pageWrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Sobre() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("auth") === "true";
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

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

        <div className="space-y-4 text-gray-800">
          <p>
            <strong>Telefone:</strong> (85) 91234-5678
          </p>
          <p>
            <strong>Email:</strong> contato@barão.org.br
          </p>
          <p>
            <strong>Horário de Funcionamento:</strong> Segunda a Sábado, das 9h às 20h
          </p>
          <p>
            <strong>Endereço:</strong>  Shopping Center Um, Avenida Santos
            Dumont, 3130, Barão loja 15 - Aldeota, Fortaleza - CE
          </p>
        </div>

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
          src="Imagem do Barão.jpg"
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