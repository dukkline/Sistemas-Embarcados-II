'use client'

import Menu from '@/components/Menu';
import FuncionarioButton from '@/components/Buttons/FuncionarioButton'
import FuncionarioImagem from '@/assets/Funcionariosimg.png'
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';
import { useRouter } from 'next/navigation';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



export default function Sobre() {
    const router = useRouter();
    return (
        <div className="bg-purple-gradient h-full flex flex-row">
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

                <div className='w-4/5 bg-indigo-950 rounded-2xl'>
                    <div className='text-3xl italic font-bold text-white pl-5 pt-5'>
                        <h1>Funcionários</h1>
                    </div>
                    <div className='p-5'>
                        <FuncionarioButton
                            nome="John Kennedy"
                            funcao="Gerente"
                            // imagem=""
                            horario="25:99"
                            onclick={() => { set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="John Kennedy"
                            funcao="Gerente"
                            // imagem=""
                            horario="25:99"
                            onclick={() => { set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="John Kennedy"
                            funcao="Gerente"
                            // imagem=""
                            horario="25:99"
                            onclick={() => { set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento') }} 
                        />

                        <FuncionarioButton
                            nome="John Kennedy"
                            funcao="Gerente"
                            // imagem=""
                            horario="25:99"
                            onclick={() => { set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento') }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}