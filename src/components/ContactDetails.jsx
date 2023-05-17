import React from "react";
import { useParams, Link } from "react-router-dom";

const ContactDetails = (props) => {
  const { id } = useParams();

  // Busca el contacto en la lista de contactos con el ID especificado
  const contact = props.selectedContact.find((c) => c.id === parseInt(id));

  if (!contact) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalles del contacto</h2>
      <div>
        <p>ID: {contact.id}</p>
        <p>Nombre: {contact.name}</p>
        <p>Correo electrónico: {contact.email}</p>
        <p>Teléfono: {contact.tel}</p>
      </div>
      <Link to="/contactos">Volver atrás</Link>
    </div>
  );
};

export default ContactDetails;
