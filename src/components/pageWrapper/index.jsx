import Header from "../Header"
import Footer from "../Footer"

export default function PageWrapper({ children, showButton = true, showHeader = true }){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            {showHeader && <Header showButton={showButton}/>}
            <div className="w-full h-full min-h-screen ]">
                {children}
            </div>
            <Footer />
        </div>
    )
}