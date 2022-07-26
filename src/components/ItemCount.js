import React from 'react'

function ItemCount({ stock, initial, onAdd }) {
    return (

        <div className='ItemCount'> 
        <><h5>Producto 1</h5>
        <button>-</button><input type="number" stock="10" initial="1"></input><button>+</button>
        <button>Comprar</button></>
        </div>

    )
}


export default ItemCount