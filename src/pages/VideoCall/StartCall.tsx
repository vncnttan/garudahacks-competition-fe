import IconButton from "@/components/ui/iconButton";
import { Input } from "@/components/ui/input";
import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import { UserRoundSearch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StartCallProps{
    onMatchFound : () => void;
    localStreamRef?: React.RefObject<MediaStream | null>;
    localVideoRef: React.RefObject<HTMLVideoElement|null>;
    isMicOn: boolean;
    setIsMicOn: (value: boolean) => void;
    isCameraOn: boolean;
    setIsCameraOn: (value: boolean) => void;
    handleCam: () => void,
    handleMic: () => void
}

export default function StartCall({
    onMatchFound,
    // localStreamRef,
    localVideoRef,
    isMicOn,
    // setIsMicOn,
    isCameraOn,
    // setIsCameraOn,
    handleCam,
    handleMic
} : StartCallProps){
    
    const handleFindMatch = async () => {
        onMatchFound()
    }

    return(
        <div className="container mx-auto px-20 py-10 space-y-5">
            <div className="flex space-x-3">
                <Input placeholder="what do you speak ..." className="h-12 bg-white border-0"/>
                <IconButton onClick={handleFindMatch} icon={UserRoundSearch}/>
            </div>

            <div className="flex flex-col justify-center items-center space-y-5">
                <Video username="Jop" videoRef={localVideoRef}/>
                <ControlPanel isMicOn={isMicOn} isCamOn={isCameraOn} handleMic={handleMic} handleCam={handleCam}/>
            </div>
        </div>
    )
}