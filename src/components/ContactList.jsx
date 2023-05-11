
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const contacts = props.contacts;
 
  return contacts.map((contact, index) => (
    <ContactCard
      id={contact.id}
      name={contact.name}
      email={contact.email}
      tel={contact.tel}
      onShowDetail={props.onShowDetail} //muestra 1 contacto
      onDeleteContact={props.onDeleteContact} //elimina 1 contacto
    />
  ));
};

export default ContactList;