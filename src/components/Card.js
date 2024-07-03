import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ nome, imagem, email }) => {
  const navigate = useNavigate();

  const viewDetails = () => {
    navigate(`/details/${nome}`); // Corrigido para `/details/${nome}`
  };

  return (
    <div className="cardContainer">
      <img src={imagem} alt={nome} />
      <h1>{nome}</h1>
      <p>{email}</p>
      <button onClick={viewDetails}>Ver detalhes de {nome}</button>
    </div>
  );
};

export default Card;
