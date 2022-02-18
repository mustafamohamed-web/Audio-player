import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.scss";
import data from "./data/data";

function App() {
  const audioRef = useRef(null);

  const [audio, setAudio] = useState(data());
  const [currentSong, setCurrentSong] = useState(audio[0]);
  const [active, setActive] = useState(false);
  const [audioInfo, setAudioInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setAudioInfo({ ...audioInfo, currentTime, duration });
  };

  const endSongHandler = async () => {
    let currentIndex = audio.findIndex((item) => item.id === currentSong.id);
    await setCurrentSong(audio[(currentIndex + 1) % audio.length]);
    if (active) audioRef.current.play();
  };

  return (
    <div className="App">
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        active={active}
        setActive={setActive}
        audioRef={audioRef}
        audioInfo={audioInfo}
        setAudioInfo={setAudioInfo}
        setCurrentSong={setCurrentSong}
        audio={audio}
        setAudio={setAudio}
      />
      <Library
        audio={audio}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        active={active}
        setAudio={setAudio}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeHandler}
        onEnded={endSongHandler}
      ></audio>
    </div>
  );
}

export default App;
