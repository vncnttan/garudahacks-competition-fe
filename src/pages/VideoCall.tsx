import { useState } from "react";
import StartCall from "./StartCall";
import FindMatch from "./FindMatch";

export default function VideoCall() {
  const [currentState, setCurrentState] = useState<"start" | "call">("start");
  const [matchUserId, setMatchUserId] = useState<string>("");

  const handleMatchFound = (matchId: string) => {
    setCurrentState("call");
    setMatchUserId(matchId);
    console.log(matchUserId);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {currentState === "start" ? (
        <StartCall onMatchFound={handleMatchFound} />
      ) : (
        <FindMatch matchUserId="9b9b079e-3496-4684-935e-dc3f4b1c4b62" />
      )}
    </div>
  );
}
