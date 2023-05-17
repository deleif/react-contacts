import dbImg from "../assets/images/contactos.png";

const Header = ({ titleApp }) => {
  return (
    <div>
      <div className="poster">
        <img src={dbImg} alt="Contactos" width={50} />
        <h1>{titleApp}</h1>
      </div>
    </div>
  );
};

export default Header;
