import type { LucideIcon } from "lucide-react";
import { Button } from "./button";

interface IconButtonProps{
    icon : LucideIcon;
    onClick : () => void;
}

export default function IconButton({ icon : Icon, onClick } : IconButtonProps){
    return(
        <Button onClick={onClick} className="w-12 h-12 rounded-full bg-white">
            <Icon className="text-black"/>
        </Button>
    )
}