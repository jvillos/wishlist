import React from "react";
import WishlistItem from "./Wishlist/WishlistItem";

function Wishlist({ wishes, setWishes }) {
  const onCompletedChangeHandler = (checked, i) => {
    const tempWishes = [...wishes];
    tempWishes[i].completed = checked;
    setWishes(tempWishes);
  };
  //it is good practice to write the key on the component, even though it would not be necessary
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <WishlistItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => onCompletedChangeHandler(checked, i)}
        />
      ))}
    </ul>
  );
}

export default Wishlist;
