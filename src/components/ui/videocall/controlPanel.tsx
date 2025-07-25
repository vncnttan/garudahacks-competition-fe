import { Captions, Gamepad2, Mic, SkipForward, Video } from "lucide-react";
import IconButton from "../iconButton";
import { useNavigate } from "react-router-dom";

export default function ControlPanel(){
    const navigate = useNavigate();

    const handleVideo = () => {

    }

    const handleMic = () => {

    }

    const handleTranscribe = () => {

    }

    const handleGame = () => {

    }

    const handleSkip = () => {
        // if (localStream.current) {
        //     localStream.current.getTracks().forEach((track) => track.stop());
        //     localStream.current = null;
        // }

        // if (peerInstance.current) {
        //     peerInstance.current.destroy();
        //     peerInstance.current = null;
        // }

        // setIsLoading(true);
        // setIsFound(false);

        // initializePeer();
    };

    return(
        <div className="flex space-x-2">
            <IconButton onClick={handleVideo} icon={Video}/>
            <IconButton onClick={handleMic} icon={Mic}/>
            <IconButton onClick={handleTranscribe} icon={Captions}/>
            <IconButton onClick={handleGame} icon={Gamepad2}/>
            <IconButton onClick={handleSkip} icon={SkipForward}/>
        </div>
    )
}