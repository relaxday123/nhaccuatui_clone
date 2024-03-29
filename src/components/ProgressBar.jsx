const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div
      className="progress"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "15px 0",
      }}
    >
      <span className="time current" style={{ fontSize: "10px" }}>
        {formatTime(timeProgress)}
      </span>
      <input
        style={{ height: "0.2rem", width: "11rem"}}
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time" style={{ fontSize: "10px" }}>
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;
