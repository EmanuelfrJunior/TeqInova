import { useState } from "react";
import { HeaderComponents } from "../components/Header";
import emailjs  from "@emailjs/browser";

export function ContatoPage(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


        function senEmail(e){
            e.preventDefault();

            if (name === '' || email === '' || message ==='') {
                alert("Preencha todos os campos!");
                return;
            }
            const Key = "6vScGar5LQ-OEYwpS"
            const emailService = "service_evlu17j"
            const emailTemplates = "template_fzif6sg"
            const templateParams = { from_name: name, message: message, email: email}

            emailjs.send(emailService, emailTemplates, templateParams, Key)
            .then((response) => {
                alert("Email Enviado")
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log("Error", error)
            } )
        }

  return (
    <>
    
        <div>
            <HeaderComponents/>
        </div>
      
        <div className="bg-black w-full h-screen">
            <div className="w-full h-[20%] ">
                <div className="w-[6%] pt-[5%] hove-underline mx-auto itens-center justify-center text-white font-semibold text-3xl">
                    E-mail
                </div>
            </div>
            <div className="w-full h-[80%]">
                <div className="bg-[#009a7f] w-[40%] h-[60%] mx-auto p-1 itens-center justify-center rounded-xl">
                <form onSubmit={senEmail}>
                    <div className="rounded-xl">
                        <div><input type="text"  className="w-full h-[50px] mb-2 rounded-xl" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} id="" /></div>
                        <div> <input type="text" className="w-full h-[50px] mb-2 rounded-xl" name="email" placeholder="Digite seu E-Mail" onChange={(e) => setEmail(e.target.value)} value={email} id="" /></div>
                        <div> <input type="text" className="w-full h-[247px] rounded-xl" name="message" placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message} id="" /></div>

                        <div className="h-5"></div>
                <div className="flex mx-auto items-center justify-center">
                    <button className="bg-[#009a7f] w-[70%] h-[40px] text-white text-2xl font-semibold rounded-full transition-transform transform hover:scale-110 active:scale-95 active:opacity-80" type="submit">Enviar</button></div>
                    </div>
                </form>
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