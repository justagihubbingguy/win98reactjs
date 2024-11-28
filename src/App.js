import React from 'react';
import DraggableComponent from './components/DraggableComponent';
import clipartKey from './ClipartKey_702821.png';
import './App.css';
import  { useState, useEffect, useRef } from 'react';
import Mycom from "./img/MyComputer-removebg-preview.png"
import FileExplorer from './components/FileExplorer';

function App() {
  const sayHello = () => {
    window.alert("سلام");
  };
  
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const openExplorerWindow = () => {
    setIsExplorerOpen(true);
  };

  const closeExplorerWindow = () => {
    setIsExplorerOpen(false);
  };
  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };
  const handleClickOutside = (event) => {
    if (appRef.current && !appRef.current.contains(event.target)) {
      setActiveIcon(null); // Reset active icon if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const [bgImage, setBgImage] = useState("url('your-image-url.jpg')");

  const changeBackground = () => {
    setBgImage("url('windows-95-sky-jpg')");  // Update the background image
  };
  const setBACK = () => {
    document.getElementById('ida').style.background = '#247bad';
    document.getElementById('ida').style.outline = 'dotted 1px';
  };
  const appRef = useRef(null);

  return (
    <div style={{ backgroundImage: bgImage, backgroundSize: "cover", backgroundPosition: "center center", height: "100vh",}}>
      <div className="icon" onDoubleClick={openExplorerWindow}>
        <img src={Mycom} alt="My Computer" style={{ width: 40, height: 40 }} onClick={setBACK} id='change'/>
        <hr style={{visibility:'hidden'}}></hr>
        <text id='ida' style={{background:'#a0d4f2',}}>My Computer</text> <div className='icon folder'></div>
      </div>
      {isExplorerOpen && (
        <div>
          <FileExplorer onClose={closeExplorerWindow} /> {/* Passing close function as prop */}
        </div>
      )}

      <DraggableComponent />
      <div className="window" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
      }}>
        <button onClick={sayHello} style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px 10px',
          }}> <img
            src={clipartKey}
            alt="Start Icon"
            style={{ width: '16px', height: '16px', marginRight: '8px' }}
          />

          <span style={{ fontWeight: 'bold',fontSize: '14px',}}>
            Start
          </span>
          </button>
      </div>
    </div>
  );
}


export default App;

