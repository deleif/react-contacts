import React, { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";
import AddContactContext from "./context/AddContactContext";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Pilla los datos de la API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Convierte los datos en el formato deseado
        setContacts(
          data.map((contact) => ({
            id: contact.id,
            name: contact.name,
            tel: contact.phone,
            email: contact.email,
          }))
        );
      });
  }, []);

  const titleApp = "Agenda de contactos";
  const titleSearch = "Introduce un contacto";

  // Para mostrar contactos
  const handleAddContact = (newContact) => {
    // Agrega el nuevo contacto a la lista de contactos
    setContacts([...contacts, newContact]);
  };

  // Para borrar un contacto
  const handleDeleteContact = (id) => {
    // Filtra la lista de contactos y elimina el contacto con el ID especificado
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  // Muestra en un alert el detalle de un contacto
  const handleShowDetail = (id) => {
    // Busca el contacto en la lista de contactos con el ID especificado
    const contact = contacts.find((c) => c.id === id);
    // Muestra el detalle del contacto en un alert
    alert(JSON.stringify(contact, null, 2));
  };

  return (
    <div>
      <h1>{titleApp}</h1>

      {/* Contexto de la función handleAddContact */}
      <AddContactContext.Provider value={handleAddContact}>
        {/* Renderiza el componente ContactList */}
        <ContactList
          contacts={contacts}
          onShowDetail={handleShowDetail}
          onDeleteContact={handleDeleteContact}
        />
        <hr />

        <h2>{titleSearch}</h2>

        {/* Renderiza el componente SearchBar */}
        <SearchBar />
        <hr />

        {/* Renderiza el componente AddContact */}
        <AddContact />
      </AddContactContext.Provider>
    </div>
  );
};

export default App;
