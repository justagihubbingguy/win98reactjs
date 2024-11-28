//Imports stand here.
import React, { Fragment, useState } from 'react';
import "98.css";
import { Rnd } from 'react-rnd';
import Mycom from '/Users/Hp/win98-reactj/src/img/MyComputer-removebg-preview.png';


//Imports end here.

const FileExplorer = () => {

    return (

         <Rnd 
         dragHandleClassName="title-bar" // Make the title bar the draggable region
         style={{
           position: "absolute",
           zIndex: 1000,
         }}
         resizeHandleStyles={{
           top: { cursor: "ns-resize" }, // Vertical resizing cursor
           topLeft: { cursor: "nwse-resize" }, // Top-left diagonal resizing cursor
           topRight: { cursor: "nesw-resize" }, // Top-right diagonal resizing cursor
           bottom: { cursor: "ns-resize" }, // Vertical resizing cursor
           bottomLeft: { cursor: "nesw-resize" }, // Bottom-left diagonal resizing cursor
           bottomRight: { cursor: "nwse-resize" }, // Bottom-right diagonal resizing cursor
           left: { cursor: "ew-resize" }, // Horizontal resizing cursor
           right: { cursor: "ew-resize" }, // Horizontal resizing cursor
         }}
         enableResizing={{
           top: true, // Enable resizing from the top
           topLeft: true, // Enable resizing from top-left
           topRight: true, // Enable resizing from top-right
           bottom: true, // Enable resizing from the bottom
           bottomLeft: true, // Enable resizing from bottom-left
           bottomRight: true, // Enable resizing from bottom-right
           left: true, // Enable resizing from the left
           right: true, // Enable resizing from the right
         }}
         default={{
           x: 100,
           y: 100,
           width: 300,
           height: 200,
         }}
          >
            <div className="window" style={{ width: '400px', height: '290px'}}>
                <div className="title-bar" style={{}}>
                    <div className="title-bar-text">My Computer</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
            <div className="window-body" style={{}}>
                <div className='status-bar'>
                    <div className='status-bar-field'>File Selection: diagonal
                        <select className='default'>
                            <option>Normal</option>
                            <option>Cursor</option>
                            <option>Pararrel</option>
                            <option>Usage</option>
                            <option>Semi-Pararrel</option>
                        </select>
                    </div>
                </div>
                <div className='status-bar' style={{width:"390px",height:'230px',overflow:'scroll'}}>
                    <div style={{height:300,width:110,placeContent:'-moz-initial'}} className='gradient-bg'>
                        <h5 style={{position:'relative'}}>My Computer</h5>
                        <img src={Mycom} style={{width:70,height:70,position:'relative'}}>
                        
                        </img>
                    </div>
                    <div style={{height:300,width:100,position:'absolute',color:'white',visibility:'visible'}}></div>
                </div>
        </div>
      </div>
         </Rnd>
    );
};

export default FileExplorer;