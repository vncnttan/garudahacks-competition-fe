import { Captions, Gamepad2, Mic, MicOff, SkipForward, Video, VideoOff } from "lucide-react";
import IconButton from "../iconButton";
import { useNavigate } from "react-router-dom";

interface ControlPanelProps {
    handleMic : () => void,
    handleCam : () => void,
    isMicOn : boolean,
    isCamOn : boolean,
}

export default function ControlPanel({handleMic, handleCam, isMicOn, isCamOn} : ControlPanelProps){
    const navigate = useNavigate();

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
            <IconButton onClick={handleCam} icon={isCamOn ? Video : VideoOff}/>
            <IconButton onClick={handleMic} icon={isMicOn ? Mic : MicOff}/>
            <IconButton onClick={handleTranscribe} icon={Captions}/>
            <IconButton onClick={handleGame} icon={Gamepad2}/>
            <IconButton onClick={handleSkip} icon={SkipForward}/>
        </div>
    )
}