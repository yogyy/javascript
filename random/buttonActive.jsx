import React, { useState } from "react";
import "./style.css";

function Button({ id, title, onClick, isSelected }) {
  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      className={isSelected ? "active" : ""}
    >
      {title}
    </button>
  );
}

export function App(props) {
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const handleButtonClick = (event) => {
    setSelectedButtonId(event.target.id);
  };
  return (
    <div>
      <Button
        id="button1"
        title="Button 1"
        onClick={handleButtonClick}
        isSelected={selectedButtonId === "button1"}
      />
      <Button
        id="button2"
        title="Button 2"
        onClick={handleButtonClick}
        isSelected={selectedButtonId === "button2"}
      />
    </div>
  );
}

// add style .active
