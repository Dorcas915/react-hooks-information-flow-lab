
import React from "react";

function Header({ onDarkModeClick }) {
  function handleClick() {
    if (onDarkModeClick) {
      onDarkModeClick();
    }
  }

  return (
    <header>
      <button onClick={handleClick}>Dark Mode</button>
    </header>
  );
}

export default Header;