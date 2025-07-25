import IconButton from "@/components/ui/iconButton";
import { Input } from "@/components/ui/input";
import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import { UserRoundSearch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StartCallProps{
    onMatchFound : () => void;
    localStreamRef: React.MutableRefObject<MediaStream | null>;
}

export default function StartCall({onMatchFound, localStreamRef} : StartCallProps){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);

    
    useEffect(() => {
        const startCamera = async () => {
            if(localStreamRef.current) return

            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });

                localStreamRef.current = stream

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.muted = true;
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current?.play();
                    };
                }
            } catch (err) {
                alert(err);
            }
        };

        startCamera();
    }, []);

    const handleFindMatch = async () => {
        onMatchFound()
    }

    const handleMic = () => {
        const audioTrack = localStreamRef?.current?.getAudioTracks()[0];
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled;
            setIsMicOn(audioTrack.enabled);
        }
    };

    useEffect(() => {
        console.log(isCameraOn)
        console.log(localStreamRef)
    })

    const handleCam = () => {
        const videoTrack = localStreamRef?.current?.getVideoTracks()[0];
        if (videoTrack) {
            videoTrack.enabled = !videoTrack.enabled;
            setIsCameraOn(videoTrack.enabled);

            if (videoRef.current) {
                videoRef.current.srcObject = localStreamRef.current;
                videoRef.current.play().catch((e) => {
                    console.error("Video play error:", e);
                });
            }
        }
    };

    return(
        <div className="container mx-auto px-20 py-10 space-y-5">
            <div className="flex space-x-3">
                <Input placeholder="what do you speak ..." className="h-12 bg-white border-0"/>
                <IconButton onClick={handleFindMatch} icon={UserRoundSearch}/>
            </div>

            <div className="flex flex-col justify-center items-center space-y-5">
                <Video username="Jop" videoRef={videoRef}/>
                <ControlPanel isMicOn={isMicOn} isCamOn={isCameraOn} handleMic={handleMic} handleCam={handleCam}/>
            </div>
        </div>
    )
}