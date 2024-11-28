import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DraggableResizableComponent = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Draggable and Resizable Example</h2>
      <Draggable>
        <div
          style={{
            width: 300,
            height: 150,
            backgroundColor: 'lightcoral',
            textAlign: 'center',
            lineHeight: '150px',
            borderRadius: '5px',
            position: 'relative',  // Important for positioning inside Draggable
          }}
        >
          <ResizableBox
            width={200}
            height={100}
            minConstraints={[100, 50]}
            maxConstraints={[500, 300]}
            axis="both"
            resizeHandles={['se']}  // Resize handle at the bottom-right corner
          >
            <div
              style={{
                backgroundColor: 'skyblue',
                height: '100%',
                textAlign: 'center',
                lineHeight: '100px',
                borderRadius: '5px',
              }}
            >
              Resize me
            </div>
          </ResizableBox>
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableResizableComponent;
