import React from 'react'
import ItemProduct from '../itemProduct/itemProduct'

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList