export default function Header() {
    return (
        <div className="w-full sticky top-0 z-20 bg-neutral-900 px-6 py-4 flex gap-3">
            <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold cursor-pointer">
                All
            </button>

            <button className="px-4 py-2 rounded-full bg-neutral-800 text-white text-sm hover:bg-neutral-700 cursor-pointer">
                Music
            </button>

            <button className="px-4 py-2 rounded-full bg-neutral-800 text-white text-sm hover:bg-neutral-700 cursor-pointer">
                Podcasts
            </button>
        </div>
    )
}
