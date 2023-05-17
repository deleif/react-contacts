const ContactCard = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "60%", margin: "auto" }}>
        <ul className="list-group">
          <li className="list-group-item custom-list-item">
            <div className="grid grid-cols-4">
              <span
                class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded text-green-600 bg-green-200 font-semi-bold
              uppercase last:mr-0 mr-1"
              >
                {props.name}
              </span>

              <button
                className="text-sm  bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded-sm ml-2"
                onClick={() => props.onShowDetail(props.id)}
              >
                Mostrar detalle
              </button>
              <button className="text-sm  bg-orange-500 hover:bg-orange-700 text-white  py-1 px-3 rounded ml-2">
                Editar
              </button>
              <button
                className="text-sm  bg-red-500 hover:bg-red-700 text-white  py-1 px-3 rounded ml-2"
                onClick={() => props.onDeleteContact(props.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
          {/*     {props.selectedContact && props.selectedContact.id === props.id && (
            <>
              <li className="list-group-item">{props.selectedContact.email}</li>
              <li className="list-group-item">{props.selectedContact.tel}</li>
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
