export default function QuantityCounter({quantity, add, remove}) {
    return (
        <div className="ProductQuantityDiv">
            <button onClick={remove}>-</button>
            <p>{quantity}</p>
            <button onClick={add}>+</button>
        </div>
    )
}