import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.module.css';

const Modal = ({ angle, onClose }) => {
    return ReactDOM.createPortal(
      <div className="modal">
        <h1>Angle: {angle}</h1>
        <button onClick={onClose}>Close</button>
      </div>,
      document.getElementById('root')
    );
  };


const App = () => {
    const [showModal, setShowModal] = useState(false);

function speenTheWheel()
{
    let randomDeg = Math.floor(Math.random() * 360);
    let numOfSpins = Math.floor(Math.random() * 20) + 5;
    const image = document.getElementById("SpImg");
    const totalRotation = (numOfSpins * 360) + randomDeg;

    let currentRotation = 0;  // Текущий угол поворота
    const duration = 3000;    // Длительность анимации (3 секунды)
    const intervalTime = 10;  // Частота обновления анимации
    const steps = duration / intervalTime;  // Количество шагов анимации
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

    let points = document.getElementById("points");
    let numberOfPoints = points.textContent;
    numberOfPoints -=100;
    points.textContent = numberOfPoints;

    ModalPromise.then((deg) => {
        if (deg > 360) {
            deg = deg % 360;
        }

        console.log("Промис выполнен с углом:", deg);
    
        setShowModal(true);
    });


}

{showModal && <Modal angle="340" onClose={() => setShowModal(false)} />} {/* Рендерим модальное окно */}

let spinWheelButton = document.getElementById("SpinButton");
spinWheelButton.addEventListener("click", speenTheWheel);
}

export default App;
