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
        <div className="flex justify-center items-center h-screen">
            {currentState === "start" ? (
                <StartCall localStreamRef={localStreamRef} onMatchFound={handleMatch}/>
            ) : (
                <FindMatch localStreamRef={localStreamRef}/>
            )}
        </div>
    )
}
