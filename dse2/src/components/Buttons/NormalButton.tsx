'use client'

import { ReactElement } from "react";

type ButtonData = {
    text?:String|null;
    width?:String;
    icon?:ReactElement|null;
    type?:'button' | 'submit' | 'reset';
    onclick?:()=> void;
}

export default function NormalButton({text="", width="", icon, type='button', onclick}:ButtonData){
    function Decidir(){
        if(icon && text) return(<span className="ml-1.5">{text}</span>);
        if(text) return(<span>{text}</span>);
    }
    
    return(
        <button 
            type={type}
            onClick={onclick}
            className="text-white px-4 py-2 rounded-full flex justify-center items-center hover:bg-violet-900 hover:transition ease-linear text-2xl gap-1" 
        >
            {icon}
            <Decidir/>
            
        </button>
    );
}