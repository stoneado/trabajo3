

const itemProduct = (title,price) => {
    return (
        <div className="item-product">
            <img></img>
            <p>{title}</p>
            <span>${price}</span>
            <button>Comprar</button>
        </div>


    )
}


export default itemProduct