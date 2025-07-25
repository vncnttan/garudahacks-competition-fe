import { useMeQuery } from "@/api/query/use-user-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LanguageSelection from "@/components/ui/form/LanguageSelection";
import IconButton from "@/components/ui/iconButton";
import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import { UserRoundSearch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StartCallProps {
    onMatchFound: () => void;
    localStreamRef: React.MutableRefObject<MediaStream | null>;
}

export default function StartCall({ onMatchFound, localStreamRef }: StartCallProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const { data } = useMeQuery(true)

    useEffect(() => {
        const startCamera = async () => {
            if (localStreamRef.current) return
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

    return (
        <div className="flex flex-col gap-5 w-full py-10">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Video Chat</CardTitle>
                    <CardDescription>Connect with random people through video chat and explore new cultures.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-5">
                        <LanguageSelection placeholder="What language do you speak?" />
                        <IconButton onClick={handleFindMatch} icon={UserRoundSearch} />
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col justify-center items-center space-y-5">
                <Video username={data?.data.username || "You"} videoRef={videoRef} />
                <ControlPanel isMicOn={isMicOn} isCamOn={isCameraOn} handleMic={handleMic} handleCam={handleCam} />
            </div>
        </div>
    )
}