import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Navbar />
                <main className="flex-1 h-screen overflow-y-auto">
                    <Outlet />
                </main>
            </div>

        </>
    );
    }