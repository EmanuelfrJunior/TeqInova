import { HeaderComponents } from "../components/Header";

export function SobrePage() {

    return(
        <>
        <div>
            <HeaderComponents/>
        </div>
        <div className="bg-black w-full h-[600px] text-white font-semibold text-2xl"><br/><br/>
                <div className=" w-[60%] mt-[4%] mx-auto itens-center justify-center">
                    <span className="ml-[41%] text-3xl relative inline-block hove-underline">Quem Somos</span><br /><br />
                        <div className="ml-[10%]">
                        <span className="">A TEQInova é uma empresa júnior especializada em consultoria nas áreas de Química, Agrícola e Alimentos. Já executamos mais de <span className="relative inline-block hove-underline">30 projetos</span>,
                         oferecendo <span className="relative inline-block hove-underline">soluções criativas e eficientes</span> para empresas e Centros de Formação Profissional (CFPs). 
                        </span>
                        </div><br />
                </div>
            </div>
            <div className="w-full h-[600px]">
                <div className="bg-white w-full h-[93%]">
                    <div className="w-[10%] text-3xl font-bold mt-2 mx-auto itens-center justify-center "><span className=" inline-block hove-underline">TEQINOVA</span></div>
                    <div className="font-semibold text-2xl">
                        <div className=" flex gap-10 mx-auto itens-center justify-center mt-[3%]">
                                <button className="borda p-1 bg-gray-100 w-[27%] h-[450px] rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <div className=" p-2 inline-block hove-underline">
                                        VISÃO<br /> <hr />
                                    </div><br />
                                        <span>É ser referência no mercado paraibano, aplicando consultorias de excelência nas áreas em que atuamos. Buscamos ser uma empresa que contribui não apenas com o crescimento das empresas, mas também com a formação e capacitação de novos profissionais, colaborando para o desenvolvimento do setor produtivo e acadêmico.</span>
                                </button>
                                <button className="borda p-1 bg-gray-100 w-[27%] h-[450px] rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <div className=" p-2 inline-block hove-underline">
                                        MISSÃO<br /> <hr />
                                    </div><br />
                                    <span>auxiliar no desenvolvimento profissional e pessoal de nossos membros por meio da formação de lideranças empreendedoras. Além disso, temos o compromisso de oferecer soluções de alta qualidade tanto para empresas que buscam melhorar seus processos e resultados, quanto para CFPs que desejam enriquecer a formação de seus alunos com projetos inovadores e práticos.</span>
                                </button>
                        </div>
                       
                    </div>
                </div>
                <div className="bg-black w-full h-[25%]">
                    <div className="w-[35%] text-white mx-auto itens-center p-6 justify-center">
                    <div>TEQINOVA – TECNOLOGIA, ENGENHARIA QUÍMICA E INOVAÇÃO</div>
                    <div className="ml-[15%]">CNPJ/MF sob o nº 28.998.471/0001-50</div>
                    <div>Rua Aprígio Veloso, 882, Bloco CW 2, Campina Grande -PB</div>
                    </div>
                </div>
            </div>
        </>
    )
    
}


