'use client'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import OnButton from '@/components/Buttons/OnButton';
import Lure from '@/assets/lure.jpg'
import Menu from '@/components/Menu';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { get, getDatabase, push, ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Firebase';
import router from 'next/router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDisplayName } from 'next/dist/shared/lib/utils';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
  
export default function Login(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetir, setRepetir] = useState("");
    const router = useRouter();

    const Cadastrar = async (event: FormEvent) => {
      event.preventDefault();
      if (senha !== repetir) {
          alert("As senhas não coincidem. Tente novamente.");
          return;
      }

      try {
          const auth = getAuth(app);
          const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
          const user = userCredential.user;
          await updateProfile(user, { displayName: nome });

          router.push("/sobre");
      } catch (error: any) {
          console.error("Error during registration:", error.message);
          alert("Erro ao cadastrar. Tente novamente.");
      }
  };

    return(
        <>
        <div className="flex justify-center items-center bg-purpler-gradient shadow-xl h-especifico px-12 border-b-2 border-black">
            <h1 className="text-white text-4xl">Cadastro</h1>
        </div>
        <div className="justify-center items-center bg-purple-gradient flex gap-28 h-especifissimo">
            <img src={Lure.src} alt="robo" className="justify-center w-5/12 mb-6 rounded-xl border-2 border-black shadow-lg hover:shadow-2xl hover:border-white transition ease-linear"/>
            <div className="h-full justify-center items-center flex flex-col py-20 gap-6">
                <h1 className="bg-purpler-gradient p-6 w-full flex flex-col gap-4 rounded-xl border-2 border-white shadow-lg hover:shadow-2xl hover:border-black transition ease-linear text-4xl">Bem vindo ao site do robô Lure-3S!<br></br>Insira seus dados para prosseguir.</h1>
                <form onSubmit={Cadastrar} className="flex flex-col gap-6 justify-center items-center">
                <div className="flex gap-2">
                        <p className="text-4xl drop-shadow-lg">Nome: </p>
                        <input type="text" name="Nome" id="Nome" onChange={event => setNome(event.target.value)} required className="rounded-md text-lg text-black border border-black p-1 ml-1.5"/>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-4xl drop-shadow-lg">E-mail: </p>
                        <input type="email" name="Email" id="Email" onChange={event => setEmail(event.target.value)} required className="rounded-md text-lg text-black border border-black p-1 ml-1"/>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-4xl drop-shadow-lg">Senha: </p>
                        <input type="password" name="Senha" id="Senha" onChange={event => setSenha(event.target.value)} required className="rounded-md text-lg text-black border border-black p-1"/>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-4xl drop-shadow-lg">Confirme a senha.</p>
                        <input type="password" name="Confirmar" id="Confirmar" onChange={event => setRepetir(event.target.value)} required className="rounded-md text-lg text-black border border-black p-1 w-2/3"/>
                    </div>
                <div className="flex justify-center">
                    <OnButton icon={<AccountCircleRoundedIcon/>} text="Cadastrar" type="submit"/>
                </div>
                </form>
                <div className="flex">
                        <p>Já tem cadastro? Clique </p>
                        <button onClick={() => router.push('/login')} className="text-blue-400 ml-1"><u>aqui</u></button>
                        <p>!</p>
                    </div>
            </div>
        </div>
        </>
    );
}

