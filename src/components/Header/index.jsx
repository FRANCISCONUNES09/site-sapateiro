import { GiBallerinaShoes } from "react-icons/gi";


export default function Header({showButton = true}){
    return (
        <header className="w-full h-[50px] flex bg-[red] justify-between pr-2 items-center">
            <div
                onClick={() => window.location.href = "/"} 
                className="flex cursor-pointer h-full gap-2 items-center justify-center pl-2">
                <GiBallerinaShoes color="blue" size={25} />
                <h2 className="font-bold text-[18px] text-white">Sapatos</h2>
                <p className="text-[14px] text-white">Conserto de sapatos</p>
            </div>
           {showButton && (
                <button 
                    onClick={() => window.location.href = "/cadastrar"}
                    className="w-[150px] h-[60%] rounded-md 
                    bg-[#9B87F5] font-bold hover:bg-[#9245EBFF] cursor-pointer">
                    Adicionar Sapatos</button>
           )}
        </header>
    )
}