import React from 'react'
import { useState} from 'react' 
function ItemCount() {
    // Aca estoy seteando manualmente el stock lo correcto es recibirlo por props.
    // Lo dejo asi a modo de darte un ejemplo.
    const stock = 5

    // initial -> initial seria el valor inicial que queres que tenga el contador, 
    // no es obligatorio ya que nosotros lo vamos a indicar en la siguiente linea ↓
    const [count, setCount] = useState(1)

    //Funcion para sumar 1 el contador
    const onAdd = () => {
        
        // Condicional para que el contador no sobrepase al stock, en este caso 5
        if(count < stock){
            setCount(count + 1)
        }
    }

    //Funcion para restar 1 el contador
    const onDiscount = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    }


    return (

        <div className='ItemCount'> 
        <h5>Producto 1</h5>
        <button onClick={onDiscount}>-</button>    {count}      <button onClick={onAdd}>+</button>
        <button>Comprar</button>
        </div>

    )
}


export default ItemCount