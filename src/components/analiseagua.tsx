import { HeaderComponents } from "./Header";

export function AnaliseAgua(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[25%] font-bold text-3xl text-white ml-[25%] mt-[10%] mb-[5%] inline-block hove-underline">
                Ánalise de Água
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Garanta a qualidade da água que você consome e utiliza! <br /> 
                Oferecemos análises completas de água para detectar contaminantes, <br />
                avaliar potabilidade e garantir a conformidade com os padrões exigidos. <br />
                Nosso serviço é <span className="inline-block hove-underline">rápido, confiável e essencial</span> para sua saúde e segurança. <br />
                Entre em contato e tenha a tranquilidade de uma água limpa e segura!
                </div>
                <img className="w-[7%] ml-[35%] mt-[5%]" src="src/assets/teqSemNome.png" alt="" />
            </div>
            <div className="w-[50%]">
                <div className="h-[33%] text-white"></div>
                <div className="h-[33%] ">
                    <button className="bg-green-500 w-[60%] h-[20%] rounded-full text-white font-semibold text-2xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                        <a href="https://forms.gle/G4Sci8mQHHVS55zx7" target="blank">Contratar</a>
                    </button>
                </div>
                <div className="h-[33%]"></div>
            </div>
        </div>
        </>
    )
}