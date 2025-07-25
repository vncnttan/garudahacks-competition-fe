import { useEffect, useRef, useState } from "react"
import StartCall from "./StartCall";
import FindMatch from "./FindMatch";

export default function VideoCall() {
    const [currentState, setCurrentState] = useState<"start" | "call">("start");
    const localStreamRef = useRef<MediaStream | null>(null);
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);

    const handleMatch = () => {
        setCurrentState("call");
    }
    const startCamera = async () => {
        if (localStreamRef.current) return
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            localStreamRef.current = stream
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
                localVideoRef.current.muted = true;
                localVideoRef.current.onloadedmetadata = () => {
                    localVideoRef.current?.play();
                };
            }
        } catch (err) {
            alert(err);
        }
    };

    const handleCam = () => {
        const videoTrack = localStreamRef?.current?.getVideoTracks()[0];
        if (videoTrack) {
            videoTrack.enabled = !videoTrack.enabled;
            setIsCameraOn(videoTrack.enabled);

            if (localVideoRef.current) {
                localVideoRef.current.srcObject = localStreamRef.current;
                localVideoRef.current.play().catch((e) => {
                    console.error("Video play error:", e);
                });
            }
        }
    };

    const handleMic = () => {
        const audioTrack = localStreamRef?.current?.getAudioTracks()[0];
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled;
            setIsMicOn(audioTrack.enabled);
        }
    };

    useEffect(() => {
        startCamera();
    }, []);

    console.log('videocall', localStreamRef.current, localVideoRef.current?.srcObject)

    return (
        <div className="flex justify-center items-center h-screen">
            {currentState === "start" ? (
                <StartCall
                    localStreamRef={localStreamRef}
                    localVideoRef={localVideoRef}
                    onMatchFound={handleMatch}
                    isMicOn={isMicOn}
                    setIsMicOn={setIsMicOn}
                    isCameraOn={isCameraOn}
                    setIsCameraOn={setIsCameraOn}
                    handleCam={handleCam}
                    handleMic={handleMic}
                />
            ) : (
                <FindMatch
                    localStreamRef={localStreamRef}
                    localVideoRef={localVideoRef}
                    onMatchFound={handleMatch}
                    isMicOn={isMicOn}
                    setIsMicOn={setIsMicOn}
                    isCameraOn={isCameraOn}
                    setIsCameraOn={setIsCameraOn}
                    handleCam={handleCam}
                    handleMic={handleMic}
                />
            )}
        </div>
    )
}
