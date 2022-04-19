import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-container">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
