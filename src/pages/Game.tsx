import Wordle from "@/components/common/wordle/wordle";
import type { RefObject } from "react";

interface GameProps {
    localVideoRef : RefObject<HTMLVideoElement>;
    remoteVideoRef : RefObject<HTMLVideoElement>;
}

export default function Game({localVideoRef, remoteVideoRef} : GameProps) {
    return (
        <div className="flex justify-center items-center h-screen space-x-5">
            {/* Video */}
            <div className="flex flex-col space-y-8">
                <video ref={localVideoRef} className="w-100 h-100 rounded-md"/>
                <video ref={remoteVideoRef} className="w-100 h-100 rounded-md"/>
            </div>

            <Wordle/>
        </div>
    )
}