'use client'

import Menu from '@/components/Menu';
import Lure from "@/assets/lure-3s.jpg";

export default function Sobre(){
    return(
        <div className="bg-purple-gradient h-screen">
            <Menu/>
            <div className="flex flex-col h-especifissimo justify-center items-center gap-5 pb-10">    
                <div className="p-6 flex justify-evenly">
                    <div className="bg-purpler-gradient p-6 w-1/3 flex flex-col gap-4 rounded-xl border-2 border-black hover:border-white shadow-lg hover:shadow-2xl  transition ease-linear">
                        <h1 className="text-3xl text-center"><u>O que é o Lure-3S?</u></h1>
                        <p className="text-justify text-xl">O Lure-3S é um robô controlado quadrimotor que irá checar a temperatura, umidade e grau de fumaça de um local hostil ao ser humano, como uma floresta recém-devastada por queimadas. Possui cadastro, sensoriamento e acionamento via site (verifique acima!).<br></br></p>
                    </div> 
                    <div className="bg-purpler-gradient p-6 w-1/3 flex flex-col gap-2 rounded-xl border-2 border-black hover:border-white shadow-lg hover:shadow-2xl transition ease-linear">
                        <h1 className="text-4xl text-center"><u>Quais tecnologias ele utiliza?</u></h1>
                        <p className="text-justify text-xl">Os componentes principais são o Arduino e a ESP-32, que centralizam as informações de entrada e saída. Também utilizamos os sensores:</p>
                        <ul className="text-2xl">
                            <li>• DHT-11 (Temperatura e Umidade)</li>
                            <li>• MQ-2 (Fumaça)</li>
                        </ul>
                    </div>
                </div>
                <img src={Lure.src} alt="" className="justify-center w-1/4 rounded-xl border-2 border-black hover:border-white shadow-lg hover:shadow-2xl transition ease-linear"/>
            </div>
        </div>
    );
}