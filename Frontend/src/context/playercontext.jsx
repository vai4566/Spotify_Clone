import { createContext, useRef, useState, useEffect } from "react";
//import { songsData } from "../assets/data";
import axios from "axios"
import { useContext } from "react";
import { UserContext } from "./usercontext";

export const PlayerContext = createContext(null);

export default function PlayerContextProvider({ children }) {

    const { loggedIn, userData } = useContext(UserContext);

    const [currentSong, setCurrentSong] = useState(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, SetVolume] = useState(1)
    const [songsData, setSongsData]=useState([])
    const [albumsData, setAlbumsData]=useState([])
    const audioRef = useRef(null);


    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.onloadedmetadata = () => {
            setDuration(audio.duration);
        };

        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime);
        };
    }, [currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);


    useEffect(() => {
    if (!currentSong || !userData?._id) return;

    localStorage.setItem(
        `lastPlayedSong_${userData._id}`,
        JSON.stringify({
            song: currentSong,
            currentTime: currentTime
        })
    );
}, [currentSong, currentTime, userData]);

 useEffect(() => {

        if (!loggedIn || !userData?._id) return;

        const saved = localStorage.getItem(
            `lastPlayedSong_${userData._id}`
        );

        if (!saved) return;

        const data = JSON.parse(saved);

        setCurrentSong(data.song);

        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.currentTime = data.currentTime;
            }
        }, 500);

    }, [loggedIn, userData]);

    const playSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const nextSong = () => {
        const index = songsData.findIndex(
            (song) => song._id === currentSong._id
        );

        if (index !== -1 && index < songsData.length - 1) {
        setCurrentSong(songsData[index + 1]);
        setIsPlaying(true);
        }
    };

    const previousSong = () => {
        const index = songsData.findIndex(
            (song) => song._id === currentSong._id
        );

            if (index > 0) {
        setCurrentSong(songsData[index - 1]);
        setIsPlaying(true);
    }
    };

    const progress = duration
        ? (currentTime / duration) * 100
        : 0;

    const seekSong = (e) => {
        const width = e.currentTarget.clientWidth;
        const clickX = e.nativeEvent.offsetX;

        audioRef.current.currentTime =
            (clickX / width) * duration;
    }

    const handleVolume = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const clickX = e.clientX - rect.left;

        const newVolume = Math.max(
            0,
            Math.min(1, clickX / rect.width)
        );

        SetVolume(newVolume);
    };

    const getSongsData=async(e)=>{
        try {
            const response=await axios.get(`https://spotify-clone-1-gy08.onrender.com/song/list`)
            setSongsData(response.data.songs)
            
        if (response.data.songs.length > 0) {
            setCurrentSong(response.data.songs[0]);
        }

        } catch (error) {
            
        }
    }

    const getAlbumsData=async()=>{
        try {
            const response=await axios.get(`https://spotify-clone-1-gy08.onrender.com/album/list`)
            setAlbumsData(response.data.album)
        } catch (error) {
         
        }
    }

    useEffect(()=>{
        getSongsData()
        getAlbumsData()
    },[])

    return (
        <PlayerContext.Provider
            value={{
                currentSong,
                isPlaying,
                playSong,
                play,
                pause,
                nextSong,
                previousSong,
                seekSong,
                audioRef,
                duration,
                currentTime,
                progress,
                volume,
                SetVolume,
                handleVolume,
                songsData,
                albumsData
            }}
        >

            {children}
            <audio
                ref={audioRef}
                src={currentSong?.file}
                onEnded={nextSong}
                onLoadedData={() => {
                    if (isPlaying) {
                        audioRef.current.play();
                    }
                }}
            />

        </PlayerContext.Provider>

    );
}