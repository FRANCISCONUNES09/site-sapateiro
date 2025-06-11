import PageWrapper from "@/components/pageWrapper";

export default function Virola() {
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
            src="https://solart.com.br/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/t/a/taco_meia_lua_sapataria_tam_3_-_foto_1_preto.jpg"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Virola preta  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Nós colocamos na hora,
              conserto de calçados com qualidade e tradição.
            </p>
          </div>
        </div>
        
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNqHllIg5EstJp9FOodlZnNE6bE4ZpNwTFg&s"
            alt="Sapateiro"
            className="w-[300px] h-[300px] object-cover"
          />
          <div className="card-content w-[326px] h-[105px] p-[16px]">
            <h2 className="text-[24px] font-bold">Virola bege  </h2>
            <p className="text-[16px] text-[#8a898c]">
              Nós colocamos na hora,
              conserto de calçados com qualidade e tradição.
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
  );
}