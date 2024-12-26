import { HeaderComponents } from "./Header";

export function BPF(){

    return(
        <>
         <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[51%] font-bold text-3xl text-white ml-[15%] mt-[10%] mb-[5%] inline-block hove-underline">
                BPF (Boas Práticas de Fabricação)
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Garanta qualidade e segurança nos seus produtos com as Boas Práticas <br />
                de Fabricação (BPF)! Oferecemos consultoria completa para implementar <br />
                e adequar seus processos às normas exigidas, promovendo eficiência, <br />
                higiene e conformidade. <span className="inline-block hove-underline">Invista em confiança e competitividade no mercado</span>. <br />
                Fale conosco e leve seu negócio ao padrão de excelência!
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