console.log("Welcome to Spotify")


let audioElement=new Audio('Music/Dope Shope International Villager 320 Kbps.mp3')
let songIndex =0;
let masterplay=document.getElementById('masterplay')
let mypbar=document.getElementById('mybar')

let songs=[{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},
{songname:"DopeShope",filepath:"Music/Dope Shope International Villager 320 Kbps.mp3",coverPath:"Assets/wp1830716.jpg"},]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-solid fa-2x fa-play');
        masterplay.classList.add('fa-solid fa-2x fa-pause');
    }
    else{
        audioElement.pause();
        
    }
}) 


