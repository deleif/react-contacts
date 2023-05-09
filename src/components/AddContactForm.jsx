
const AddContactForm = (props) => {
    return (
        <form >
          <label>
            Correo electrónico:
            <input
              type="email"
              value=""       
            />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea
              value=""
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )
  }
  
  export default AddContactForm

