import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
    const lista_productos = [
        {
            name: 'tv samsung 32',
            price: 4000,
            id: 1
        },
        {
            name: 'tv samsung 42',
            price: 8000,
            id: 2
        },
        {
            name: 'tv samsung 52',
            price: 12000,
            id: 3
        }
    ]

    const lista_productos_JSX = lista_productos.map(
        (producto) => {
            return (
                <ProductCard
                    key={producto.id}
                    name={producto.name}
                    price={producto.price}
                    bg_color={'#938970ff'}
                />
            )
        }
    )
  
    return (
        <div>
            {lista_productos_JSX}
        </div>
    )
}

export default ProductList