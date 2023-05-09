import { useState, useEffect, useRef, useCallback } from "react";

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
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

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

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
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
        <button className="shufflebtn smallbtn" onClick={handlePrevious}>
          <BsShuffle style={{ fontSize: "18px" }} />
        </button>
        <button className="skipbwbtn smallbtn" onClick={skipBackward}>
          <BsFillSkipBackwardFill style={{ fontSize: "18px" }} />
        </button>

        <button className="playpausebtn bigbtn" onClick={togglePlayPause}>
          {isPlaying ? (
            <FaPause style={{ fontSize: "30px" }} />
          ) : (
            <FaPlay style={{ fontSize: "30px" }} />
          )}
        </button>
        <button className="skipfwbtn smallbtn" onClick={skipForward}>
          <BsFillSkipForwardFill style={{ fontSize: "18px" }} />
        </button>
        <button className="repeatbtn smallbtn" onClick={handleNext}>
          <BsRepeat style={{ fontSize: "18px" }} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
