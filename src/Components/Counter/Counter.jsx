import React, {  useState } from 'react'

const Counter = () => {

    //Estados
    /* 
    Los estados son valores reactivos, ya que cuando los cambiamos nuestro componente reacciona a este cambio lo muestra el nuevo valor
    */
    

    //HOOKS
    //Los hooks solo pueden ser invocados dentro de un componente

    //Hook (funcion de react) useState 
    //useState espera recibir el valor inicial de tu estado
    //retornara un array de 2 valores, donde el primer valor es el valor del estado y el segundo valor es una funcion de cambio
    //El valor del estado es inmutable, quiere decir que no podemos reasignar valores de estado
    //Para poder cambiar el valor del estado podemos usar la funcion de cambio (El Setter)
    //(IMPORTANTE): Si llamo al setter el componente reaccionara y mostrara el nuevo valor en pantalla

    /* 
    EN VEZ DE HACER ESTO 
    const counter_state = useState(0)
    const counter_state_value = counter_state[0]
    const counterStateSetter = counter_state[1] 
    */
    //Desestructuracion de arrays
    const [counter_state_value, counterStateSetter] = useState(0)

    const handleIncrement = () => {

        counterStateSetter(counter_state_value + 1)
    }

    const handleDecrement = () => {

        counterStateSetter(counter_state_value - 1)
    }



    return (
        <div>
            <button onClick={() => { alert('hola')}}>
                Click
            </button>
            <button onClick={handleDecrement}>-</button>
            <span>{counter_state_value}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter