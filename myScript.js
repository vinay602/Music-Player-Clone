console.log("Welcome");
let songindex=0;
let audioElement = new Audio('g.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('song1'));


let songs=[
    {SongName: "Baarishein.mp3",filepath: "songs/1.mp3",coverPath: "covers/barishen.jpg"},
    {SongName: "Loser.mp3",filepath: "songs/2.mp3" ,coverPath: "covers/loser.jpg"}, 
    {SongName: "Unstoppable.mp3",filepath: "songs/3.mp3",coverPath: "covers/unstoppable.jpg"},
    {SongName: "Ghar- Mohit Chauhan.mp3",filepath: "songs/4.mp3",coverPath: "covers/gharcover.jpg"},
    {SongName: "Husna-Piyush-Mishra.mp3",filepath: "songs/5.mp3",coverPath: "covers/hushna.jpg"},
    {SongName: "Gulabi (.mp3",filepath: "songs/6.mp3",coverPath: "covers/gulabi.jpg"},
    {SongName: "_Pasoori_3.mp3",filepath: "songs/7.mp3",coverPath: "covers/pasooricover.jpg"},
    {SongName: "Alone_.mp3",filepath: "songs/8.mp3",coverPath: "covers/alone.jpg"},
    {SongName: "Friends.mp3",filepath: "songs/9.mp3",coverPath: "covers/friends.jpg"},
    {SongName: "Baby_320.mp3",filepath: "songs/10.mp3",coverPath: "covers/baby.jpg"}
]
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].SongName;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('fa-play-circle')){
            makeallplays();
            songindex = parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
             e.target.classList.add('fa-pause-circle');
            audioElement.src= 'songs/'+(songindex+1)+'.mp3'
           
            audioElement.play();
            audioElement.currentTime=0;
            gif.style.opacity=1;
        
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle')
            
        }
        else if(e.target.classList.contains('fa-pause-circle')){
           
            e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        


        
    
        audioElement.pause();
        gif.style.opacity=0;
        
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle')
        }
    })
        

 })
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
      songindex += 1;
}

audioElement.src='songs/'+(songindex)+'.mp3';
masterSongName.innerText = songs[songindex].SongName;
audioElement.currentTime=0;
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');



})
document.getElementById('prev').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;

    }
    else{
        songindex -=1;

    }
    audioElement.src='songs/'+(songindex+1)+'.mp3';
   
 masterSongName.innerText = songs[songindex].SongName;

 audioElement.currentTime=0;
 audioElement.play();
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle')


})

