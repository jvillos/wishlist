import { useState } from "react";
import "./App.css";

const wishes = [
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
  const name = "Juan Villoslada";
  //inside the li, we need to use the template literals. you have to return an empty string to return something
  return (
    <>
      <div className="app">
        <h1>My wishlist</h1>
        <fieldset className="wish-input">
          <legend>New Wish</legend>
          <input type="text" placeholder="My new wish" />
        </fieldset>
        <ul className="wish-list">
          {wishes.map((wish) => (
            <li
              key={wish.id}
              className={`wish-list__item
              ${wish.completed ? "wish-list__item--done" : ""}
              `}
            >
              <input id={wish.id} type="checkbox" checked={wish.completed} />
              <label htmlFor={wish.id}>{wish.text}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
