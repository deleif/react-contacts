import "./App.css";

//importa la al hijo
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";

const App = () => {
  // Initialize data

  //inicializa título
  const titleApp = "Agenda de contactos";
  const titleSearch = "Introduce un contacto";

  //inicializa listado
  const contacts = [
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
  ];

  //genera el código jsx
  return (
    <div>
      <h1>{titleApp}</h1>

      <ContactList contacts={contacts} />
      <hr></hr>
      <h2>{titleSearch}</h2>
      <SearchBar SearchBar />
      <hr></hr>

      <AddContact AddContact />
    </div>
  );
};

export default App;
