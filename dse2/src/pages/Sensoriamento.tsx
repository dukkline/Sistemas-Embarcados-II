'use client'

import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from "react";
import { firebaseConfig } from "./Firebase";
import { getAuth } from "firebase/auth";
import OnButton from "@/components/Buttons/OnButton";
import OffButton from "@/components/Buttons/OffButton";
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import FlashOffRoundedIcon from '@mui/icons-material/FlashOffRounded';
import Menu from '@/components/Menu';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Lure from '@/assets/lure-3s.jpg'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

function Ligar(){
    set(ref(database, 'Acionamento/ServoF'), true);
}

function Desligar(){
    set(ref(database, 'Acionamento/ServoF'), false);
}

export default function Sensoriamento(){  
    const [nome, setNome] = useState<string | null>(null);
    useEffect(() => {
        const nomeRef = ref(database, "reconhecimento");
        onValue(nomeRef, (snapshot) => {
            const value = snapshot.val();
            setNome(value);
        });
    });

    const[nomeCompleto, setNomeCompleto] = useState(0);
    useEffect(() => {
        const nomeCompletoRef = ref(database, "Funcionario/"+nome+"/Nome");
        onValue(nomeCompletoRef, (snapshot) => {
            const value = snapshot.val();
            setNomeCompleto(value);
        });
    });

    const[email, setEmail] = useState(0);
    useEffect(() => {
        const emailRef = ref(database, "Funcionario/"+nome+"/email");
        onValue(emailRef, (snapshot) => {
            const value = snapshot.val();
            setEmail(value);
        });
    });

    const[idade, setIdade] = useState(0);
    useEffect(() => {
        const idadeRef = ref(database, nome+"/idade");
        onValue(idadeRef, (snapshot) => {
            const value = snapshot.val();
            setIdade(value);
        });
    });

    const[funcao, setFuncao] = useState(0);
    useEffect(() => {
        const funcaoRef = ref(database, nome+"/idade");
        onValue(funcaoRef, (snapshot) => {
            const value = snapshot.val();
            setFuncao(value);
        });
    });

    return(
        <div className="bg-purple-gradient h-screen flex">
            <Menu/>
            <div className="flex justify-center items-center w-full h-full">
                <div className="bg-purpler-gradient w-2/3 h-1/2 rounded-2xl flex flex-col p-8 shadow-lg text-white space-y-4">
                    <h1 className="text-4xl font-bold mb-4 border-b border-white pb-2 text-center">Informações do Funcionário</h1>
                    
                    <div className="flex flex-col gap-2 text-lg">
                        <p><span className="font-semibold">Nome Completo:</span> {nomeCompleto}</p>
                        <p><span className="font-semibold">E-mail:</span> {email}</p>
                        <p><span className="font-semibold">Idade:</span> {idade}</p>
                        <p><span className="font-semibold">Função:</span> {funcao}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}