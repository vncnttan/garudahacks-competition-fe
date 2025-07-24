import type { LucideIcon } from "lucide-react";
import { Button } from "./button";

interface IconButtonProps{
    icon : LucideIcon
}

export default function IconButton({ icon : Icon } : IconButtonProps){
    return(
        <Button className="w-12 h-12 rounded-6 bg-white">
            <Icon className="text-black"/>
        </Button>
    )
}