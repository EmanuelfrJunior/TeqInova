import { useNavigate } from "react-router-dom"


export function HeaderComponents(){
    const navigate = useNavigate();

    function homeClick(){
        navigate(`/`)
    }
    function sobreClick(){
        navigate(`/sobre`)
    }
    function contatoClick(){
        navigate(`/contatos`)
    }
    return(
       <>
       <header>
        <div className="bg-black w-full h-[75px] justify-between flex">
            <div className="text-xl w-[33%] pl-10 pt-2 flex">
                <a href="https://www.instagram.com/teqinova/" target="blank"><img className="w-12 h-13" src="src/assets/teqSemNome.png" alt="LogoTipop" /></a> 
            </div>

        

            <div className=" mr-10 pt-5 text-white">
                <div className="flex gap-5 text-xl font-semibold">

                    <div className="hover:text-[#009a7f] couser-mouse">
                        <button onClick={homeClick}><a href=""><span className=' font-semibold relative inline-block hover-underline'>Ínicio</span></a>
                        </button>        
                    </div>
                    <div className="hover:text-[#009a7f] couser-mouse">
                        <button onClick={sobreClick}><a href=""><span className="font-semibold relative inline-block hover-underline">Sobre</span></a>
                        </button>
                    </div>
                    <div className="hover:text-[#009a7f] couser-mouse">
                        <button onClick={contatoClick}><a href=""><span className="font-semibold relative inline-block hover-underline">Contato</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
       </header>
       </>
    )
}