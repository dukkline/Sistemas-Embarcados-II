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
                imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zcd-dwhaQPEzwe_fWYDMtVVze35Ad5nMHkSk7nxMpBrOtH3_C0wVTz_z6qkVjtYdydw&usqp=CAU"/>
        </div>
    );
}