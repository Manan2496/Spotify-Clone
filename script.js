console.log("Welocome to Spotify App ");
let Index = 0;
let audio = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('Item'));
let songs =[
    {songName : "On & On - Cartoon" , filepath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName : "Fall too Deep - Andrew A " , filepath : "songs/2.mp3" , coverPath : "covers/2.jpg"},
    {songName : "Driver Seat - C1W " , filepath : "songs/3.mp3" , coverPath : "covers/3.jpg"},
    {songName : "No Money - Clarx & Zaug " , filepath : "songs/4.mp3" , coverPath : "covers/4.jpg"},
    {songName : "Think About me - Yancle " , filepath : "songs/5.mp3" , coverPath : "covers/5.jpg"},
    {songName : "What I Want - Britt Lari " , filepath : "songs/6.mp3" , coverPath : "covers/6.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audio.play();

//Play/Pause
masterPlay.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audio.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audio.currentTime/audio.duration)*100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', ()=>{
    audio.currentTime = (ProgressBar.value * audio.duration)/100;
})

const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
     })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeallPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio.src = `songs/${Index+1}.mp3`;
        mastersongname.innerText = songs[Index].songName;
        audio.currentTime =0;
        audio.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(Index>=5){
        Index = 0;
    }
    else{
        Index+= 1;
    }
    audio.src = `songs/${Index+1}.mp3`;
    mastersongname.innerText = songs[Index].songName;
    audio.currentTime =0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(Index<=0){
        Index = 0;
    }
    else{
        Index-= 1;
    }
    audio.src = `songs/${Index+1}.mp3`;
    mastersongname.innerText = songs[Index].songName;
    audio.currentTime =0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
