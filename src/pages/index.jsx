import PageWrapper from "@/components/pageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center pt-7">
        <h1 className="text-[40px] text-[#9245EBFF] font-bold">Sapateiro</h1>
        <p className="text-[20px] text-[#8a898c]">conserto de sapatos.</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-2 pt-8">
        <p>ola</p>
      </div>
    </PageWrapper>
  )
}