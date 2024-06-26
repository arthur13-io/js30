const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');
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
    const min = parseFloat(this.min);
    const max = parseFloat(this.max);
    const value = parseFloat(this.value);
    if(value === min){
        video.volume = 0;
    }
    else if(value === max){
        video.volume = 1;
    }
    else{
        video.volume = value;
    }
}
function playbackRate(){
    const min = parseFloat(this.min);
    const max = parseFloat(this.max);
    const value = parseFloat(this.value);
    if(value === min){
        video.playbackRate+=0.1;
    }
    else if(value === max){
        video.playbackRate+=2;
    }
    else{
        video.playbackRate =value;
    }
}
function handleProgress(){
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
/*scrub*/
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skipPlay));
ranges[0].addEventListener('change', Volume);
ranges[1].addEventListener('change', playbackRate);
video.addEventListener('timeupdate', handleProgress)
progressBar.addEventListener('click', scrub)
