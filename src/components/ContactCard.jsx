const ContactCard = (props) => {
  return (
    <div>
      <div class="card" style={{ width: "50%", margin: "auto" }}>
        <ul class="list-group">
          <li class="list-group-item active">{props.name}</li>
          <li class="list-group-item">{props.tel}</li>
          <li class="list-group-item">{props.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactCard;
