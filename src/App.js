import React, { useState } from 'react';
import '../src/styles.module.css';

const App = () => {
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
    
    const interval = setInterval(() => {
        currentRotation += rotationPerStep;
        image.style.transform = `rotate(${currentRotation}deg)`;  

        if (currentRotation >= totalRotation) {
            clearInterval(interval);
        }
    }, intervalTime);

    let points = document.getElementById("points");
    let numberOfPoints = points.textContent;
    numberOfPoints -=25;
    points.textContent = numberOfPoints;


    const ModalPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(currentRotation);
        }, 3100);
    }
    );

    ModalPromise.then((deg) => {
        if(deg>360)
        {
            deg = deg%360;
        }

    });


}


let spinWheelButton = document.getElementById("SpinButton");
spinWheelButton.addEventListener("click", speenTheWheel);
}

export default App;
