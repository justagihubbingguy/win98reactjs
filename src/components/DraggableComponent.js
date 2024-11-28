import React from 'react';
import '98.css'; // Import the retro Windows 98 CSS
import Draggable from 'react-draggable';

const DraggableComponent = () => {
  return (
    <Draggable handle=".title-bar">
      <div className="window" style={{ width: '300px', height: '200px', overflow : 'auto' }}>
        <div className="title-bar">
          <div className="title-bar-text">My Windows 98 Retro styled window </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" ></button>
          </div>
        </div>
        <div className="window-body">
          <p>Welcome to my Windows 98 retro-styled window!</p>
          <p>Drag me around!</p>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableComponent;