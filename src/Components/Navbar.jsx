
export default function NavBar({cartImg}) {

    return (
        <div className="NavBar">
            <div className="NavDiv NavUser">
                <h3>Hello, username</h3>
            </div>

            <div className="NavDiv NavTitle">
                <h2>Groceries App 🍎</h2>
            </div>

            <div className="NavDiv NavCart">
                <img src={cartImg} alt="" /> 
            </div>
        </div>
    )
}