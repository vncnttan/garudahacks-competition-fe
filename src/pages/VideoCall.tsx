import { useState } from "react"
import StartCall from "./StartCall";
import FindMatch from "./FindMatch";

export default function VideoCall(){
    const [currentState, setCurrentState] = useState<"start" | "call">("start");
    const [matchUserId, setMatchUserId] = useState<string>("");

    const handleMatch = () => {
        setCurrentState("call");
    }

    return(
        <div className="flex justify-center items-center h-screen">
            {currentState === "start" ? (
                <StartCall onMatchFound={handleMatch}/>
            ) : (
                <FindMatch/>
            )}
        </div>
    )
}