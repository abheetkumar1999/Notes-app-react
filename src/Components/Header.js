import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <span style={{ color: "#308d46" }}>React</span>
      </h1>
      <button
        onClick={() => handleToggleDarkMode((prevState) => !prevState)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
