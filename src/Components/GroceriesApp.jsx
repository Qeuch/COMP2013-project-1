import { useState } from "react";
import Cart from "./Cart";
import ProductsContainer from "./ProductsContainer";
import NavBar from "./Navbar";




// For modifying quantities, all self explanatory
export default function GroceriesApp({ data }) {
    const [productQuantity, setProductQuantity] = useState(data.map((prod) => {
        return {
            id: prod.id,
            quantity: 0
        };
    }));

    const handleAddToQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productId) {
                return {...prod, quantity: prod.quantity + 1}
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        return;
    }

    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productId) {
                return {...prod, quantity: prod.quantity > 0 ? prod.quantity - 1 : prod.quantity = 0};
            }
            return prod;
        })
        setProductQuantity(newProductQuantity);
        return;
    }

    // for cart

    // state for the cart 
    const [cart, setCart] = useState([]);


    // adding to the cart from the products
    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id)
        const productInCart = cart.find((item) => item.id === productToAdd.id);

        if(productToAdd.quantity === 0){
            alert("Please add quantity before adding to cart")
            return;
        }

        // if item is NOT in the cart, simply add the item w/ selected quantities
        if(!productInCart) {
            setCart((prevCart) => {
                return [...prevCart, {...currentProduct, quantity: productToAdd.quantity}]
            })
        }

        // if item is IN the cart, add the quantity to the existing cart quantity
        if(productInCart) {
            setCart((prevCart) => {
                return prevCart.map((prod) => {
                    if(prod.id === productToAdd.id) {
                        return {...prod, quantity: prod.quantity + productToAdd.quantity}
                    }
                    return prod;
                })
            })
        }
    }

    function emptyCart() {
        setCart([]);
    }


    // for removing an entire item from the cart
    const handleRemoveCartItem = (productId) => {
        setCart((prevCart) => {
            const newCart = [];
            for (let i = 0; i < prevCart.length; i++) {
                if(prevCart[i].id != productId) {
                    newCart.push(prevCart[i]);
                }
            }
            return newCart;
        })
    }


    // increment cart item quantity
    const handleAddCartQuantity = (productId) => {
        setCart((prevCart) => {
            return prevCart.map((prod) => {
                if(prod.id === productId) {
                    return {...prod, quantity: prod.quantity + 1}
                }
                return prod;
            })
        })
    }

    // decrement cart item quantity
    const handleRemoveCartQuantity = (productId) => {
        setCart((prevCart) => {
            return prevCart.map((prod) => {
                if(prod.id === productId) {
                    return {...prod, quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity = 1}
                }
                return prod;
            })
        })
    }

    // here on is stuff to calculate the prices in the cart

    // function to remove the dollar sign from the price
    function cleanPrice(price) {
        let cleanedPrice = "";
        for (let i = 0; i < price.length; i++) {
            price[i] >= 0 && price[i] <= 9 || price[i] === "." ? cleanedPrice += price[i] : null;
        }
        return cleanedPrice;
    }


    // function to get total of a single item with quantities (only passed into getCartTotal)
    function getTotal(quantity, price) {
        let totalPrice = Number(cleanPrice(price));
        return totalPrice * quantity;
    }

    // function to get total of a single item with quantities for card's total display
    function getCardTotal(quantity, price) {
        return getTotal(quantity, price).toFixed(2);
    }


    // function to get the cart total
    function getCartTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += getTotal(cart[i].quantity, cart[i].price)
        }
        return total.toFixed(2);
    }

    // for navBar

    // sets the cart image for the navbar based on if the cart has stuff in it
    let cartImg = "";
    if (cart.length > 0) {
        cartImg = "src/assets/cart-full.png";
    } else {
        cartImg = "src/assets/cart-empty.png";
    }


    return (
        <>
            <NavBar cartImg = {cartImg}/>

            <div className="GroceriesApp-Container">
                <ProductsContainer 
                data = {data}
                productQuantity = {productQuantity}
                setProductQuantity = {setProductQuantity}
                handleAddToQuantity = {handleAddToQuantity}
                handleRemoveQuantity = {handleRemoveQuantity}
                handleAddToCart = {handleAddToCart}
                />

                <div className="CartContainer">
                    <Cart 
                    cart={cart}
                    handleAddCartQuantity = {handleAddCartQuantity}
                    handleRemoveCartQuantity = {handleRemoveCartQuantity}
                    handleRemoveCartItem = {handleRemoveCartItem}
                    emptyCart = {emptyCart}
                    getTotal = {getCardTotal}
                    CartTotal = {getCartTotal(cart)}
                    />
                </div>
            </div>
        </>
    )
}