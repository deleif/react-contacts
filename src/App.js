import React, { useState, useEffect } from "react";
import "./App.css";

/*componentes */
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";
import AddContactContext from "./context/AddContactContext";
import Header from "./components/Header";


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

      {/* Contexto de la función handleAddContact */}
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
        <AddContact />
      </AddContactContext.Provider>
    </div>
  );
};

export default App;
