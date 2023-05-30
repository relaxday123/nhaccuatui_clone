import { useEffect, useRef, useCallback } from "react";

import {
  BsShuffle,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
  BsRepeat,
} from "react-icons/bs";

import { FaPlay, FaPause } from "react-icons/fa";

import "./Controls.css";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  Songs,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  isPlaying,
  setIsPlaying,
  isShuffle,
  handleShuffle,
  handleRepeat,
}) => {
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = Songs.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(Songs[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(Songs[trackIndex - 1]);
    }
  };

  return (
    <div className="controls-wrapper">
      <div
        className="controls"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button className="shufflebtn smallbtn" onClick={handleShuffle}>
          {isShuffle ? (
            <BsShuffle className="shuffle-btn" style={{ fontSize: "18px" }} />
          ) : (
            <BsShuffle style={{ fontSize: "18px" }} />
          )}
        </button>
        <button className="skipbwbtn smallbtn" onClick={handlePrevious}>
          <BsFillSkipBackwardFill style={{ fontSize: "18px" }} />
        </button>

        <button className="playpausebtn bigbtn" onClick={togglePlayPause}>
          {isPlaying ? (
            <FaPause style={{ fontSize: "30px" }} />
          ) : (
            <FaPlay style={{ fontSize: "30px" }} />
          )}
        </button>
        <button className="skipfwbtn smallbtn" onClick={handleNext}>
          <BsFillSkipForwardFill style={{ fontSize: "18px" }} />
        </button>
        <button className="repeatbtn smallbtn" onClick={handleRepeat}>
          <BsRepeat style={{ fontSize: "18px" }} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
