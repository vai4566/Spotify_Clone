import { useParams } from "react-router-dom";
//import { albumsData, songsData } from "../assets/data";
import { useContext } from "react";
import { PlayerContext } from "../context/playercontext.jsx";
import { FaPlay, FaPause } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { formatDuration } from "../utils/time.jsx"
import { UserContext } from "../context/usercontext.jsx";
import { useNavigate } from "react-router-dom";

export default function Album() { 
    const { id } = useParams();

    const navigate = useNavigate()

    const {
        songsData,
        albumsData,
        isPlaying,
        playSong,
        play,
        pause,
    } = useContext(PlayerContext);

    const { loggedIn } = useContext(UserContext)

    const album = albumsData.find((item) => item._id === id);

    if (!album) {
        return (
            <div className="flex-1 bg-neutral-900 rounded-lg p-6 text-white">
                <h1 className="text-2xl font-bold">Album not found</h1>
            </div>)
    }

    const albumSongs = songsData.filter(
        (song) => song.album === album?.name
    );

    return (
        <div
            className="p-5 h-[175%]"
            style={{
                background: `linear-gradient(180deg, ${album.bgcolor} 0%, #121212 45%, #121212 100%)`,
            }}
        >
            {/* Album Header */}
            <div className="flex  items-end gap-5 mt-3">
                <img
                    src={album.image}
                    alt={album.name}
                    className="w-28 h-28 rounded-lg"
                />

                <div>
                    <p className="text-white font-semibold text-sm">Playlist</p>

                    <h1 className="text-white text-4xl font-bold mb-2">
                        {album.name}
                    </h1>

                    <h4 className="text-white text-xs">
                        {album.description}
                    </h4>

                    <p className="text-white text-xs mt-1">
                        <span className="font-bold">Spotify</span> • {albumSongs.length} • {formatDuration(albumSongs)}
                    </p>
                </div>
            </div>

            {/* Play Pause Button */}

            <div className="mt-2">
                <button className="w-10 h-10 ml-1 rounded-full bg-green-500 flex items-center justify-center hover:scale-105 transition"
                    onClick={() => {
                        if (!loggedIn) {
                            navigate("/login");
                            return;
                        }

                        isPlaying ? pause() : play();
                    }}
                >
                    {isPlaying ? (<FaPause size={12} className="text-black text-lg flex items-center" />
                    ) : (
                        <FaPlay size={12} className="text-black text-lg flex items-center" />
                    )}
                </button>
            </div>

            {/* Table Header */}
            <div className="mt-3 mb-1 grid grid-cols-[40px_1.8fr_1fr_1fr_60px] items-center border-b border-neutral-700 pb-3 text-gray-400 text-sm font-semibold gap-2">
                <p>#</p>
                <p>Title</p>
                <p>Album</p>
                <p>Date Added</p>
                <div className="flex ">
                    <LuClock3 size={18} />
                </div>
            </div>

            {/* Songs */}
            {albumSongs.map((song, index) => (
                <div
                    key={song._id}

                    onClick={() => loggedIn ? playSong(song) : navigate('/login')}
                    className="grid grid-cols-[40px_1.8fr_1fr_1fr_60px] items-center py-1.5 hover:bg-neutral-800 rounded-md cursor-pointer gap-2"
                >
                    <b className="mr-4 text-gray-400">{index + 1}</b>

                    <div className="flex items-center gap-4">
                        <img
                            src={song.image}
                            alt={song.name}
                            className="inline w-8 rounded mr-5"
                        />

                        <div>
                            <h3 className="text-white text-xs">{song.name}</h3>
                            <p className="text-gray-400 text-sm">{song.artist}</p>
                        </div>
                    </div>

                    <p className="text-gray-400 text-xs">
                        {song.album}
                    </p>
                    <p className="text-gray-400 text-xs">
                        12 days ago
                    </p>

                    <p className="text-gray-400 text-xs">
                        {song.duration}
                    </p>
                </div>
            ))
            }
        </div >
    )
}