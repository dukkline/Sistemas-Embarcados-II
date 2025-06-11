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
        <div className="flex flex-col justify-around items-center bg-purpler-gradient shadow-xl h-especifico w-especifissimo px-12 border-b-2 border-black"> 
                <NormalButton
                text = ""
                icon = {<EdgesensorHighRoundedIcon/>}
                onclick={() => router.push('/sensoriamento')}
                />
                <NormalButton
                text = ""
                icon = {<InfoOutlinedIcon/>}
                onclick={() => router.push('/sobre')}
                />
                <NormalButton
                onclick={() => router.push('/conta')}
                />
        </div>
    );
}