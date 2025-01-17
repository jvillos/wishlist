import React, { useState } from "react";

function WishImput({ onNewWish }) {
  //this needs to be destructured
  const [newWish, setNewWish] = useState(""); //we alaso need a state for the content of the input

  const handleKeyUp = (e) => {
    if (e.key == "Enter" && newWish !== "") {
      const newWishObject = {
        id: Date.now, //this to use a kind of random number
        text: newWish,
        completed: false,
      };
      onNewWish(newWishObject);
      setNewWish(""); //this erases the content of the input
    }
  };

  return (
    <fieldset className="wish-input">
      <legend>New Wish</legend>
      <input
        type="text"
        placeholder="My new wish"
        value={newWish}
        onChange={(e) => setNewWish(e.target.value)} //the target.value access the value of the event it's targeting
        onKeyUp={handleKeyUp}
      />
    </fieldset>
  );
}

export default WishImput;
