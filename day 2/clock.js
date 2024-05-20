const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondDegree = (seconds/60) * 360 + 90;
    const minDegree = (mins/60) * 360 + ((seconds/60) *6 ) + 90;
    const hourDegree = (hours/12) * 360 + ((mins/60) *30) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    seconds===0 ? secondHand.classList.add('no-transition') : secondHand.classList.remove('no-transition'); 
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`

    console.log(hours);
    console.log(hourDegree);

}
setInterval(setDate, 1000);