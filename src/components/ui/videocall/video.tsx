interface VideoProps{
    videoRef: React.RefObject<HTMLVideoElement | null>;
    username: string;
}
export default function Video({videoRef, username} : VideoProps){
    return(
        <div className="relative w-full max-h-[600px]">
            <video className="object-cover w-full max-h-[600px] rounded-md" ref={videoRef}/>
            <label className="absolute bottom-0 left-0 m-3 py-2 px-4 rounded-md text-sm bg-[#FFE2E4]">{username}</label>
        </div>
    )
}