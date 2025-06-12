'use client'

import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from "react";
import { firebaseConfig } from "./Firebase";
import Menu from '@/components/Menu';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

export default function Sensoriamento(){  
    const [nome, setNome] = useState<string | null>(null);
    useEffect(() => {
        const nomeRef = ref(database, "reconhecimento");
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

    const[email, setEmail] = useState('');
    useEffect(() => {
        const emailRef = ref(database, "Funcionario/"+nome+"/email");
        onValue(emailRef, (snapshot) => {
            const value = snapshot.val();
            setEmail(value);
        });
    });

    const[idade, setIdade] = useState("");
    useEffect(() => {
        const idadeRef = ref(database, "Funcionario/"+nome+"/idade");
        onValue(idadeRef, (snapshot) => {
            const value = snapshot.val();
            setIdade(value);
        });
    });

    const[funcao, setFuncao] = useState("");
    useEffect(() => {
        const funcaoRef = ref(database, "Funcionario/"+nome+"/funcao");
        onValue(funcaoRef, (snapshot) => {
            const value = snapshot.val();
            setFuncao(value);
        });
    });

    const[horario, setHorario] = useState("");
    useEffect(() => {
        const horarioRef = ref(database, "Pontualidade/"+nome+"/horario");
        onValue(horarioRef, (snapshot) => {
            const value = snapshot.val();
            setHorario(value);
        });
    });

    return(
        <div className="bg-purple-gradient h-screen flex">
            <Menu/>
            <div className="flex flex-col gap-6 justify-center items-center w-full h-full">
                <div className="bg-purpler-gradient w-2/3 h-1/2 rounded-2xl flex flex-col p-8 shadow-lg text-white space-y-4">
                    <h1 className="text-5xl font-semibold mb-4 border-b border-white pb-2 text-center">Informações do Funcionário</h1>
                    
                    <div className="flex flex-row gap-2 text-2xl justify-between h-full px-16 py-8 items-center">
                        <div className="flex flex-col justify-between w-1/2 h-full items-center">
                            <p className="bg-lime-700 w-2/3 p-2 rounded-2xl text-center"><span className="font-semibold">Nome Completo:</span> {nomeCompleto}</p>
                            <p className="bg-lime-700 w-2/3 p-2 rounded-2xl text-center"><span className="font-semibold">E-mail:</span> {email}</p>
                        </div>
                        <div className="flex flex-col justify-between w-1/2 h-full items-center">
                            <p className="bg-lime-700 w-2/3 p-2 rounded-2xl text-center flex justify-center items-center gap-1"><span className="font-semibold">Idade:</span> {idade} <span>anos</span></p>
                            <p className="bg-lime-700 w-2/3 p-2 rounded-2xl text-center flex justify-center items-center gap-1"><span className="font-semibold">Função:</span> {funcao}</p>
                        </div>                                                    
                    </div>
                </div>
                <h1 className="text-4xl bg-lime-700 p-4 rounded-2xl text-center"><span className="font-semibold">Último Registro:</span> {horario}</h1>
            </div>
        </div>
    );
}