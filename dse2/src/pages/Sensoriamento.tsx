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
        <div className="bg-purple-gradient h-screen">
        <Menu/>
        <div className="flex p-3 justify-center items-center h-especifissimo pb-10">
            <div className="w-1/2 p-9 bg-purpler-gradient rounded-3xl flex flex-col gap-7 border-4 border-white shadow-lg hover:shadow-2xl transition ease-linear">
                <div className="flex flex-col text-white justify-center items-center">
                    <h1 className="text-center text-5xl"><u>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Sensoriamento‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</u></h1>
                    <div className="my-5 text-4xl justify-between items-between items-center h-1/5 flex w-5/6">
                        <p>Usuário atual: {nome}</p>
                        <div className="flex h-4/5 justify-center items-center gap-2">
                            <img src={Lure.src} alt="" className="h-20 rounded-3xl border-2 border-white"/>
                            <p>Lure-3S</p>
                        </div>
                    </div>
                    <div className="flex w-5/6 px-4 bg-white py-3 rounded-xl justify-center">
                        <div className="w-full flex justify-center items-center p-3 justify-around items-around">
                            <div className="w-1/4 flex flex-col bg-rose-50 text-rose-600 justify-center items-center border-4 border-rose-600 px-3 py-1.5 rounded-xl">
                                <ThermostatIcon fontSize="large"/>
                                <p className="text-2xl">{temp}°C</p>
                                <p className="text-md">Temperatura</p>
                            </div>
                            <div className="w-1/4 flex flex-col bg-blue-50 text-blue-600 justify-center items-center border-4 border-blue-600 px-3 py-1.5 rounded-xl">
                                <WaterDropIcon fontSize="large"/>
                                <p className="text-2xl">{umi}%</p>
                                <p className="text-md">Umidade</p>
                            </div>
                            <div className="w-1/4 flex flex-col bg-gray-200 text-gray-700 justify-center items-center border-4 border-gray-700 px-3 py-1.5 rounded-xl">
                                <LocalFireDepartmentIcon fontSize="large"/>
                                <p className="text-2xl">{fum}%</p>
                                <p className="text-md">Fumaça</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-5xl text-white text-center mb-1"><u>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Servo-Motor ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</u></h1>
                    <div className="flex w-5/6 justify-between items-center py-2">
                        <OffButton text="Desligar" type="button" onclick={Desligar} icon={<FlashOffRoundedIcon/>}/>
                        <EstadoServo/>
                        <OnButton text="Ligar" type="button" onclick={Ligar} icon={<FlashOnRoundedIcon/>}/> 
                    </div>
                </div>  
            </div>
        </div>
        </div>
    );
}