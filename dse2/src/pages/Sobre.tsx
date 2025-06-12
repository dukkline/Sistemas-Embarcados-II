'use client'

import Menu from '@/components/Menu';
import FuncionarioButton from '@/components/Buttons/FuncionarioButton'

export default function Sobre(){
    return(
        <div className="bg-purple-gradient h-screen flex">
            <Menu/>
            <div>
                <h1>Sistema de Funcionários</h1>
                <h1>Funcionários</h1>
            </div>
            <FuncionarioButton
                nome="John Kennedy"
                funcao="Gerente"
                // imagem=""
                horario="25:99"
                onclick={()=>{}}/>
        </div>
    );
}