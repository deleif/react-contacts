import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = ({ selectedContact }) => {
  

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
                <Link to="/contactos"><i className="fa fa-arrow-circle-left" aria-hidden="true" style={{ fontSize: "2rem" }}></i></Link>
            </div>
        </div>

    );
};

export default ContactDetail;
