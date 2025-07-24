import IconButton from "@/components/ui/iconButton";
import { Input } from "@/components/ui/input";
import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import { UserRoundSearch } from "lucide-react";
import { useEffect, useRef } from "react";

interface StartCallProps{
    onMatchFound : (matchId : string) => void;
}

export default function StartCall({onMatchFound} : StartCallProps){
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });

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
        const matchId = "asd";

        if(matchId){
            onMatchFound(matchId)
        }
    }

    return(
        <div className="container mx-auto px-20 py-10 space-y-5">
            <div className="flex space-x-3">
                <Input placeholder="what do you speak ..." className="h-12 bg-white border-0"/>
                <IconButton onClick={handleFindMatch} icon={UserRoundSearch}/>
            </div>

            <div className="flex flex-col justify-center items-center space-y-5">
                <Video username="Jop" videoRef={videoRef}/>
                <ControlPanel/>
            </div>
        </div>
    )
}