import React from "react";
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

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragInput = (e) => {
    audioRef.current.currentTime = e.target.value;
    setAudioInfo({ ...audioInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(audioInfo.currentTime)}</p>
        <input
          type="range"
          name=""
          value={audioInfo.currentTime}
          min={0}
          max={audioInfo.duration}
          onChange={dragInput}
        />
        <p>{getTime(audioInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
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
        />
      </div>
    </div>
  );
};

export default Player;
