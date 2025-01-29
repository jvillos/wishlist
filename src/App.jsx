import { useState } from "react";
import "./App.css";
import WishImput from "./WishImput/WishImput";
import Wishlist from "./Wishlist";
import GeneralButton from "./components/GeneralButton";

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

  const onNewWishHandler = (NewWish) => {
    //function to be used bellow
    setWishes((currentWishes) => [...currentWishes, NewWish]); //destructuring the array and adding the newWish
  };

  return (
    <>
      <div className="app">
        <h1>My wishlist</h1>
        <WishImput onNewWish={onNewWishHandler} />
        <Wishlist wishes={wishes} setWishes={setWishes} />
        <GeneralButton
          actionFunction={() =>
            setWishes(wishes.filter((wish) => !wish.completed))
          }
          displayText={"Archive wishes"}
        />
      </div>
    </>
  );
}

export default App; //this is a MUST DO
