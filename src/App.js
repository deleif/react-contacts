import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  //pilla los datos de la api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
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

  //para mostrar contactos
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  //para borrar 1 contacto
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  //muestra en un alert 1 contacto
  const handleShowDetail = (id) => {
    const contact = contacts.find((c) => c.id === id);
    alert(JSON.stringify(contact, null, 2));
  };

  return (
    <div>
      <h1>{titleApp}</h1>

      <ContactList
        contacts={contacts}
        onShowDetail={handleShowDetail}
        onDeleteContact={handleDeleteContact}
      />
      <hr />

      <h2>{titleSearch}</h2>

      <SearchBar />
      <hr />

      <AddContact onAddContact={handleAddContact} />
    </div>
  );
};

export default App;
