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
            
            className="bg-white text-white rounded-2xl flex justify-between items-center text-2xl hover:shadow-xl w-xs h-60" 
        >
            <div className="flex pl-5">
                <img src={imagem} className="rounded-2xl border-4 rounded-full border-indigo-950 w-1/2 mx-2"/>
                <div>
                    <p className="text-black font-bold py-2">{nome}</p>
                    <p className="text-black font-bold">{funcao}</p>
                </div>
            </div>
            <div className="flex h-full">
                <p className="text-black p-5 font-bold text-xl">{horario}</p>
                <div className="h-full text-3xl justify-center border-4 w-40 bg-purpler-gradient rounded-2xl hover:bg-black hover:transition ease-linear justify-center items-center flex">
                    <button onClick={onclick} className="text-center font-bold">Conferir</button>
                </div>
            </div>
        </div>
    );
}