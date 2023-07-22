import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './ItemPopup.css'; // Import CSS file for ItemPopup styling

const ItemPopup = ({ item, onClose }) => {
  const [showPopup, setShowPopup] = useState(true); // Set to false to animate the popup out

  const handleButtonClick = () => {
    setShowPopup(false); // Trigger the closing animation
  };

  const popupAnimation = useSpring({
    transform: showPopup ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
    opacity: showPopup ? 1 : 0,
    config: { tension: 300, friction: 26 }, // Adjust animation speed
    onRest: () => {
      if (!showPopup) {
        onClose(); // Close the popup after the animation is complete
      }
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 blur-background">
      {showPopup && (
        <animated.div
          className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={popupAnimation}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <div className="popup-content">
              {/* Display item data here */}
              <div className="mb-4">
                <p className="text-2xl font-bold text-center">{item.type}</p>
              </div>
              <div className="mb-4 items">
                <p className="text-lg font-bold font-medium">Serial: {item.capsule_serial}</p>
              </div>
              <div className="mb-4 items">
                <p className="text-base font-bold">Status: {item.status}</p>
              </div>
              <div className="mb-4 items">
                <p className="text-sm font-bold">Original Launch: {item.original_launch}</p>
              </div>
              <div className="mb-4 items">
                <p className="text-sm font-bold">Original Landings: {item.mission}</p>
              </div>
            
              {/* Add more item data to display if needed */}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full"
              onClick={handleButtonClick}
            >
              Close
            </button>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default ItemPopup;
