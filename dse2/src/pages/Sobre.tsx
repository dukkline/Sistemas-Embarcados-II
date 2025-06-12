'use client'

import Menu from '@/components/Menu';
import FuncionarioButton from '@/components/Buttons/FuncionarioButton'
import FuncionarioImagem from '@/assets/Funcionariosimg.png'

export default function Sobre() {
    
    return (
        <div className="bg-purple-gradient h-screen flex flex-row">
            <div className='border-2 mr-20'>
                <Menu />
            </div>

            <div className='flex flex-col w-4/5 border-2 items-center'>
                <div className='w-4/5 bg-white m-5 flex flex-row'>
                    <div className='w-2/3 font-bold text-black text-2xl'>
                        <h1>Histórico de Funcionários</h1>
                    </div>

                    <div className='w-1/3'>
                        <img src={FuncionarioImagem.src} alt="" />
                    </div>
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