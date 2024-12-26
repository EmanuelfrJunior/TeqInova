import { useNavigate } from "react-router-dom"

export function SectionComponents(){
const navigate = useNavigate();

function analiseagua(){
    navigate(`/analiseagua`)
}
function analisesolo(){
    navigate(`/analisesolo`)
}
function pop(){
    navigate(`/pop`)
}
function efluentes(){
    navigate(`/efluentes`)
}
function mapprocesso(){
    navigate(`/mapprocesso`)
}
function consultoria(){
    navigate(`/consultoria`)
}
function BPF(){
    navigate(`/BPF`)
}

    return(
        <>
            <div className="bg-black w-full h-[700px] text-white font-semibold text-2xl"><br/><br/>
                <div className=" w-[60%] mx-auto itens-center justify-center">
                    <img className="ml-[33%] w-[30%]" src="src/assets/teqSemNome.png" alt="LogoTeqInova" /><br />
                        <div className="ml-[10%]">
                        <span className=""> Empresa Júnior de Engenharia Química, Agrícola e Alimentos da UFCG <br />
                        <span className="text-[#009a7f]">7 anos</span> impactando o mercado e entregando <span className="relative inline-block hove-underline">soluções personalizadas.</span></span>    
                        </div><br />
                    <span className="ml-[41%]">TEQINOVA</span><br /><br />
                    
                </div>
              
            </div>

            <div className="w-full h-[500px]">
                <div className="bg-white w-full h-[110%]">
                    <div className="w-[10%] text-3xl font-bold mt-2 mx-auto itens-center justify-center "><span className=" inline-block hove-underline">Serviços</span></div>
                    <div className="font-semibold text-2xl">
                        <div className=" flex gap-7 mx-auto itens-center justify-center mt-[3%]">
                                <button onClick={analiseagua} className="borda bg-gray-100 w-[13%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <div className=" p-2 inline-block hove-underline">
                                        Análise de água<br /> <hr />
                                    </div>
                                        <img className="w-10 h-10 mx-auto itens-center justify-center mt-10" src="src/icons/agua.jpg" alt="" />
                                </button>
                                <button onClick={analisesolo} className="borda bg-gray-100 w-[13%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                <a>
                                    <div className=" p-2 inline-block hove-underline">
                                    Análise de solo<br /> <hr />
                                    </div>
                                    <img className="w-10 h-10 mx-auto itens-center justify-center mt-10" src="src/icons/plant.png" alt="" />
                                </a>
                                </button>
                                <button onClick={pop} className="borda bg-gray-100 w-[27%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                <a><div className=" p-2 inline-block hove-underline">
                                    <span className=" mx-auto itens-center justify-center">POPs</span> <br />(Procedimento Operacional Padrão)<br /> <hr /></div>
                                    <img className="w-10 h-10 mx-auto itens-center justify-center mt-4" src="src/icons/papelcaneta.png" alt="" />
                                </a>
                                </button>
                                <button onClick={efluentes} className="borda bg-gray-100 w-[19%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <a><div className=" p-2 inline-block hove-underline">Tratamento de efluentes<br /> <hr /></div>
                                    <img className="w-10 h-10 mx-auto itens-center justify-center mt-10" src="src/icons/tuboensaio.png" alt="" />
                                    </a>
                                </button>
                        </div>
                        <div className="flex gap-10 mx-auto itens-center justify-center mt-10">
                                <button onClick={mapprocesso} className="borda bg-gray-100 w-[21%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <a><div className=" p-2 inline-block hove-underline">Mapeamento de processos<br /> <hr /></div>
                                    <img className="w-10 h-10 mx-auto itens-center justify-center mt-10" src="src/icons/mapa.png" alt="" />
                                    </a>
                                </button>
                                <button onClick={consultoria} className="borda bg-gray-100 w-[13%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <a><div className="mx-auto itens-center justify-center p-2 inline-block hove-underline">Consultória<br /> <hr /></div>
                                    <img className="w-12 h-12 mx-auto itens-center justify-center mt-10" src="src/icons/lux.png" alt="" />
                                    </a>
                                </button>
                                <button onClick={BPF} className="borda bg-gray-100 w-[25%] h-[190px] shadow-2xl rounded-xl transition-transform transform hover:scale-110 active:scale-95 active:opacity-80">
                                    <a><div className=" p-2 inline-block hove-underline">BPF(Boas Práticas de Fabricação)<br /> <hr /></div>
                                    <img className="w-12 h-12 mx-auto itens-center justify-center mt-10" src="src/icons/capacete.png" alt="" />
                                    </a> 
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