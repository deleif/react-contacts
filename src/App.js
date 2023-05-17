import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"

import "./App.css";

/*componentes */
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContactButton from "./components/AddViewContacButton";
import AddContact from "./components/AddContact";
import AddContactContext from "./context/AddContactContext";
import Header from "./components/Header";
import NoMatch from "./components/NoMatch"
import Menu from "./components/Menu"
import Home from "./components/Home"



const App = () => {
  const [contacts, setContacts] = useState([]);

  // estado para almacenar el contacto seleccionado
  const [selectedContact, setSelectedContact] = useState(null);

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
    //alert(JSON.stringify(contact, null, 2));
    setSelectedContact(contact);

  };

  return (
    <div>
      <Header titleApp={titleApp} />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcontactos" element={<AddContact />} />

        <Route path="contactos" element={
          <AddContactContext.Provider value={handleAddContact}>
            {/* Renderiza el componente ContactList */}
            <ContactList
              contacts={contacts}
              selectedContact={selectedContact}
              onShowDetail={handleShowDetail}
              onDeleteContact={handleDeleteContact}
            />
            <hr />

            {/* Renderiza el componente SearchBar */}
            <SearchBar />
            <hr />

            {/* Renderiza el componente AddContact */}
            <AddContactButton />
          </AddContactContext.Provider>
        } />

        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/* Contexto de la función handleAddContact */}

    </div>
  );
};

export default App;
