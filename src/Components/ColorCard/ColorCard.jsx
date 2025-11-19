//DIRECCION DE LA PAGINA: https://colorhunt.co/

/* 
Crear un componente llamado ColorCard que reciba las props:
- likes: number, cantidad de likes
- date: string, la fecha de subida de esa tarjeta, EJ: "yesterday", '13 hours'
- colors: array string, los 4 colores que tendra la tarjeta de color,EJ: ['#708993','#139ed5ff', '#938970ff', '#937090ff']

Ejemplo de uso:

<ColorCard 
    likes={63} 
    date='Yesterday' 
    colors={[
    '#708993',
    '#139ed5ff', 
    '#938970ff', 
    '#937090ff'
    ]}
/>

No hace falta fidelidad visual, pero si se deben ver los colores de fondo
*/

import './ColorCard.css'
import React from 'react'

export default function ColorCard(propiedades) {
    return (
        <div className='color-card'>
            <div className='color-card__pallette-container'>
                <div className='color-card__color-value' style={
                    {
                        backgroundColor: propiedades.colors[0]
                    }
                }></div>
                <div className='color-card__color-value' style={
                    {
                        backgroundColor: propiedades.colors[1]
                    }
                }></div>
                <div className='color-card__color-value' style={
                    {
                        backgroundColor: propiedades.colors[2]
                    }
                }></div>
                <div className='color-card__color-value' style={
                    {
                        backgroundColor: propiedades.colors[3]
                    }
                }></div>
            </div>
            <div className='color-card__bottom-container'>
                <button className='color-card__likes'>{propiedades.likes} likes</button>
                <span className='color-card__date'>{propiedades.date}</span>
            </div>
        </div>
    )
}
