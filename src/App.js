import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.module.css';

const Modal = ({ angle, onClose }) => {
  let imageSrc = '';
  let message = '';

  if (angle >= 0 && angle < 30) {
    imageSrc = 'path_to_image_1.jpg';
    message = 'You landed between 0 and 30 degrees!';
  } else if (angle >= 30 && angle < 60) {
    imageSrc = 'path_to_image_2.jpg';
    message = 'You landed between 30 and 60 degrees!';
  } else if (angle >= 60 && angle < 90) {
    imageSrc = 'path_to_image_3.jpg';
    message = 'You landed between 60 and 90 degrees!';
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <h1>Angle: {angle}</h1>
      <img src={imageSrc} alt="Result" />
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('root')
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const speenTheWheel = () => {
    let randomDeg = Math.floor(Math.random() * 360);
    let numOfSpins = Math.floor(Math.random() * 20) + 5;
    const image = document.getElementById('SpImg');
    const totalRotation = numOfSpins * 360 + randomDeg;

    let currentRotation = 0;
    const duration = 3000;
    const intervalTime = 10;
    const steps = duration / intervalTime;
    const rotationPerStep = totalRotation / steps;

    const ModalPromise = new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        currentRotation += rotationPerStep;
        image.style.transform = `rotate(${currentRotation}deg)`;

        if (currentRotation >= totalRotation) {
          clearInterval(interval);
          resolve(currentRotation);
        }
      }, intervalTime);
    });

    let points = document.getElementById('points');
    let numberOfPoints = points.textContent;
    numberOfPoints -= 100;
    points.textContent = numberOfPoints;

    ModalPromise.then((deg) => {
      if (deg > 360) {
        deg = deg % 360;
      }
      setRotationAngle(deg);
      setShowModal(true); // Show modal after the spin
    });
  };

  return (
    <div>
      <div>
        <img id="SpImg" src="path_to_wheel_image.jpg" alt="Wheel" />
        <button id="SpinButton" onClick={speenTheWheel}>
          Spin the Wheel
        </button>
        <div id="points">1000</div>
      </div>
      {showModal && (
        <Modal angle={rotationAngle} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default App;
