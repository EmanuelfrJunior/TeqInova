import { HeaderComponents } from "./Header";

export function AnaliseSolo(){

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-screen pt-10 flex">
            <div className="w-[80%]">
                <div className="w-[24%] font-bold text-3xl text-white ml-[25%] mt-[10%] mb-[5%] inline-block hove-underline">
                Ánalise de Solo
                </div>
                <div className="text-white font-semibold text-xl ml-[10%]">
                Descubra o potencial máximo do seu solo! Oferecemos análises completas <br />
                para identificar nutrientes, pH, compactação e outros fatores essenciais <br />
                para a produtividade agrícola ou paisagismo. Nosso serviço ajuda você a <br />
                tomar <span className="inline-block hove-underline">decisões assertivas, melhorar colheitas e economizar em insumos.</span> <br />
                Invista na saúde do seu solo e colha melhores resultados!
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