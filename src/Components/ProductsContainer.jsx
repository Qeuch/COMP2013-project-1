import ProductCard from "./ProductCard";

export default function ProductsContainer({data, productQuantity, setProductQuantity, handleAddToQuantity, handleRemoveQuantity, handleAddToCart }) {


    return (
        <div className="ProductsContainer">
            {data.map((product) => (
                <ProductCard 
                key = {product.id}
                {...product}
                productQuantity = {productQuantity.find((prod) => prod.id == product.id)}
                setProductQuantity = {setProductQuantity}
                handleAddToQuantity = {handleAddToQuantity}
                handleRemoveQuantity = {handleRemoveQuantity}
                handleAddToCart = {handleAddToCart}
                />
            ))}
        </div>
    )
}