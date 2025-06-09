import NormalButton from "./Buttons/NormalButton";
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import duccline from "@/assets/duccline.jpg"
import { useRouter } from 'next/navigation'
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebaseConfig } from "@/pages/Firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import OnButton from "./Buttons/OnButton";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Menu(){
    const router = useRouter();
    const [nome, setNome] = useState<string | null>("");

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setNome(user.displayName);
        }
    });
    return(
        <div className="flex justify-between items-center bg-purpler-gradient shadow-xl h-especifico px-12 border-b-2 border-black"> 
            <div className=" flex justify-start items-center gap-12">    
                <NormalButton
                text = "Sensoriamento"
                icon = {<EdgesensorHighRoundedIcon/>}
                onclick={() => router.push('/sensoriamento')}
                />
                <NormalButton
                text = "Sobre"
                icon = {<InfoOutlinedIcon/>}
                onclick={() => router.push('/sobre')}
                />
            </div>
            <div className="text-white pl-3 py-2 rounded-full flex justify-center items-center hover:bg-violet-900 hover:transition ease-linear text-2xl">
                <img src={duccline.src} alt="" className="w-11 rounded-full border-2 border-white"/>
                <NormalButton
                text = {nome}
                onclick={() => router.push('/conta')}
                />

            </div>
        </div>
    );
}