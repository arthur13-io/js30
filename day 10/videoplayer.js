const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
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
toggle.addEventListener('click', togglePlay);
console.log({video})