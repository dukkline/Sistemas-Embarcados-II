'use client'

import { ReactElement } from "react";

type ButtonData = {
    text?:String;
    width?:String;
    icon?:ReactElement;
    type?:'button' | 'submit' | 'reset';
    onclick?:()=> void;
}

export default function OnButton({text="", width="", icon, type='button', onclick}:ButtonData){
    return(
        <button 
            type={type}
            onClick={onclick}
            className="bg-lime-600 text-white px-8 py-2 rounded-full flex justify-center items-center hover:bg-lime-700 hover:transition ease-linear text-3xl gap-1.5 hover:shadow-xl" 
        >
            {icon}
            {text && <span className="ml-2">{text}</span>}
            
        </button>
    );
}