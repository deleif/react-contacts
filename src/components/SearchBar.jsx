const SearchBar = (props) => {
  const titleSearch = "Búsqueda";

  return (
    <div className="card centered">
      <h5>{titleSearch}</h5>
      <input type="text" value="Introduce un contacto" />
    </div>
  );
};

export default SearchBar;
