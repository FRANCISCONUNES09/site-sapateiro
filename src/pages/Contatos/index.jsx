import PageWrapper from "@/components/pageWrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Contatos() {
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
          Entre em Contato
        </h1>
        <p className="text-gray-700 mb-6">
          Estamos localizados no Shopping Center Um dentro do estacionamento, lado do Del Passeo, da Aldeota,
          Fortaleza. Se você tiver dúvidas, sugestões ou quiser fazer parte do
          nosso projeto, entre em contato pelos canais abaixo:
        </p>

        <div className="space-y-4 text-gray-800">
          <p>
            <strong>Telefone:</strong> (85) 91234-5678
          </p>
          <p>
            <strong>Email:</strong> contato@barão.org.br
          </p>
          <p>
            <strong>Horário de Funcionamento:</strong> Segunda a Sábado, das 9h às 19h
          </p>
          <p>
            <strong>Endereço:</strong>  Shopping Center Um, Avenida Santos
            Dumont, 3130, loja 15 - Aldeota, Fortaleza - CE
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

      <div className="w-full md:w-1/2 h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sAv.+Santos+Dumont,+3130+-+Loja+15,+Aldeota,+Fortaleza+-+CE"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </PageWrapper>
  );
}