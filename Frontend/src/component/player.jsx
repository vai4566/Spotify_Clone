import {
    FaRandom,
    FaStepBackward,
    FaPlay,
    FaStepForward,
    FaVolumeUp,
    FaExpand,
    FaPause,
} from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdSpeaker } from "react-icons/md"
import { useContext } from "react";
import { PlayerContext } from "../context/playercontext"
import { UserContext } from "../context/usercontext";
import { convertTime } from "../utils/time";

import { songsData } from "../assets/data";

export default function Player() {
    const {
        currentSong,
        isPlaying,
        play,
        pause,
        nextSong,
        previousSong,
        progress,
        seekSong,
        currentTime,
        volume,
        duration,
        SetVolume,
        handleVolume,
    } = useContext(PlayerContext);

    const { loggedIn } = useContext(UserContext);

    console.log("DURATION:", duration);
    console.log("FORMATTED:", convertTime(duration));

    if (!currentSong) {
        return null;
    }

    return (
        loggedIn ? (
            <div className="fixed bottom-0 left-0 right-0 h-15 bg-black flex items-center justify-between px-4 text-white">
                {/* Left - Current Song */}
                <div className="flex items-center gap-4 w-1/4 min-w-0">

                    <img
                        src={currentSong.image}
                        alt={currentSong.name}
                        className="w-10 h-10 rounded object-cover"
                    />

                    <div className="min-w-0">
                        <h3 className="text-xs font-semibold truncate">
                            {currentSong.name}
                        </h3>

                        <p className="text-xs text-gray-400 truncate">
                            {currentSong.artist}
                        </p>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-1 mt-2">

                    <div className="flex items-center gap-4">

                        <FaRandom
                            size={12}
                            className="text-gray-400 hover:text-white cursor-pointer"
                        />

                        <FaStepBackward
                            onClick={previousSong}
                            size={12}
                            className="text-gray-300 hover:text-white cursor-pointer"
                        />

                        <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-105 transition"
                            onClick={isPlaying ? pause : play}>

                            {isPlaying ? (<FaPause size={13} className="text-black ml-0.5" />
                            ) : (
                                <FaPlay size={13} className="text-black ml-0.5" />
                            )}
                        </button>
                        <FaStepForward
                            onClick={nextSong}
                            size={12}
                            className="text-gray-300 hover:text-white cursor-pointer"
                        />

                        <RiLogoutBoxLine
                            size={12}
                            className="text-gray-400 hover:text-white cursor-pointer"
                        />

                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 w-[300px]">

                        <span className="text-[10px] text-gray-400">
                            {convertTime(currentTime)}
                        </span>

                        <div className="flex-1 h-1  bg-gray-600 rounded-full cursor-pointer"
                            onClick={seekSong}
                        >
                            <div className="w-0 border-none h-1 bg-green-500 rounded-full"
                                style={{ width: `${progress}%` }}
                            >
                            </div>
                        </div>

                        <span className="text-[10px] text-gray-400">
                            {convertTime(duration)}
                        </span>

                    </div>
                </div>


                <div className="flex items-center justify-end gap-4 w-1/4">

                    <RxHamburgerMenu
                        size={12}
                        className="text-gray-400 hover:text-white cursor-pointer"
                    />

                    <MdSpeaker
                        size={12}
                        className="text-gray-400 hover:text-white cursor-pointer"
                    />

                    <FaVolumeUp
                        size={13}
                        className="text-gray-400 hover:text-white cursor-pointer"
                    />

                    <div className="w-25 h-1 bg-white rounded-full"
                        onClick={handleVolume}>
                        <div className="w-0 h-full bg-green-500 rounded-full"
                            style={{ width: `${volume * 100}%` }}
                        >
                        </div>
                    </div>

                    <FaExpand
                        size={12}
                        className="text-gray-400 hover:text-white cursor-pointer"
                    />

                </div>
            </div>
        ) : null
    );
}