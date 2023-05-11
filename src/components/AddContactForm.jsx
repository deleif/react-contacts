const AddContactForm = (props) => {
  return (
    <div class="card" style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={props.onSubmit}>
      <label>
          id:
          <input type="text" name="id" />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="tel" name="tel" />
        </label>
        <br />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddContactForm;
