import React, { useState, useContext } from "react";
import AddContactContext from "../context/AddContactContext";

const AddContactForm = () => {
  // Estado local para los campos del formulario
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  // Obtener la función handleAddContact del contexto
  const handleAddContact = useContext(AddContactContext);

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un nuevo objeto de contacto con los datos del formulario
    const newContact = {
      id,
      name,
      email,
      tel,
    };

    // Llamar a la función handleAddContact del contexto para agregar el nuevo contacto
    handleAddContact(newContact);

    // Limpiar los campos del formulario
    setId("");
    setName("");
    setEmail("");
    setTel("");
  };

  return (
    <div className="card" style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddContactForm;
