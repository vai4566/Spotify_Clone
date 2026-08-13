//import { albumsData } from "../assets/data";
import { Link } from "react-router-dom";
import Header from "./header";
import { useContext } from "react";
import { PlayerContext } from "../context/playercontext";
import { FaPlay , FaPause} from "react-icons/fa"

const submitHandler=((e) => {
        e.preventDefault();
        e.stopPropagation();

        const albumSongs = songsData.filter(
            (song) => song.album === album.name
        );

        if (albumSongs.length > 0) {
            playSong(albumSongs[0]);
 }
})

export default function Displayhome() {
  const { albumsData, songsData, playSong } = useContext(PlayerContext);
  return (
    <>
      <Header />
      <div className="p-5 overflow-y-auto overflow-hidden">
        <section className="mt-8">
          <h1 className="text-2xl font-bold text-white my-5">
            Featured Charts
          </h1>

          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {albumsData.slice(0, 4).map((album) => (
              <Link
                to={`album/${album._id}`}
                key={album._id}
                className="group w-40 p-2 rounded-lg hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-36 h-36 overflow-hidden rounded-md">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={submitHandler}
                  className="absolute bottom-2 right-2  w-10 h-10 bg-green-500  rounded-full flex items-center justify-center shadow-lg opacity-0  translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105" >
                    <FaPlay className="text-black text-sm ml-0.5" />
                  </button>

                </div>

                <h2 className="text-white text-sm font-bold mt-3">
                  {album.name}
                </h2>

                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {album.description}
                </p>
              </Link>

            ))}
          </div>
        </section>

        {/* Today's Hits */}
        <section className="mt-10">
          <h1 className="text-2xl font-bold text-white mb-5">
            Today's Hits
          </h1>

          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {albumsData.slice(4, 8).map((album) => (
              <Link
                to={`album/${album._id}`}
                key={album._id}
                className="group w-40 p-2 rounded-lg hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
              >

                <div className="relative w-36 h-36 overflow-hidden rounded-lg">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full object-cover"
                  />


                  <button
                    onClick={submitHandler}
                    className="absolute bottom-2 right-2  w-10 h-10 bg-green-500  rounded-full flex items-center justify-center shadow-lg opacity-0  translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105" >
                    <FaPlay className="text-black text-sm ml-0.5" />
                  </button>
                </div>
                <h2 className="text-white text-sm font-bold mt-3">
                  {album.name}
                </h2>

                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {album.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Playlists */}
        <section className="mt-10">
          <h1 className="text-2xl font-bold text-white mb-5">
            Popular Playlists
          </h1>

          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {albumsData.slice(8, 12).map((album) => (
              <Link
                to={`album/${album._id}`}
                key={album._id}
                className="group w-40 p-2 rounded-lg hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-36 h-36 overflow-hidden rounded-lg">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full object-cover"
                  />


                  <button
                    onClick={submitHandler}
                    className="absolute bottom-2 right-2  w-10 h-10 bg-green-500  rounded-full flex items-center justify-center shadow-lg opacity-0  translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105" >
                    <FaPlay className="text-black text-sm ml-0.5" />
                  </button>
                </div>

                <h2 className="text-white text-sm font-bold mt-3">
                  {album.name}
                </h2>

                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {album.description}
                </p>

              </Link>
            ))}
          </div>
        </section>

        {/* More Music */}
        <section className="mt-10">
          <h1 className="text-2xl font-bold text-white mb-5">
            More Music
          </h1>

          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {albumsData.slice(12, 16).map((album) => (

              <Link
                to={`album/${album._id}`}
                key={album._id}
                className="group w-40 p-2 rounded-lg hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-36 h-36 overflow-hidden rounded-lg">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={submitHandler}
                    className="absolute bottom-2 right-2  w-10 h-10 bg-green-500  rounded-full flex items-center justify-center shadow-lg opacity-0  translate-y-2  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105" >
                    <FaPlay className="text-black text-sm ml-0.5" />
                  </button>

                </div>

                <h2 className="text-white text-sm font-bold mt-3">
                  {album.name}
                </h2>

                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {album.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </div >
    </>
  );
}