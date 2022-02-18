import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  active,
  setActive,
  audioInfo,
  setAudioInfo,
  audio,
  setCurrentSong,
  setAudio,
}) => {
  const playSongHandler = () => {
    if (active) {
      audioRef.current.pause();
      setActive(!active);
    } else {
      audioRef.current.play();
      setActive(!active);
    }
  };

  useEffect(() => {
    const newSongs = audio.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setAudio(newSongs);
  }, [currentSong]);

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragInput = (e) => {
    audioRef.current.currentTime = e.target.value;
    setAudioInfo({ ...audioInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = audio.findIndex((item) => item.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(audio[(currentIndex + 1) % audio.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % audio.length === -1) {
        setCurrentSong(audio[audio.length - 1]);
        if (active) audioRef.current.play();
        return;
      }
      await setCurrentSong(audio[(currentIndex - 1) % audio.length]);
    }
    if (active) audioRef.current.play();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{audioInfo.duration ? getTime(audioInfo.currentTime) : "0:00"}</p>
        <input
          type="range"
          name=""
          value={audioInfo.currentTime}
          min={0}
          max={audioInfo.duration || 0}
          onChange={dragInput}
        />
        <p>{getTime(audioInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={active ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
