import React, { useEffect, useState } from 'react'
import { GetJugadoresAll } from './GetJugadoresAll';

export const useFetchObtenerJugadores = () => {
    const [jugadores, setJugadores] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);
    
    const getJugadores = async ()=>{
        const newJugadores = await GetJugadoresAll();
        setJugadores(newJugadores);
        setIsLoading(false);
    }

    useEffect(()=>{
        getJugadores();
    }, [])

    return {
        jugadores,
        isLoading,
    }
}
