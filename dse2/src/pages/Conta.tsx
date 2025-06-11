'use client'

import Menu from '@/components/Menu';
import AccountIcon from '@/assets/accountcircle.png'
import duccline from '@/assets/duccline.jpg'
import NormalButton from '@/components/Buttons/NormalButton';
import PublishIcon from '@mui/icons-material/Publish';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation'
import { getAuth, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebaseConfig } from "@/pages/Firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage';


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Conta(){
    const router = useRouter();
    const [nome, setNome] = useState<string | null>(null);
    const auth = getAuth();
    const user = auth.currentUser;
    const [email, setEmail] = useState<string | null>(null);
    
    useEffect(() => {
        if (user) {
            setNome(user.displayName);
            setEmail(user.email);
        }
    }, [user]);

    const[uploading, setUploading] = useState(false);
    const[file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const[pfp, setPFP] = useState<string | null>(null);
    
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }
    
        setUploading(true);
        const storage = getStorage();
        const storageRef = ref(storage, `profilePictures/${file.name}`);
    
        try {
            console.log("Uploading file...");
            const snapshot = await uploadBytes(storageRef, file);
            console.log("Upload complete, fetching download URL...");
            const url = await getDownloadURL(snapshot.ref);
            console.log("Download URL fetched:", url);
    
            if (user) {
                await updateProfile(user, { photoURL: url });
                setPFP(url);
                alert("Profile picture updated successfully!");
            } else {
                alert("No user is currently signed in.");
            }
        } catch (error) {
            console.error("Error uploading profile picture:", error);
            alert("Failed to upload profile picture. Please try again.");
        } finally {
            setUploading(false);  // Ensure this is called when the process completes
            console.log("Uploading state finished");
        }
    };
    
    
    return(
        <div className="flex">
        <Menu/>
        <div className="flex justify-center items-center bg-purple-gradient shadow-xl h-especifissimo px-12 border-b-2 border-black"> 
            <div className="px-12 py-9 w-1/3 bg-purpler-gradient border-4 border-white justify-center items-center flex flex-col gap-2 rounded-xl shadow-lg hover:shadow-2xl transition ease-linear">
                <img src={pfp || duccline.src} alt="" className="rounded-full border-4 border-white w-5/6"/>
                <h1 className="text-3xl mt-2">Olá {nome}!</h1>
                <p className="text-xl mb-3">Email: {email}</p>
                <div className="px-3 pt-1.5 pb-3 gap-2 flex flex-col bg-purple-gradient rounded-xl border border-white justify-center items-center mb-2">
                    <NormalButton text={uploading ? "Enviando..." : "Definir foto"} icon={<PublishIcon/>} onclick={() => alert("Recurso indisponível, pois requer o plano pago do Firebase.")}/>
                    <input type="file" accept="image/*" name="picture" id="picture" onChange={handleFileChange} className="text-sm"/>
                </div>
                <NormalButton text="Sair da Conta" icon={<LogoutIcon/>} onclick={() => router.push('/login')}/>
            </div>
        </div>
        </div>
    );
    
}