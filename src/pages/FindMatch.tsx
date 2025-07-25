import ControlPanel from "@/components/ui/videocall/controlPanel";
import Video from "@/components/ui/videocall/video";
import Lottie from "lottie-react";
import Peer from "peerjs";
import { useEffect, useRef, useState } from "react"
import Loading from "../assets/animations/Loading.json"
import { io, Socket } from "socket.io-client";

export default function FindMatch(){
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFound, setIsFound] = useState<boolean>(false);
    const [matchUserId, setMatchUserId] = useState<string>("");
    const [myPeerId, setMyPeerId] = useState<string | undefined>(undefined)
    const peerInstance = useRef<Peer | null>(null);
    const localStream = useRef<MediaStream | null>(null);
    const localVideoRef = useRef<HTMLVideoElement | null>(null);
    const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

    const socket: Socket = io(import.meta.env.VITE_NODE_BASE_URL,{
        autoConnect:false,
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
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true,
                    })

                    localStream.current = stream;

                    if(localVideoRef.current){
                        localVideoRef.current.srcObject = stream
                        localVideoRef.current.muted = true
                        localVideoRef.current.play()
                    }

                    call.answer(stream)

                    call.on("stream", (remoteStream) => {
                        if(remoteVideoRef.current){
                            remoteVideoRef.current.srcObject = remoteStream
                            remoteVideoRef.current.play()
                        }

                        setIsLoading(false)
                        setIsFound(true)
                    })

                    call.on("close", () => {
                        console.log("Call ended")
                    })
                } catch (error) {
                    console.error("Failed to get local stream:", error)
                }
            })
        } catch (error) {
            console.error("Failed to initialize peer:", error)
        }
    }
    useEffect(() => {
        console.log("Use effect runned")
        initializePeer()
    }, [])

    useEffect(()=>{
        if(myPeerId){
            socket.connect()
            socket.on("connect", ()=>{
                console.log("Connected")
                socket.emit("video-call/queue/join", "jv", myPeerId);

                socket.on("match-found", ({ peerId }) => {
                    console.log("Match found with:", peerId);
                    setMatchUserId(peerId);
                    callPeer(peerId);
                });
            })
        }
    }, [myPeerId])

    useEffect(() => {
        if (!matchUserId || !peerInstance.current) return;

        setTimeout(() => {
            callPeer(matchUserId);
        }, 1000);

    }, [matchUserId]);

    const callPeer = async (remotePeerId: string) => {
        if (!peerInstance.current) return

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            })

            localStream.current = stream

            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream
                localVideoRef.current.muted = true
                localVideoRef.current.play()
            }

            const call = peerInstance.current.call(remotePeerId, stream)

            call.on("stream", (remoteStream : MediaProvider) => {
                if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = remoteStream
                remoteVideoRef.current.play()
                }

                setIsLoading(false)
                setIsFound(true)
            })

            call.on("close", () => {
                console.log("Call ended")
            })
        } catch (error) {
            
        }
    }

    return(
        <div className="flex flex-col items-center space-y-5">
            <div className="flex space-x-5">
                <Video username="jop" videoRef={localVideoRef}/>
                { isLoading && !isFound ? (
                    <Lottie animationData={Loading} loop={true} autoplay={true}/>
                ) : (
                    <Video username="jes" videoRef={remoteVideoRef}/>
                )}
            </div>
            <ControlPanel/>
        </div>
    )
}