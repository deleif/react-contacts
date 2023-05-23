import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasks/tasksSlice";

import "./App.css";

import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import SearchBar from "./components/SearchBar";
import AddContactButton from "./components/AddViewContacButton";
import AddContact from "./components/AddContact";
import AddContactContext from "./context/AddContactContext";
import Header from "./components/Header";
import NoMatch from "./components/NoMatch";
import Menu from "./components/Menu";
import Home from "./components/Home";
import TasksList from "./components/TasksList";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

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

  const store = configureStore({
    reducer: {
      tasks: tasksReducer,
    },
  });

  const handleAddContact = (newContact) => {
    console.log("hola");
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleShowDetail = (id) => {
    const contact = contacts.find((c) => c.id === id);
    setSelectedContact(contact);
    navigate(`/contactos/${id}`);
  };

  return (
    <Provider store={store}>
      <div>
        <Header titleApp={titleApp} />
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addcontactos"
            element={
              <AddContactContext.Provider value={handleAddContact}>
                <AddContact />
              </AddContactContext.Provider>
            }
          />
          <Route
            path="/contactos"
            element={
              <AddContactContext.Provider value={handleAddContact}>
                <ContactList
                  contacts={contacts}
                  selectedContact={selectedContact}
                  onShowDetail={handleShowDetail}
                  onDeleteContact={handleDeleteContact}
                />
                <hr />
                <SearchBar />
                <hr />
                <AddContactButton />
              </AddContactContext.Provider>
            }
          />
          <Route
            path="/contactos/:id"
            element={<ContactDetail selectedContact={selectedContact} />}
          />
          <Route path="/tareas" element={<TasksList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
