import React from 'react'
import { useState} from 'react' 
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import Products from '../../utils/products.mocks'

// import ItemProduct from '../itemProduct/itemProduct'

function ItemListContainer({ section }) {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        }, 2000)
    })


    getProducts
        .then((res) => {
            //console.log("Productos: ", res)
            setListProducts(res)
        })
        .catch((error) => {
            console.log("la llama fallo")
        })
        .finally(() => {
            //setSpinner(false) 
        })
} 




    //return(
   //     <div className='list-products'>
   //         <h2>{}</h2>
  //          <ItemList dataProducts={Products}/>
  //      </div>
  //  )


export default ItemListContainer