import React, { useEffect, useState } from 'react'
import './index.css'
import { useFetchObtenerJugadores } from './hooks/useFetchObtenerJugadores'
import { Items } from './Items'
import logoBingoPaos from './assets/LogoBingoPao2.svg'
import logoRanking from './assets/Ranking2.svg'
import logoBingoEpic from './assets/BingoEpic.svg'
import html2canvas from "html2canvas";

export const BingoPaos = () => {

    const [fecha, setFecha] = useState("1ra. Transmision 03/04")

    const [windowWith, setwindowWith] = useState(window.innerWidth)
    console.log("este es el ancho",windowWith)

    const { jugadores, isLoading } = useFetchObtenerJugadores()

    const miArray = [];
    for (let i = 1; i <= jugadores.length; i++) {
        miArray.push(i);
    }

    const convertirImagen = async () => {
        try {
            const canvas = await html2canvas(document.getElementById("convertimage"),
                { scale: 2, ignoreElements: (element) => element.classList.contains("div-boton"), });
            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "mi_imagen.png";
            link.click();
        } catch (error) {
            console.error("Error al capturar la imagen:", error);
        }

    }
    const inputChange = ({ target }) => {
        setFecha(target.value);
    }

    useEffect(() => {
        const handleResize = () => {
            setwindowWith(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpia el event listener en la desmontada del componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <div className="fondo-gradiente"></div>
            <div id='convertimage' className='contenedor'>
                <div className='titulo'>
                    <img src={logoBingoEpic} alt="Logo Bingo Epic" />
                    <img src={logoBingoPaos} alt="Logo Paos" />
                </div>
                <div className='subtitulo'>
                    <img src={logoRanking} alt="Ranking" />
                    <input onChange={inputChange} className='input_fecha' value={fecha}></input>
                </div>
                <div className='header'>
                    <div className='header-celda'>
                        <h3 style={{ color: 'white' }}>Psto</h3>
                        <h3 style={{ color: 'white' }}>Nombre</h3>
                        <h3 style={{ color: 'white' }}>Ptos</h3>
                    </div>
                    {
                    windowWith <= 650 ? ( <div></div>  ) : <> 
                    <div className='header-celda'>
                       <h3 style={{ color: 'white' }}>Psto</h3>
                       <h3 style={{ color: 'white' }}>Nombre</h3>
                       <h3 style={{ color: 'white' }}>Ptos</h3>
                   </div>
                   <div className='header-celda'>
                       <h3 style={{ color: 'white' }}>Psto</h3>
                       <h3 style={{ color: 'white' }}>Nombre</h3>
                       <h3 style={{ color: 'white' }}>Ptos</h3>
                   </div>
                   </>
                    }

                </div>
                {
                    isLoading && (<h2 style={{ color: 'white' }}>Cargando....</h2>)
                }
                <div className='celdas'>
                    {
                        jugadores.map((jugador, index) => (
                            <Items
                                key={jugador.ide_jug}
                                {...jugador}
                                numeracion={miArray[index]}
                            >
                            </Items>
                        ))
                    }

                </div>
                <div id='div-boton' className='div-boton'>
                    <button className='boton' onClick={convertirImagen}>Descargar Ranking</button>
                </div>
            </div>
        </>
    )
}
