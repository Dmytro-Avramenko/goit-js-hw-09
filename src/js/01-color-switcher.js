import "../css/common.css";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector(`button[data-start]`),
    stopBtn: document.querySelector(`button[data-stop]`),    
}

let timerId = null;
  
refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
    console.log("раз на секунду змінює колір фону", refs.startBtn);
});
  
refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
});

// перший спосіб привязка кнопки .disabled???????
// але є лічильний скільки разів змінили колір 
// function onStartBtnClick() {
//     refs.body.style.backgroundColor = getRandomHexColor();         
// };

// refs.startBtn.addEventListener(`click`, () => {
//     timer.start();    
// });
// refs.stopBtn.addEventListener(`click`, () => {
//     timer.stop();    
// });

// const timer = {
//     intervalId: null,
//     isActive: false, 
//     start() {
//         if(this.isActive){
//             return
//         } 
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const changeColorBody = onStartBtnClick();
//             console.log("раз на секунду змінює колір фону", changeColorBody);

//         }, 1000);
//     },
//     stop () {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     } 
// };