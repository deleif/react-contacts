const ContactCard = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "50%", margin: "auto" }}>
        <ul className="list-group">
          <li className="list-group-item active">
            {props.id} | {props.name}
          </li>
          {props.selectedContact && props.selectedContact.id === props.id && (
            <>
              <li className="list-group-item">{props.selectedContact.email}</li>
              <li className="list-group-item">{props.selectedContact.tel}</li>
            </>
          )}
          <li>
            <button
              className="buttonlistblue"
              onClick={() => props.onShowDetail(props.id)}
            >
              Mostrar detalle
            </button>
            <button
              className="buttonlistred"
              onClick={() => props.onDeleteContact(props.id)}
            >
              Eliminar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
