import React from "react";
import { TfiMicrophoneAlt } from "react-icons/tfi";
import {
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
} from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import "./NowPlaying.css";
// import components
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import DisplayTrack from "./DisplayTrack";
import { useRef, useState, useEffect } from "react";
import Songs from "../media/mp3/songs.json";


import { SlArrowDown } from "react-icons/sl";
import { BiHeadphone } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";

const NowPlaying = ({ list }) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(Songs[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(50);
  const [muteVolume, setMuteVolume] = useState(false);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (isShuffle) {
      let randomIndex = Math.floor(Math.random() * Songs.length);
      setTrackIndex(randomIndex);
      setCurrentTrack(Songs[randomIndex]);
    } else {
      if (trackIndex >= Songs.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(Songs[0]);
      } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(Songs[trackIndex + 1]);
      }
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  // const axios = require("axios");
  // const [data, setData] = useState([]);
  // const options = {
  //   method: "GET",
  //   url: "https://theaudiodb.p.rapidapi.com/searchalbum.php",
  //   params: { s: "daft_punk" },
  //   headers: {
  //     "X-RapidAPI-Key": "bc9c950a49mshb7946e239311423p178408jsn57dbdd53e8f6",
  //     "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   getData().then(function (response) {
  //     setData(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const [listSong, setListSong] = useState(true);

  const handleListSong = (e) => {
    setListSong(listSong === true ? false : true);
  };

  const handleSelectSong = (e, song) => {
    setTrackIndex(song.id);
    setCurrentTrack(song);
    setIsPlaying(true);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffle, setIsShuffle] = useState(false);

  function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  const handleShuffle = () => {
    setIsShuffle((prevShuffling) => !prevShuffling);
  };

  const handleRepeat = () => {
    setIsShuffle((prevShuffling) => !prevShuffling);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {listSong ? (
        <div>
          <div className="now-playing-header">
            <p className="now-playing-content">Đang phát</p>
            <SlArrowDown
              className="now-playing-arrow"
              onClick={handleListSong}
            />
          </div>
          <div className="now-playing-song">
            <div className="now-playing-song-info">
              <div className="now-playing-song-info-pic">
                <img
                  src={currentTrack.links.images[0].src}
                  alt="now-playing-song"
                ></img>
                {isPlaying ? (
                  <FaPause className="now-playing-song-info-pic-ic" />
                ) : (
                  <FaPlay className="now-playing-song-info-pic-ic" />
                )}
              </div>
              <div>
                <p
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "13em",
                  }}
                >
                  {currentTrack.title}
                </p>
                <div style={{ marginTop: "0.5em", fontSize: "1em" }}>
                  {currentTrack.author}
                  {/* {currentTrack.author.map((artirt, index) => (
                    <>
                      <a href="/">{artirt}</a>
                      {index !== currentTrack.author.length - 1 && (
                        <span>, </span>
                      )}
                    </>
                  ))} */}
                </div>
              </div>
            </div>
            <div>
              <div className="heard-number">
                <BiHeadphone />
                {currentTrack.heardNumber}
              </div>
              <div className="song-more-ic">
                <SlOptionsVertical />
              </div>
            </div>
          </div>
          <div className="song-list-wrapper">
            <p className="song-list">Danh sách bài hát</p>
            <hr
              style={{
                margin: "0.5em 1.5em 0",
                opacity: ".1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <div
              className="song-list-scroll"
              style={{ height: "37em", overflow: "scroll", backgroundColor: "inherit" }}
            >
              {Songs.map((song, index) => {
                return song.id === trackIndex ? (
                  <div
                    className="song"
                    key={index}
                    style={{ backgroundColor: "#2f3943" }}
                  >
                    <div className="song-info">
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "18em",
                        }}
                      >
                        {song.title}
                      </p>
                      {song.author}
                      {/* {song.author.map((artirt, index) => (
                      <>
                        <a href="/">{artirt}</a>
                        {index !== song.author.length - 1 && <span>, </span>}
                      </>
                    ))} */}
                    </div>
                    <div className="song-more-ic current-song-more-ic">
                      <SlOptionsVertical />
                    </div>
                  </div>
                ) : (
                  <div
                    className="song"
                    key={index}
                    onClick={(event) => handleSelectSong(event, song)}
                  >
                    <div className="song-info">
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "18em",
                        }}
                      >
                        {song.title}
                      </p>
                      {song.author}
                      {/* {song.author.map((artirt, index) => (
                    <>
                      <a href="/">{artirt}</a>
                      {index !== song.author.length - 1 && <span>, </span>}
                    </>
                  ))} */}
                    </div>
                    <div className="heard-number">
                      <BiHeadphone />
                      {song.heardNumber}
                    </div>
                    <div className="song-more-ic">
                      <SlOptionsVertical />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: "0 0.7rem",
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              height: "295px",
              padding: "12px 0",
              margin: "16px 16px",
              backgroundColor: "#232d37",
              borderRadius: "5px",
            }}
          >
            <img
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "0.4rem",
                boxShadow: "0 8px 16px rgb(0,0,0,0.2)",
              }}
              src={currentTrack.links.images[0].src}
              alt="NP-img"
            />
            <div
              style={{
                backgroundColor: "inherit",
                textAlign: "left",
                paddingLeft: "0.8em",
              }}
            >
              <a
                href="/"
                style={{
                  backgroundColor: "inherit",
                  display: "block",
                  paddingTop: "0.5em",
                  fontSize: "14px",
                  fontWeight: "600",
                  width: "13em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentTrack.title}
              </a>
              <div
                style={{
                  backgroundColor: "inherit",
                  paddingTop: "0.5em",
                  fontSize: "0.8em",
                }}
              >
                {currentTrack.author}
                {/* {currentTrack.author.map((artirt, index) => (
                  <>
                    <a
                      href="/"
                      style={{ backgroundColor: "inherit", marginTop: "0.5em" }}
                    >
                      {artirt}
                    </a>
                    {index !== currentTrack.author.length - 1 && (
                      <span style={{ backgroundColor: "inherit" }}>, </span>
                    )}
                  </>
                ))} */}
              </div>
              <a
                href="/"
                className="karaokeic"
                style={{
                  backgroundColor: "#232d37",
                  position: "absolute",
                  right: "0.8em",
                  bottom: "2em",
                }}
              >
                <TfiMicrophoneAlt style={{ backgroundColor: "#232d37" }} />
              </a>
            </div>
          </div>
          <div
            className="albumname"
            style={{ fontSize: "13px", textAlign: "center" }}
          >
            Playlist: Bảng Xếp Hạng Bài Hát Việt Nam ...
          </div>
        </div>
      )}

      <div className="songcontrol" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="volume-icon-container">
            <div
              alt="volume-icon"
              className="volume-icon"
              onClick={() => setMuteVolume((prev) => !prev)}
            >
              {muteVolume ? (
                <BsFillVolumeMuteFill />
              ) : volume < 40 ? (
                <BsFillVolumeDownFill />
              ) : (
                <BsFillVolumeUpFill />
              )}
            </div>
            <div className="volume-slider-container">
              <input
                className="volume-slider"
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                style={{
                  background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
                }}
              />
            </div>
          </div>
          <button onClick={handleListSong} class="button-18">
            {listSong ? "Danh sách phát" : "Đang phát"}
          </button>
          <SlOptionsVertical />
        </div>
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
        <Controls
          {...{
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
          }}
        />
        <div>
          <button className="musicquality">128Kbps</button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;