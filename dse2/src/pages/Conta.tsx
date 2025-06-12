'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { firebaseConfig } from "@/pages/Firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue } from "firebase/database";
import { ref } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Conta(){
    const router = useRouter();
    const [nome, setNome] = useState<string | null>(null);
        useEffect(() => {
            const nomeRef = ref(database, "Rasp/pessoa");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setNome(value);
            });
        });
    const[nomeCompleto, setNomeCompleto] = useState("");
        useEffect(() => {
            const nomeCompletoRef = ref(database, "Funcionario/"+nome+"/Nome");
            onValue(nomeCompletoRef, (snapshot) => {
                const value = snapshot.val();
                setNomeCompleto(value);
            });
        });

    function Identificar(){
        if(nome?.toUpperCase() == "DESCONHECIDO") return(<h1 className="text-center text-rose-500 text-3xl">Funcionário não reconhecido.</h1>);
        else return(<h1 className="text-center text-lime-600 text-5xl">Olá {nomeCompleto}!</h1>);
    }
    
    
    return(
            <div className="flex justify-center items-center bg-purple-gradient shadow-xl px-12 border-b-2 border-black h-screen w-screen"> 
                <div className="flex flex-col justify-between py-12 items-center bg-purpler-gradient w-2/3 h-2/3 rounded-3xl border-4 gap-20">
                    <h1 className="text-5xl font-semibold border-b border-white pb-2 text-center w-11/12"> Identificação </h1>
                    <div className='flex flex-col gap-12 h-full'>
                        <p className="text-4xl text-center">Bem-vindo, funcionário da Aqualux!<br></br>Identifique-se pela câmera ao lado.</p>
                        {Identificar()}
                    </div>
                    <h1 className="text-5xl font-semibold border-t border-white pb-2 text-center w-11/12">  </h1>
                </div>      
            </div>
    );
    
}