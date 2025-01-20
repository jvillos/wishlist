import React from "react";
import WishlistItem from "./WishlistItem";

function Wishlist({ wishes }) {
  //it is good practice to write the key on the component, even though it would not be necessary
  return (
    <ul className="wish-list">
      {wishes.map((wish) => (
        <WishlistItem key={wish.id} wish={wish} />
      ))}
    </ul>
  );
}

export default Wishlist;
