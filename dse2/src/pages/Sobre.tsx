'use client'

import Menu from '@/components/Menu';
import FuncionarioButton from '@/components/Buttons/FuncionarioButton'
import FuncionarioImagem from '@/assets/Funcionariosimg.png'
import { getDatabase, ref, set, onValue, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Sobre() {
    const [johnHorario, setJohnHorario] = useState("");
        useEffect(() => {
            const nomeRef = ref(database, "Pontualidade/johnkennedy/horario");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setJohnHorario(value);
            });
        });
    const [anaHorario, setAnaHorario] = useState("");
        useEffect(() => {
            const nomeRef = ref(database, "Pontualidade/anacelia/horario");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setAnaHorario(value);
            });
        });
    const [heloisaHorario, setHeloisaHorario] = useState("");
        useEffect(() => {
            const nomeRef = ref(database, "Pontualidade/kadota/horario");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setHeloisaHorario(value);
            });
        });
    const [solHorario, setSolHorario] = useState("");
        useEffect(() => {
            const nomeRef = ref(database, "Pontualidade/sol/horario");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setSolHorario(value);
            });
        });
    const [sandiegoHorario, setSandiegoHorario] = useState("");
        useEffect(() => {
            const nomeRef = ref(database, "Pontualidade/sandiego/horario");
            onValue(nomeRef, (snapshot) => {
                const value = snapshot.val();
                setSandiegoHorario(value);
            });
        });

    const router = useRouter();
    return (
        <div className="bg-purple-gradient h-screen flex flex-row">
            <div className='mr-20'>
                <Menu />
            </div>

            <div className='flex flex-col w-4/5 items-center'>
                <div className='w-4/5 bg-white m-5 flex justify-around flex-row rounded-2xl shadow-xl/30'>
                    <div className='w-1/3 ml-40 font-bold italic text-gray-800 text-4xl flex justify-center items-center text-wrap radious-xl'>
                        <h1>Histórico de Funcionários</h1>
                    </div>

                    <div className='w-1/3 flex justify-center items-center'>
                        <img className='p-5 pr-20' src={FuncionarioImagem.src} alt="" />
                    </div>
                </div>

                <div className='w-4/5 bg-indigo-950 rounded-2xl overflow-y-auto h-3/5'>
                    <div className='text-3xl italic font-bold text-white pl-5 pt-5'>
                        <h1>Funcionários</h1>
                    </div>
                    <div className='p-5'>
                        <FuncionarioButton
                            nome="John Kennedy"
                            funcao="Desenvolvedor"
                            // imagem=""
                            horario={johnHorario}
                            onclick={() => { set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="Ana Célia"
                            funcao="Gerente"
                            imagem="https://avatar.iran.liara.run/public/80"
                            horario={anaHorario}
                            onclick={() => { set(ref(database, 'reconhecimento'), 'anacelia'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="Heloisa Kadota"
                            funcao="Analista"
                            imagem="https://avatar.iran.liara.run/public/85"
                            horario={heloisaHorario}
                            onclick={() => { set(ref(database, 'reconhecimento'), 'kadota'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="Hugo de Carvalho"
                            funcao="Programador"
                            imagem="https://avatar.iran.liara.run/public/28"
                            horario={solHorario}
                            onclick={() => { set(ref(database, 'reconhecimento'), 'sol'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="Sandiego Moraes"
                            funcao="Professor"
                            imagem="https://avatar.iran.liara.run/public/37"
                            horario={sandiegoHorario}
                            onclick={() => { set(ref(database, 'reconhecimento'), 'sandiego'); router.push('/sensoriamento') }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}