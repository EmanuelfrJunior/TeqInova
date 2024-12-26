import { HeaderComponents } from "./Header";

export function Consultoria(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[18%] font-bold text-3xl text-white ml-[15%] mt-[10%] mb-[5%] inline-block hove-underline">
                Consultória
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Alavanque o sucesso do seu negócio com nossa consultoria especializada! <br />
                Identificamos oportunidades, solucionamos desafios e criamos estratégias <br />
                personalizadas para impulsionar seus resultados. Seja na gestão, operações <br />
                ou inovação, <span className="inline-block hove-underline">estamos prontos para transformar sua empresa e levá-la ao</span> <br />
                <span className="inline-block hove-underline">próximo nível</span>. Conte com nossa expertise para crescer com segurança e eficiência!
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