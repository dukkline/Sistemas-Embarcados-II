'use client'

import { ReactElement } from "react";

type ButtonData = {
    nome?:String;
    funcao?:String;
    imagem?:string;
    horario?:string;
    onclick?:()=> void;
}

export default function FuncionarioButton({nome="", funcao="", imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-3fHwHfTzFBOnb3uEH3Tj4klzmxgvLvahGGUts7R-dRPVI68TVElWbCWGmAuZe_ummY&usqp=CAU", horario="00:00", onclick}:ButtonData){
    return(
        <div
            
            className="bg-white text-white rounded-3xl flex justify-between items-center text-3xl hover:shadow-xl w-xs h-60" 
        >
            <div className="flex ">
                <img src={imagem} className="rounded-2xl w-1/2 mx-2"/>
                <div>
                    <p className="text-black">{nome}</p>
                    <p className="text-black">{funcao}</p>
                </div>
            </div>
            <div className="flex h-full">
                <p className="text-black">{horario}</p>
                <div className="h-full w-32 bg-purpler-gradient rounded-2xl hover:bg-black hover:transition ease-linear justify-center items-center flex">
                    <button onClick={onclick} className="text-center">Conferir</button>
                </div>
            </div>
        </div>
    );
}