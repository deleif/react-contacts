import { useState } from "react";
import "./App.css";

import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Enrique Aja",
      tel: "621123456",
      email: "enrique@gmail.com",
    },
    {
      name: "José Luis Laguía",
      tel: "6789412623",
      email: "jl@gmail.com",
    },
    {
      name: "Álvaro Pino",
      tel: "612852963",
      email: "alvaro@gmail.com",
    },
  ]);

  const titleApp = "Agenda de contactos";
  const titleSearch = "Introduce un contacto";

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>{titleApp}</h1>

      <ContactList contacts={contacts} />
      <hr />

      <h2>{titleSearch}</h2>

      <SearchBar />
      <hr />

      <AddContact onAddContact={handleAddContact} />
    </div>
  );
};

export default App;
