import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="divmenu">
      <ul className="ulmenu">
        <li className="limenu">
          <Link to="/">Inicio</Link>
        </li>
        <li className="limenu">
          <Link to="contactos">Contactos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
