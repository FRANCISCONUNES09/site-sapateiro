import PageWrapper from "@/components/pageWrapper";

export default function Saltos() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[red] font-bold">Barão</h1>
        <p className="text-[20px] text-[#8a898c]">conserto de calçados.</p>
      </div>
      <div className="filters flex justify-center gap-[16px] wrap mt-[20px]">
        <button 
          onClick={() => window.location.href = '/solados'}
          className="bg-red-500 border-[2px] border-[red] 
          text-white hover:bg-black cursor-pointer">
            Solados
        </button>
        <button 
        onClick={() => window.location.href = '/saltos'}
          className="bg-red-500 border-[2px] border-[red] 
          text-white hover:bg-black cursor-pointer">
            Saltos
        </button>
        <button 
          onClick={() => window.location.href = '/pinturas'}
          className="bg-red-500 border-[2px] border-[red] 
          text-white hover:bg-black cursor-pointer">
            Pinturas
        </button>
        <button 
          onClick={() => window.location.href = '/palmilhas'}
          className="bg-red-500 border-[2px] border-[red] 
          text-white hover:bg-black cursor-pointer">
            Palmilhas
        </button>
        <button 
          onClick={() => window.location.href = '/virola'}
          className="bg-red-500 border-[2px] border-[red] text-white hover:bg-black cursor-pointer">
            Virola
        </button>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10">
         <div className="card">
          <img
            src="https://meiasola.vtexassets.com/arquivos/ids/2256603/sandalia-arezzo-salto-bloco-medio-tourino-leather-caramelo-1.jpg?v=638715102968600000"
            alt="Sapateiro"
            className="w-[410px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Sandalia </h2>
            <p className="text-[16px] text-[#8a898c]">
              revestimento de saltos, aparação de saltos.
            </p>
          </div>
        </div>
        
        <div className="card">
          <img
            src="Imagem do Barão.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Barão do Sapato </h2>
            <p className="text-[16px] text-[#8a898c]">
              Conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10">
         <div className="card">
          <img
            src="Imagem do Barão.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Barão do Sapato  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div>
        
        <div className="card">
          <img
            src="Imagem do Barão.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Barão do Sapato  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10">
         <div className="card">
          <img
            src="Imagem do Barão.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Barão do Sapato  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div> 
        <div className="card">
          <img
            src="Imagem do Barão.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Barão do Sapato  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}