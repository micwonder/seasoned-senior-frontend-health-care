// import { useState, useEffect } from 'react';

// let prevPosition1 = 0;
// let prevPosition2 = 0;
// let isDragging1 = false;
// let isDragging2 = false;

const MyRangeSlider = () => {
//   const [position1, setPosition1] = useState(0);
//   const [position2, setPosition2] = useState(100);

//   const useMousePosition = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//     useEffect(() => {
//       const updateMousePosition = (ev) => {
//         setMousePosition({ x: ev.clientX, y: ev.clientY });
//         if (isDragging1) {
//           console.log("client", ev.clientX)
//           console.log("client p", prevPosition1)
//           setPosition1(ev.clientX-prevPosition1);
//         }
//       };
  
//       window.addEventListener('mousemove', updateMousePosition);
  
//       return () => {
//         window.removeEventListener('mousemove', updateMousePosition);
//       };
//     }, []);
  
//     return mousePosition;
//   };

//   const mousePosition = useMousePosition();

//   const handleMouseDown1 = () => {
//     isDragging1 = true;
//     prevPosition1 = mousePosition.x;
//     console.log("prev", prevPosition1)
//   };

//   const handleMouseDown2 = () => {
//     isDragging2 = true;
//     prevPosition2 = mousePosition.x;
//   };

//   const handleMouseUp = () => {
//     isDragging1 = false;
//     isDragging2 = false;
//     console.log("mouseup")
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging1 && !isDragging2) return;

//     const sliderWidth = 300; // Width of the slider in pixels
//     if (isDragging1) {
//       // const newPosition1 = Math.min(prevPosition1-, position2 - 10); // Ensure thumb1 doesn't cross thumb2
//       setPosition1(mousePosition.x);
//       console.log(mousePosition.x);
//     }

//     if (isDragging2) {
//       // const newPosition2 = Math.max(percentage, position1 + 10); // Ensure thumb2 doesn't cross thumb1
//       // setPosition2(newPosition2);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [isDragging1, isDragging2]);

  return (
    <div
      style={{
        width: '300px',
        height: '10px',
        backgroundColor: 'grey',
        position: 'relative',
        margin: '0 auto',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          height: '100%',
          backgroundColor: '#CB5A6F',
          position: 'absolute',
          right: '0',
          width: '300px',
          left: '0%'
          // width: `${position2 - position1}%`,
          // left: `${position1}%`,
        }}
      ></div>
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          border: '2px solid #CB5A6F',
          borderRadius: '50%',
          position: 'absolute',
          cursor: 'pointer',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          left: '0px'
          // left: `${position1}px`,
        }}
        // onMouseDown={handleMouseDown1}
      ></div>
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          border: '2px solid #CB5A6F',
          borderRadius: '50%',
          position: 'absolute',
          cursor: 'pointer',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          right: '-20px',
        }}
        // onMouseDown={handleMouseDown2}
      ></div>
    </div>
  );
};

export default MyRangeSlider;
