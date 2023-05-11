const ContactCard = (props) => {

  return (
    <div>
      <div className="card" style={{ width: "50%", margin: "auto" }}>
        <ul className="list-group">
          <li className="list-group-item active">
            {props.id} | {props.name}
          </li>
          <li className="list-group-item">{props.email}</li>
          <li className="list-group-item">{props.tel}</li>
          <button onClick={() => props.onShowDetail(props.id)}>
            Mostrar detalle
          </button>
          <button onClick={() => props.onDeleteContact(props.id)}>Eliminar</button>
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
