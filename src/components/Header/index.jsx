import { GiRunningShoe } from "react-icons/gi";


export default function Header({showButton = false}){
    return (
        <header className="w-full h-[50px] flex bg-[red] justify-between pr-2 items-center">
            <div
                onClick={() => window.location.href = "/"} 
                className="flex cursor-pointer h-full gap-2 items-center justify-center pl-2">
                <GiRunningShoe color="blue" size={30} />
                <h2 className="font-bold text-[18px] text-white">Barão</h2>
            </div>

            <button 
                onClick={() => window.location.href = "/inicio"} 
                className="text-[14px] text-white">
                    <p className="text-[14px] text-white">Início</p>
            </button>

            <button onClick={() => window.location.href = "/Contatos"}>
                <p className="text-[14px] text-white">Contatos</p>
            </button>

            <button onClick={() => window.location.href = "/Sobre"}>
                <p className="text-[14px] text-white">Sobre</p>
            </button>

        </header>
    )
}