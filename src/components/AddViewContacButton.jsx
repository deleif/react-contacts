import { Routes, Route, Link } from "react-router-dom";
import AddContact from "./AddContact";

const AddContactButton = () => {
  return (
    <div className="centered"> 
      <Link to="/addcontactos" className="button">Añadir contacto</Link>
    </div>
  );
};

export default AddContactButton;
