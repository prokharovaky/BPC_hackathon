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

    const modalBack = document.getElementById("modalBack");
    const modal = document.getElementById("modal");
    const button = document.getElementById("SpinButton");

    ModalPromise.then((deg) => {
        if (deg > 360) {
            deg = deg % 360;
        }

        const modalBack = document.getElementById("modalBack");
        const modal = document.getElementById("modal");

        switch (true) {
            case (deg >= 0 && deg < 30):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBP10.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 30 && deg < 60):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/Modal10.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 60 && deg < 90):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/Modal10.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 90 && deg < 120):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBP20.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 120 && deg < 150):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBPYandex.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 150 && deg < 180):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalSOSEDI.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 180 && deg < 210):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/Modal.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 210 && deg < 240):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalNEFT.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 240 && deg < 270):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBP5.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 270 && deg < 300):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBPKAVA.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 300 && deg < 330):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBPEvro.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
            case (deg >= 330 && deg < 360):
                setTimeout(() => {
                    modalBack.style.visibility = 'visible';
                    modal.style.backgroundImage = 'url(./images/ModalBPYandex.png)';
                    modal.style.visibility = 'visible';
                }, 1500);
                break;
        }


    });


}

const modWin = document.getElementById("modal");
const modWinBack = document.getElementById("modalBack");
const button = document.getElementById("SpinButton");
function hideModal(){
    modWin.style.visibility = 'hidden';
    modWinBack.style.visibility = 'hidden';
    if(modWinBack.style.visibility == 'hidden')
    {
        // button.style.width = "400px"; 
        button.textContent = "Вы можете сыграть снова через месяц";
    }
    // spinWheelButton.removeEventListener("click", speenTheWheel);
}

modWin.addEventListener("click", hideModal);


let spinWheelButton = document.getElementById("SpinButton");
spinWheelButton.addEventListener("click", speenTheWheel);
}

export default App;
