'use client'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import OnButton from '@/components/Buttons/OnButton';
import Lure from '@/assets/lure.jpg'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { get, getDatabase, ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './Firebase';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => { 
        const user = userCredential.user;
        router.push("/sobre");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
      });
  };

  return (
    <>
      <div className="flex justify-center items-center bg-purpler-gradient shadow-xl h-vaitomanocu px-12 border-b-2 border-black">
        <h1 className="text-white text-4xl">Log-In</h1>
      </div>
      <div className="justify-center items-center bg-purple-gradient flex gap-28 h-especifissimo">
        <img src={Lure.src} alt="robo" className="justify-center items-center w-2/5 mb-6 rounded-xl border-2 border-black shadow-lg hover:shadow-2xl hover:border-white transition ease-linear" />
        <div className="h-full justify-center items-center flex flex-col py-16 gap-8 mb-2n">
          <h1 className="bg-purpler-gradient p-6 w-full flex flex-col gap-4 rounded-xl border-2 border-white hover:border-black shadow-lg hover:shadow-2xl transition ease-linear text-4xl">Seja bem-vindo ao site do Aqualux!<br></br>Insira seus dados para prosseguir.</h1>
          <form onSubmit={handleLogin} method='dialog' className="flex flex-col gap-6 justify-center items-center">
            <div className="flex gap-2">
              <p className="text-4xl drop-shadow-lg">E-mail: </p>
              <input type="email" name="Email" id="email" onChange={event => setEmail(event.target.value)} required className="rounded-md text-black border border-black p-1 text-lg" />
            </div>
            <div className="flex gap-2">
              <p className="text-4xl drop-shadow-lg">Senha: </p>
              <input type="password" name="Senha" id="senha" onChange={event => setSenha(event.target.value)} required className="rounded-md text-black border border-black p-1 text-lg" />
            </div>
            <OnButton icon={<AccountCircleRoundedIcon />} text="Entrar" type="submit" />
          </form>
          <div className="flex text-lg">
              <p>Não tem cadastro? Faça </p>
              <button onClick={() => router.push('/cadastro')} className="text-blue-400 ml-1"><u>aqui</u></button>
              <p>!</p>
            </div>
        </div>
      </div>
    </>
  );
}

