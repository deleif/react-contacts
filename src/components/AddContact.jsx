import React, { useContext } from "react";
import AddContactForm from "./AddContactForm";
import AddContactContext from "../context/AddContactContext";

const AddContact = () => {
    // Obtener la función handleAddContact del contexto
  const handleAddContact = useContext(AddContactContext);

  return (
    <div>
      <h2>Añadir contacto</h2>
      <AddContactForm onAddContact={handleAddContact} />
    </div>
  );
};

export default AddContact;
