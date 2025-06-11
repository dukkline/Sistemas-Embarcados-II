'use client'

import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from "react";
import { firebaseConfig } from "./Firebase";
import { getAuth } from "firebase/auth";
import OnButton from "@/components/Buttons/OnButton";
import OffButton from "@/components/Buttons/OffButton";
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import FlashOffRoundedIcon from '@mui/icons-material/FlashOffRounded';
import Menu from '@/components/Menu';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Lure from '@/assets/lure-3s.jpg'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const styles = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };

function Ligar(){
    set(ref(database, 'Acionamento/ServoF'), true);
}

function Desligar(){
    set(ref(database, 'Acionamento/ServoF'), false);
}

export default function Sensoriamento(){  
    const [nome, setNome] = useState<string | null>(null);

    useEffect(() => {
        const auth = getAuth(app);
        const user = auth.currentUser;
        if (user) {
            setNome(user.displayName);
        }
    });

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setNome(user.displayName);
        }
    });
    const[temp, setTemp] = useState(0);
    useEffect(() => {
        const tempRef = ref(database, "Sensoriamento/Temperatura");
        onValue(tempRef, (snapshot) => {
            const value = snapshot.val();
            setTemp(value);
        });
    });

    const[umi, setUmi] = useState(0);
    useEffect(() => {
        const umiRef = ref(database, "Sensoriamento/Umidade");
        onValue(umiRef, (snapshot) => {
            const value = snapshot.val();
            setUmi(value);
        });
    });

    const[fum, setFum] = useState(0);
    useEffect(() => {
        const fumRef = ref(database, "Sensoriamento/Insalubridade");
        onValue(fumRef, (snapshot) => {
            const value = snapshot.val();
            setFum(value);
        });
    });

    const[servo, setServo] = useState(false);
    useEffect(() => {
        const servoRef = ref(database, "Acionamento/Servo");
        onValue(servoRef, (snapshot) => {
            const value = snapshot.val();
            setServo(value);
        });
    });

    const[servoF, setServoF] = useState(false);
    useEffect(() => {
        const servoFRef = ref(database, "Acionamento/ServoF");
        onValue(servoFRef, (snapshot) => {
            const value = snapshot.val();
            setServoF(value);
        });
    });

    function EstadoServo(){
        if(servo || servoF) return(<h1 className="text-center text-lime-600 text-3xl">Ligado!</h1>);
        else return(<h1 className="text-center text-rose-500 text-3xl">Desligado.</h1>);
    }

    return(
        <div className="bg-purple-gradient h-screen flex">
            <Menu/>

        </div>
    );
}