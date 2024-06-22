const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player_slider');
const playerButton = player.querySelector('.player_button')

function togglePlay(){
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    if(video.paused){
        video.play();
        play.style.display = 'inline-block';
        pause.style.display = 'none';

    }
    else{
        video.pause();
        pause.style.display = 'inline-block';
        play.style.display = 'none';

    }
}
function skipPlay(){
    const skipValue = parseFloat(this.dataset.skip);
    video.currentTime += skipValue
}
function Volume(){
    //input has name volume, then do it
}
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skipPlay));
console.log(video.volume)