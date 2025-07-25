import { useRef, useState } from "react"
import StartCall from "./StartCall";
import FindMatch from "./FindMatch";

export default function VideoCall(){
    const [currentState, setCurrentState] = useState<"start" | "call">("start");
    const localStreamRef = useRef<MediaStream | null>(null);

    const handleMatch = () => {
        setCurrentState("call");
    }

    return(
        <div className="container mx-auto h-screen flex justify-center items-center">
            {currentState === "start" ? (
                <StartCall localStreamRef={localStreamRef} onMatchFound={handleMatch}/>
            ) : (
                <FindMatch localStreamRef={localStreamRef}/>
            )}
        </div>
    )
}
