import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ productName, brand, image, price, productQuantity, handleAddToQuantity, handleRemoveQuantity, handleAddToCart }) {

    return (
        <div className="ProductCard">
            <h3>{productName}</h3>
            <img src={image} alt="" />
            <p><b>{brand}</b></p>
            <QuantityCounter 
                quantity = {productQuantity.quantity}
                add = {() => handleAddToQuantity(productQuantity.id)}
                remove = {() => handleRemoveQuantity(productQuantity.id)}
            />
            <h3>{price}</h3>
            <button onClick={() => handleAddToCart(productQuantity)}>Add to Cart</button>
        </div>
    )
}