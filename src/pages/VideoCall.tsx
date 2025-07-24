import IconButton from "@/components/ui/iconButton";
import { Input } from "@/components/ui/input";
import { UserRoundSearch } from "lucide-react";
import Peer from "peerjs";
import { useEffect, useRef, useState } from "react";

export default function VideoCall(){
    const peerInstance = useRef<Peer|null>(null);
    const localStream = useRef<MediaStream | null>(null);
    const localVideoRef = useRef<HTMLVideoElement | null>(null);
    const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
    const [peerID, setPeerID] = useState<string>("");

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
    
    // useEffect(()=>{
        // const peer = new Peer();
        // peerInstance.current = peer;

        // peer.on('open', (id) => {
        //     setPeerID(id);
        // })
    
        // try {
        //     peer.on('call', async (call) => {
        //         const stream = await navigator.mediaDevices.getUserMedia({video: true, audio : true});
                
        //         localStream.current = stream;
    
        //         if(localVideoRef.current){
        //             localVideoRef.current.srcObject = stream;
        //         }
    
        //         call.answer(stream);
    
        //         call.on('stream', (remoteStream) => {
        //             if(remoteVideoRef.current){
        //                 remoteVideoRef.current.srcObject = remoteStream;
        //             }
        //         })
        //     })
        // } catch(error) {
        //     console.error('failed to get local stream', error);
        // }
    // });


    return(
        <div>
            <div className="flex mx-60 my-20 space-x-3">
                <Input placeholder="what do you speak ..." className="h-12 bg-white border-0"/>
                <IconButton icon={UserRoundSearch}/>
            </div>

            <div>
                <video className="" ref={videoRef}/>
            </div>
        </div>
    )
}