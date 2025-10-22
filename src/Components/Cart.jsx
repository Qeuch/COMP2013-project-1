import CartCard from "./CartCard";


export default function Cart({cart, handleAddCartQuantity, handleRemoveCartQuantity, handleRemoveCartItem, emptyCart, getTotal, CartTotal}) {
    


    return (
    <div>
        <h2>Cart items: {cart.length}</h2>
        {/* If cart is empty display message, else do nothing */}
        <p>{cart.length > 0 ? null : "No items in cart"}</p>

        {cart.map((product) => 
        (<CartCard 
            key={product.id} 
            {...product}
            handleAddCartQuantity = {handleAddCartQuantity}
            handleRemoveCartQuantity = {handleRemoveCartQuantity}
            handleRemoveCartItem = {handleRemoveCartItem}
            getTotal = {getTotal}
        />
    ))}
    <div className="ButtonContainer">
        <button className="ClearCartButton" onClick={emptyCart}>Empty Cart</button>
        <button id="BuyButton">Checkout: ${CartTotal}</button>
    </div>
    </div>
    );
}