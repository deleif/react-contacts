import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = ({ selectedContact }) => {
    if (!selectedContact) {
        return <div>No hay contactos seleccionados</div>;
    }

    const { id, name, tel, email } = selectedContact;

    return (
        <div >
            <div className="card">
                <h3>Detalles del contacto</h3>
                <hr />
                <p>ID: {id}</p>
               
                <p>Nombre: {name}</p>
                <p>Teléfono: {tel}</p>
                <p>Email: {email}</p>
                <Link to="/contactos">Volver</Link>
            </div>
        </div>

    );
};

export default ContactDetail;
