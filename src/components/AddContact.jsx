import AddContactForm from "./AddContactForm";

const AddContact = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      tel: form.elements.tel.value,
      email: form.elements.email.value,
    };
    props.onAddContact(newContact);
    form.reset();
  };

  return (
    <div>
      <h2>Añadir contacto</h2>
      <AddContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddContact;
