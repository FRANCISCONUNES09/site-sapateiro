import PageWrapper from "@/components/pageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7 p-4">
        <h1 className="text-[40px] text-[red] font-bold">Barão</h1>
        <p className="text-[20px] text-[#8a898c]">Venha conhecer nossos serviços!</p>
      </div>
      <img src="Imagem do barão de 2025-06-24 à(s) 22.23.10_63b4c754.jpg" alt=""/>
    </PageWrapper>
  )
}