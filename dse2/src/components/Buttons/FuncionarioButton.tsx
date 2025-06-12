'use client'

import { ReactElement } from "react";

type ButtonData = {
    nome?:String;
    funcao?:String;
    imagem:string;
    horario?:string;
    onclick?:()=> void;
}

export default function OffButton({nome="", funcao="", imagem, horario="00:00", onclick}:ButtonData){
    return(
        <div
            
            className="bg-white text-white px-5 py-2 rounded-3xl flex justify-between items-center hover:bg-gray-300 hover:transition ease-linear text-3xl hover:shadow-xl w-3xs h-60" 
        >
            <div className="flex">
                <img src={imagem} className="rounded-4xl h-full"/>
                <div>
                    <p className="text-black">{nome}</p>
                    <p className="text-black">{funcao}</p>
                </div>
            </div>
            <div className="flex">
                <p className="text-black">{horario}</p>
                <button onClick={onclick} className="h-full w-32 bg-purple-gradient"> </button>
            </div>
        </div>
    );
}