//Si usamos {} dentro del JSX (html) estamos interpolando con logica de JS
//Muy parecido template string `Hola ${nombre}`
import React from 'react'
import './ProductCard.css'


function ProductCard(propiedades) {
    console.log(propiedades)
    return (
        <div>
            <h3 className="product-card__title">
                {propiedades.name}
            </h3>
            <span>
                ${propiedades.price.toLocaleString('es-AR')}
            </span>
            <button 
                style={
                    {
                        backgroundColor: propiedades.bg_color
                    }
                }
            >
                Comprar
            </button>
        </div>
    )
}

export default ProductCard