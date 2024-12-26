import { HeaderComponents } from "./Header";

export function MapProcesso(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[41%] font-bold text-3xl text-white ml-[15%] mt-[10%] mb-[5%] inline-block hove-underline">
                Mapeamento de processos
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Entenda e otimize o funcionamento da sua empresa! Realizamos o <br />
                mapeamento de processos para identificar gargalos, automatizar tarefas <br />
                e aumentar a eficiência operacional. Com uma visão clara dos fluxos de <br />
                trabalho, <span className="inline-block hove-underline">você reduz custos, melhora resultados</span> e toma decisões mais <br />
                assertivas. Transforme seus processos em vantagem competitiva, <br />
                fale com a gente!
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