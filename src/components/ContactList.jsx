import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const contacts = props.contacts;
    return (
   
          contacts.map((contact, index) =>(
            <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}

          />
          )     
          ))
  }
  
  export default ContactList
  