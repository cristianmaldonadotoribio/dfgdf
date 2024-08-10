import React, { useEffect } from 'react'

export const Items = ({ ide_jug, nom_jug, total, numeracion }) => {
    
    return (
        <> {
            
            total >= 1 && numeracion < 76 ? (

            <div className='contenedor-item'>
                <div style={numeracion <= 5 ? { backgroundColor: '#78FF00' } : numeracion <= 10 ? { backgroundColor: '#F8FE78' } : {}} className='item-celda-id'>
                    <h3>{numeracion}</h3>
                </div>
                <div className='item-celda-nombre'>
                    <h3>{nom_jug}</h3>
                </div>
                <div className='item-celda-total'>
                    <h3>{total}</h3>
                </div>
            </div>
            ): (<div style={{display:'none'}}> </div>)
        }

        </>

    )
}
