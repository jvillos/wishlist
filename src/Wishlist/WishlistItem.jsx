import React, { useEffect, useState } from "react";

function WishlistItem({ wish, onCompletedChange }) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Component created/executed: " + wish.text);
    let ageInterval;
    if (!wish.completed) {
      //if the wish is not completed we start a timer that is adding 1 each second to the age
      ageInterval = setInterval(() => {
        setAge((currentAge) => currentAge + 1);
      }, 1000);
    } else {
      setAge(0);
      clearInterval(ageInterval);
    }
  }, [wish.completed]);

  return (
    <li
      className={`wish-list__item
                ${wish.completed ? "wish-list__item--done" : ""}
                ${age >= 5 && age < 10 ? "wish-list__item--warn" : ""}
                ${age >= 10 ? "wish-list__item--danger" : ""}
                `}
    >
      <input
        id={wish.id}
        type="checkbox"
        checked={wish.completed}
        onChange={(e) => onCompletedChange(e.target.checked)}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}

export default WishlistItem;
