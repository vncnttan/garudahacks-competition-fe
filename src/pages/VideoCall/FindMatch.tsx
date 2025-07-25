import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import Lottie from "lottie-react";
import Peer from "peerjs";
import { useEffect, useRef, useState } from "react"
import Loading from "../../assets/animations/Loading.json"
import { io, Socket } from "socket.io-client";

interface FindMatchProps {
    localStreamRef: React.RefObject<MediaStream | null>
    localVideoRef: React.RefObject<HTMLVideoElement | null>;
    onMatchFound: () => void;
    isMicOn: boolean;
    setIsMicOn: (value: boolean) => void;
    isCameraOn: boolean;
    setIsCameraOn: (value: boolean) => void;
    handleCam: () => void,
    handleMic: () => void
}

export default function FindMatch({
    // onMatchFound,
    localStreamRef,
    localVideoRef,
    isMicOn,
    // setIsMicOn,
    isCameraOn,
    // setIsCameraOn,
    handleCam,
    handleMic
}: FindMatchProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFound, setIsFound] = useState<boolean>(false);
    const [matchUserId, setMatchUserId] = useState<string>("");
    const [myPeerId, setMyPeerId] = useState<string | undefined>(undefined);

    const peerInstance = useRef<Peer | null>(null);
    const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
    
    const socket: Socket = io(import.meta.env.VITE_NODE_BASE_URL, {
        autoConnect: false,
    })

    const initializePeer = async () => {
        try {
            const peer = new Peer();
            peerInstance.current = peer;
            peer.on("open", (id) => {
                console.log("My peer ID is:", id)
                setMyPeerId(id)
            })
            peer.on("error", (error) => {
                console.error("Peer error:", error)
            })
            peer.on("call", async (call) => {
                try {
                    const stream = localStreamRef.current;
                    if (!stream) return
                    call.answer(stream)
                    call.on("stream", (remoteStream: MediaStream) => {
                        if (remoteVideoRef.current) {
                            remoteVideoRef.current.srcObject = remoteStream
                            remoteVideoRef.current.onloadedmetadata = () => {
                                remoteVideoRef.current?.play().catch(err => console.error("Remote video play error:", err));
                            };
                        }
                        setIsLoading(false)
                        setIsFound(true)
                    });
                    call.on("close", () => {
                        console.log("Call ended")
                    });
                } catch (error) {
                    console.error("Failed to get local stream:", error)
                }
            })
        } catch (error) {
            console.error("Failed to initialize peer:", error)
        }
    }

    const callPeer = async (remotePeerId: string) => {
        if (!peerInstance.current || !localStreamRef.current) return
        try {
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = localStreamRef.current
                localVideoRef.current.onloadedmetadata = () => {
                    localVideoRef.current?.play().catch(err => console.error("Local video play error:", err));
                };
            }

            const call = peerInstance.current.call(remotePeerId, localStreamRef.current)
            call.on("stream", (remoteStream: MediaStream) => {
                console.log("callonstreamremotestream?", remoteStream)
                if (remoteVideoRef.current) {
                    remoteVideoRef.current.srcObject = remoteStream
                    remoteVideoRef.current.onloadedmetadata = () => {
                        remoteVideoRef.current?.play().catch(err => console.error("Remote video play error:", err));
                    };
                }
                setIsLoading(false)
                setIsFound(true)
            })
            call.on("close", () => {
                console.log("Call ended")
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("init peer")
        initializePeer()
    }, [])

    useEffect(() => {
        if (myPeerId) {
            socket.connect()
            socket.on("connect", () => {
                console.log("Connected")
                socket.emit("video-call/queue/join", "jv", myPeerId);
                socket.on("match-found", ({ peerId }) => {
                    console.log("Match found with:", peerId);
                    setMatchUserId(peerId);
                    callPeer(peerId);
                });
            })
        }
    }, [myPeerId]);

    // useEffect(() => {
    //     if (!matchUserId || !peerInstance.current) return;
    //     setTimeout(() => {
    //         callPeer(matchUserId);
    //     }, 1000);
    // }, [matchUserId]);

    console.log("local", localStreamRef.current, localVideoRef.current?.srcObject)
    console.log("remote", remoteVideoRef.current?.srcObject)

    return (
        <div className="flex flex-col items-center space-y-5">
            <div className="flex space-x-5">
                <Video username="jop" videoRef={localVideoRef} />
                {isLoading && !isFound ? (
                    <Lottie animationData={Loading} loop={true} autoplay={true} />
                ) : (
                    <Video username="jes" videoRef={remoteVideoRef} />
                )}
            </div>
            <ControlPanel
                handleMic={handleMic}
                handleCam={handleCam}
                isMicOn={isMicOn}
                isCamOn={isCameraOn}
            />
        </div>
    )
}