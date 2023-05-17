import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="contactos">Contactos</Link></li>
            </ul>
        </div>
    )
}
export default Menu