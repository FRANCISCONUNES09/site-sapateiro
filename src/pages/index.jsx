import PageWrapper from "@/components/pageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[red] font-bold">Barão</h1>
        <p className="text-[20px] text-[#8a898c]">conserto de calçados.</p>
      </div>
      <img src="Imagem do Barão.jpg" alt=""/>
    </PageWrapper>
  )
}