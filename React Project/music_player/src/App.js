import React, {useState, useEffect} from 'react';
import image from "./images/gray_owl.jpg"
import musicAudio from "./music/Baaghi Re - Sonchirya.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faBackward, faForward, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicDetails, setMusicDetails] = useState({
    name: 'Baghi Re',
    albumb: 'Sonchiraiya'
  })


  //Play or pause the music 
function onClicked() {
  const music = document.querySelector('audio');
  if(playing){
    music.pause();
    setPlaying(false);
  }else{
    music.play();
    setPlaying(true);
  }
}
  //Convert Secnods to Minute and time
  var secToMin = (duration) =>{
    let min_duration = duration / 60;
    let sec_duration = duration % 60;
    return `${Math.trunc(min_duration)}:${Math.trunc(sec_duration)}`;
  }
  //progress js

useEffect(()=>{

  const play = document.querySelector(".play");
  const music = document.querySelector('audio');
  const progress = document.querySelector('.progress');
  const progress_div = document.getElementById('progress_div');
  const coverImg = document.querySelector('img');

  play.addEventListener('click',()=>{
    // onClicked();
    coverImg.classList.toggle("anime");
  })
  
//show the progress on porgress bar

  music.addEventListener('timeupdate',(event=>{
    const { currentTime, duration} = event.srcElement;
    setCurrentTime(currentTime);
    setDuration(duration);
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;
  }))

// progress on click

  progress_div.addEventListener('click',(event) => {
    const { duration } = music;
    let move_progress= (event.offsetX / event.srcElement.clientWidth)*duration;
    music.currentTime = move_progress;
  })

  return(
    function cleanUp(){
      console.log("Effect finished and Cleared")
    }
  );
},[]);

  return (
    <div className="main_div">
      <div className="music_container">
        <h2 id="title">{musicDetails.name}</h2>
        <h3 id="artist">{musicDetails.albumb}</h3>
        <div className="img_container">
          <img src={image} alt="image_album_cover"/>
        </div>
        <audio src={musicAudio}></audio>

        {/* ------------Progress Bar--------- */}
        <div className="progressbar_container" id="progress_container">
          <div className="progress_duration_meter">
            <div id="current_time">{secToMin(currentTime)}</div>
            <div id="duration">{secToMin(duration-currentTime)}</div>
          </div>
          <div className="progress_div" id="progress_div">
            <div className="progress" id="progress"></div>
          </div>
        </div>


        {/* ------------Controls------------- */}
        <div className="music_controls">
          <FontAwesomeIcon icon={faBackward} className="backward" title="Backward" />
          <FontAwesomeIcon icon={playing?faPauseCircle:faPlayCircle} className="play" title="Play" onClick={onClicked} />
          <FontAwesomeIcon icon={faForward} className="forward" title="Forward" />
        </div>
      </div>
    </div>
  );

}

export default App;
