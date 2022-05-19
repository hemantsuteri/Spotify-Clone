console.log("Welcome to spotify")

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Ukulele", filePath: "song/1ukulele.mp3", coverPath: "covers/1.jpg"},
    {songName: "Creative Minds", filePath: "song/2creativeminds.mp3", coverPath: "covers/2.jpg"},
    {songName: "A New Beginning", filePath: "song/3anewbeginning.mp3", coverPath: "covers/3.jpg"},
    {songName: "Little Idea", filePath: "song/4littleidea.mp3", coverPath: "covers/4.jpg"},
    {songName: "Jazzy Frenchy", filePath: "song/5jazzyfrenchy.mp3", coverPath: "covers/5.jpg"},
    {songName: "Happy Rock", filePath: "song/6happyrock.mp3", coverPath: "covers/6.jpg"},
    {songName: "Hey", filePath: "song/7hey.mp3", coverPath: "covers/7.jpg"},
    // {songName: "cute", filePath: "song/8cute.mp3", coverPath: "covers/8.jpg"},
    // {songName: "9Salam-e-ishq", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    // {songName: "10Salam-e-ishq", filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element)=>{
    console.log(element, i);
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.getElementByTagName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity =1;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progrss =parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console,log(progrss);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

document.getElementsByClassName('songItemPlay').forEach(()=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src= 'songs/$(songIndex+1).mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= 'songs/$(songIndex+1).mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})