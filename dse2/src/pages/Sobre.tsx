'use client'

import Menu from '@/components/Menu';
import FuncionarioButton from '@/components/Buttons/FuncionarioButton'
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';
import router from 'next/router';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Sobre() {
    
    return (
        <div className="bg-purple-gradient h-screen flex flex-row">
            <div className='border-2 mr-20'>
                <Menu />
            </div>

            <div className='flex flex-col w-4/5 border-2 items-center'>
                <div className='w-4/5 bg-white m-5'>
                    <h1>Sistema de Funcionários</h1>
                    <h1>Funcionários</h1>
                </div>

                <div className='w-4/5'>
                    <FuncionarioButton
                        nome="John Kennedy"
                        funcao="Gerente"
                        // imagem=""
                        horario="25:99"
                        onclick={() => {set(ref(database, 'reconhecimento'), 'johnkennedy'); router.push('/sensoriamento')}} />
                </div>
            </div>
        </div>
    );
}