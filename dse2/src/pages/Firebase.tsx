import firebase from "firebase/compat/app";  // Usando a versão compatível do Firebase
import "firebase/compat/auth";  // Importando a autenticação
import "firebase/compat/firestore";  // Importando Firestore
import "firebase/compat/storage";  // Importando Storage
import "firebase/compat/database";  // Importando Realtime Database
import { useState, useEffect } from "react";

// Configuração do Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCYs4f0IPdx7fPzbCZsAIUi8aLsdJahSs4",
  authDomain: "lure03-9e8ad.firebaseapp.com",
  databaseURL: "https://lure03-9e8ad-default-rtdb.firebaseio.com",
  projectId: "lure03-9e8ad",
  storageBucket: "lure03-9e8ad.firebasestorage.app",
  messagingSenderId: "60157119400",
  appId: "1:60157119400:web:7737363d48a27bb1bf6b9d",
  measurementId: "G-V0T2REWV60"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.database();  
const firestore = firebase.firestore();  
const auth = firebase.auth(); 
const storage = firebase.storage(); 


export const App = () => {
  const [data, setData] = useState(null); 

  
  useEffect(() => {
    const ref = database.ref("exemplo");
    ref.once("value", (snapshot) => {
      const dataFromDB = snapshot.val(); 
      setData(dataFromDB); 
    });

    return () => {
      ref.off();
    };
  }, []); 


};

export { firebase, database, firestore, auth, storage };