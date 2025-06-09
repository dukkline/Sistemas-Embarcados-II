'use client'

import { ReactElement } from "react";

type ButtonData = {
    text?:String;
    width?:String;
    icon?:ReactElement;
    type?:'button' | 'submit' | 'reset';
    onclick?:()=> void;
}

export default function OffButton({text="", width="", icon, type='button', onclick}:ButtonData){
    return(
        <button 
            type={type}
            onClick={onclick}
            className="bg-rose-500 text-white px-5 py-2 rounded-full flex justify-center items-center hover:bg-rose-600 hover:transition ease-linear text-3xl hover:shadow-xl" 
        >
            {icon}
            {text && <span className="ml-2">{text}</span>}
            
        </button>
    );
}