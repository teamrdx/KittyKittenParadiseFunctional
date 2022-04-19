import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [finalMonsters, setFinalMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  //Performance optimization so that it only renders if monsters or searchField changes
  useEffect(() => {
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFinalMonsters(filteredMonster);
  }, [searchField, monsters]);

  //Code Optimization - Performance
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="tittle">Kitty Kitten Paradise</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        className="search-box"
        placeholder="Search Cats"
      />
      <header className="header">
        <CardList monsters={finalMonsters} />
      </header>
    </div>
  );
};

export default App;
