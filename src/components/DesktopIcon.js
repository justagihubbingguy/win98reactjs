import React, { useState } from 'react';
import './App.css';

const DesktopIcon = ({ name, onDoubleClick }) => {
  const [selected, setSelected] = useState(false);

  // Handle single click to select the icon
  const handleClick = () => {
    setSelected(true);
  };

  // Handle double click to perform an action (like opening the program)
  const handleDoubleClick = () => {
    onDoubleClick(name);
  };

  return (
    <div
      className={`icon ${selected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="icon-text">{name}</div>
    </div>
  );
};

export default DesktopIcon;
