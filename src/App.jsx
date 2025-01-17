import { useState } from "react";
import "./App.css";
import WishImput from "./WishImput/WishImput";
import Wishlist from "./Wishlist/Wishlist";

const initialWishes = [
  {
    id: 0,
    text: "travel to the moon",
    completed: true,
  },
  {
    id: 1,
    text: "get a job",
    completed: false,
  },
  {
    id: 2,
    text: "die",
    completed: true,
  },
  {
    id: 3,
    text: "repeat",
    completed: false,
  },
];
function App() {
  //inside the li, we need to use the template literals. you have to return an empty string to return something

  const [wishes, setWishes] = useState(initialWishes);

  const onNewWish = (NewWish) => {
    //function to be used bellow
    setWishes((currentWishes) => [...currentWishes, NewWish]); //destructuring the array and adding the newWish
  };

  return (
    <>
      <div className="app">
        <h1>My wishlist</h1>
        <WishImput onNewWish={onNewWish} />
        <Wishlist wishes={wishes} />
      </div>
    </>
  );
}

export default App; //this is a MUST DO
