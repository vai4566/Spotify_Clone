import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import Player from "../component/player";
//import Header from "../component/header";

export default function Home() {
    return (
        <div className="h-screen bg-black overflow-hidden">
            <Navbar />

            <div className="pt-16 h-full">
                <div className="flex h-[calc(100vh-64px-60px)] overflow-hidden">
                    <Sidebar />

                  {/*  <div className="flex flex-col flex-1 bg-neutral-900 rounded-lg ml-2 overflow-hidden">
                        <Header /></div>*/}

                        <div className="flex-1 overflow-y-auto ml-2 rounded-lg">
                            <Outlet />
                        </div>
                    
                </div>
            </div>

            <Player />
        </div>
    );
}