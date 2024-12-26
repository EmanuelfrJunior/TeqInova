import { HeaderComponents } from "./Header";

export function Efluentes(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[37%] font-bold text-3xl text-white ml-[15%] mt-[10%] mb-[5%] inline-block hove-underline">
                Tratamento de Efluentes
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Proteja o meio ambiente e esteja em conformidade com as normas <br />
                ambientais! Oferecemos soluções completas para tratamento de efluentes, <br />
                garantindo a remoção de contaminantes e o descarte responsável. <br />
                <span className="inline-block hove-underline">Nosso serviço é personalizado</span>, eficiente e ideal para indústrias, comércios <br />
                e condomínios. Invista em sustentabilidade e qualidade com quem entende <br />
                do assunto!
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