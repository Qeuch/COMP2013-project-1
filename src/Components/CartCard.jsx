import QuantityCounter from "./QuantityCounter";

export default function CartCard({id, productName, image, quantity, price, handleAddCartQuantity, handleRemoveCartQuantity, handleRemoveCartItem, getTotal}) {

    return (
        <div  className="CartCard">
            <div className="CartCardInfo">
                <img src={image} alt="" />
                <p>{productName}</p>
                <p>{price}</p>
                <QuantityCounter 
                quantity = {quantity}
                add = {() => handleAddCartQuantity(id)}
                remove = {() => handleRemoveCartQuantity(id)}
                />
            </div>
            <div className="CartCardInfo">
                <h3>Total: ${getTotal(quantity, price)}</h3>
                <button className="RemoveButton" onClick={() => handleRemoveCartItem(id)}>Remove</button>
            </div>
        </div>
    )
}