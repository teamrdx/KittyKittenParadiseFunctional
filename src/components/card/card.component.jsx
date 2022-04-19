import "./card.style.css";

const Card = ({ monster: { name, email } }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${name}?set=set4&size=180x180`}
        alt={`kitty kitten name:${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
