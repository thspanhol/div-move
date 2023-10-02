import { useState, useRef } from 'react';
import './DraggableDiv.css'

const DraggableDiv = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    offsetX.current = e.clientX - position.x;
    offsetY.current = e.clientY - position.y;
    divRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offsetX.current;
      const newY = e.clientY - offsetY.current;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    divRef.current.style.cursor = 'grab';
  };

  const divStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '100px',
    height: '100px',
    backgroundColor: 'Darkred',
    border: '2px solid #000',
    cursor: dragging ? 'grabbing' : 'grab',
  };

  return (
    <div
      style={divStyle}
      ref={divRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="no-select"
    >
    </div>
  );
};

export default DraggableDiv;
