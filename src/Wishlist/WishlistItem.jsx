import React from "react";

function WishlistItem({ wish, onCompletedChange }) {
  return (
    <li
      key={wish.id}
      className={`wish-list__item
                ${wish.completed ? "wish-list__item--done" : ""}
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
