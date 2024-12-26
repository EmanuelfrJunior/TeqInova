import { HeaderComponents } from "./Header";

export function Pop(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[63%] font-bold text-3xl text-white ml-[15%] mt-[10%] mb-[5%] inline-block hove-underline">
                POPs (Procedimento Operacional Padrão)
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Organize e padronize suas operações com eficiência! Desenvolvemos <br />
                e implementamos POPs (Procedimentos Operacionais Padrão) perso- <br />
                nalizados para otimizar processos, garantir conformidade com normas <br />
                e melhorar a produtividade da sua equipe. Um POP bem estruturado <br />
                <span className="inline-block hove-underline">reduz erros, aumenta a qualidade e facilita o treinamento</span>. Entre <br />
                em contato e transforme a rotina da sua empresa!
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