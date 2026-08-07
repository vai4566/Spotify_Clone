import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-neutral-900 flex flex-col rounded-lg ml-2 p-2">

      {/* Library Header */}
      <div className="flex items-center justify-between px-3 py-4">
        <h2 className="text-white font-bold text-base">
          Your Library
        </h2>

        <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer">
          <FaPlus size={16} className="text-white" />
        </button>
      </div>

      {/* Create Playlist */}
      <div className="w-full bg-neutral-800 rounded-lg p-4 mt-2">
        <p className="text-white text-sm font-semibold">
          Create your first playlist
        </p>

        <p className="text-gray-300 text-xs mt-2">
          It's easy, we'll help you
        </p>

        <button className="mt-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition cursor-pointer">
          Create playlist
        </button>
      </div>

      {/* Podcasts */}
      <div className="w-full bg-neutral-800 rounded-lg p-4 mt-3">
        <p className="text-white text-sm font-semibold">
          Let's find some podcasts 
        </p>

        <p className="text-gray-300 text-xs mt-2">
          We'll keep you updated 
        </p>

        <button className="mt-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition cursor-pointer">
          Browse podcasts
        </button>
      </div>

    </div>
  );
}