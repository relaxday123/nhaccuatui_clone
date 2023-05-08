import React from "react";
import pic from "../media/img/Playing/1.jpg";
import { TfiMicrophoneAlt } from "react-icons/tfi";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill, BsFillVolumeDownFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import "./NowPlaying.css";
// import components
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import DisplayTrack from './DisplayTrack';
import { useRef, useState, useEffect } from 'react';
import { tracks } from "../media/mp3/tracks";

const NowPlaying = ({ list }) => {
    // states
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(
        tracks[trackIndex]
    );
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    // reference
    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    const onMouseEnter = (e) => {
        //setVolume(true);
    }

    const onMouseLeave = (e) => {
        //setVolume(false);
    }

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    return (
        <div style={{ position: "sticky", top: "0", height: "100vh", display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "3fr 1fr" }}>
            <div>
                <div style={{ position: "relative", textAlign: "center", height: "295px", padding: "12px 0", margin: "16px 16px", backgroundColor: "#232d37", borderRadius: "5px" }}>
                    <img style={{ width: "240px", height: "240px", }} src={pic} alt="NP-img" />
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 16px", backgroundColor: "#232d37" }} >
                        <a href="/" style={{ display: "block", backgroundColor: "#232d37" }} className="song-name" >nếu lúc đó</a>
                        <a href="/" className="karaokeic" style={{ backgroundColor: "#232d37" }} ><TfiMicrophoneAlt style={{ backgroundColor: "#232d37" }} /></a>
                    </div>
                    <div style={{ position: "absolute", left: "16px", backgroundColor: "inherit" }}>
                        <a className="artistname" href="/" style={{ backgroundColor: "inherit" }}>Tlinh</a>{", "}<a className="artistname" href="/" style={{ backgroundColor: "inherit" }}>2pillz</a>
                    </div>
                </div>
                <div className="albumname" style={{ fontSize: "13px", textAlign: "center" }}>Playlist: Bảng Xếp Hạng Bài Hát Việt Nam ...</div>
            </div>
            <div className="songcontrol" style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <div className="volume-icon-container" >
                        <div
                            alt="volume-icon"
                            className="volume-icon"
                            onClick={() => setMuteVolume((prev) => !prev)}>
                            {muteVolume || volume < 5 ? (
                                <BsFillVolumeMuteFill />
                            ) : volume < 40 ? (
                                <BsFillVolumeDownFill />
                            ) : (
                                <BsFillVolumeUpFill />
                            )}
                        </div>
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
                    <button class="button-18">Danh sách phát</button>
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
                        tracks,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack,
                        handleNext
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