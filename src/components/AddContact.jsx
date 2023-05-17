import React, { useContext } from "react";
import AddContactForm from "./AddContactForm";
import AddContactContext from "../context/AddContactContext";

const AddContact = () => {
    // Obtener la función handleAddContact del contexto
  const handleAddContact = useContext(AddContactContext);

  return (
    <div >
      <h4 className="centered">Añadir contacto</h4>
      <div className="centered">
      <AddContactForm onAddContact={handleAddContact} />
      </div>
    </div>
  );
};

export default AddContact;
