import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts, selectedContact, onShowDetail, onDeleteContact } = props;

  return contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      id={contact.id}
      name={contact.name}
      selectedContact={selectedContact}
      onShowDetail={onShowDetail}
      onDeleteContact={onDeleteContact}
    />
  ));
};

export default ContactList;
