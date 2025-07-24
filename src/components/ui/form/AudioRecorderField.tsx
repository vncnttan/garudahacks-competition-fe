import { useReactMediaRecorder } from "react-media-recorder";
import { Button } from "../button";
import { Mic, Square } from "lucide-react";
import { useEffect } from "react";

interface AudioRecorderFieldProps {
    setMediaBlobUrl: (url: string) => void
}
export default function AudioRecorderField({ setMediaBlobUrl }: AudioRecorderFieldProps) {
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

    useEffect(() => {
        if (mediaBlobUrl) {
            setMediaBlobUrl(mediaBlobUrl);
        }
    }, [mediaBlobUrl, setMediaBlobUrl])

    function toggleRecord() {
        if (status !== 'recording') startRecording();
        else stopRecording();
    }

    return (
        <div className="flex items-center gap-5">
            <audio className="w-full" controls src={mediaBlobUrl} />
            <Button onClick={toggleRecord} className="w-[100px]">
                {status === 'recording' ? <Square /> : <Mic />}
                {status === 'recording' ? "Stop" : "Record"}
            </Button>
        </div>
    )
}