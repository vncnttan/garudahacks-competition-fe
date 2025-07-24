import { ChevronRight, ThumbsDownIcon, ThumbsUpIcon, Volume2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function DictionaryCard() {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <div className="flex gap-4 items-baseline">
                    <CardTitle className="text-2xl">Word</CardTitle>
                    <CardTitle className="text-custom-gray">Language</CardTitle>
                </div>
                <Button size="icon">
                    <Volume2 />
                </Button>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
                <div className="w-full flex justify-between">
                    <div className="flex gap-2">
                        <Badge className="text-md">makan</Badge>
                        <Badge className="text-md">makan</Badge>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost"><ThumbsUpIcon/>100</Button>
                        <Button variant="ghost"><ThumbsDownIcon/>100</Button>
                    </div>
                </div>

                <div>Definition of the word</div>
                <div className="bg-secondary px-4 py-2 rounded-lg">
                    <div className="text-primary">Example:</div>
                    <div className="w-full flex justify-between items-baseline">
                        <div className="italic">"Example of the word (example word in indonesia)"</div>
                        <Button variant="link">
                            <Volume2 />
                            Play audio
                        </Button>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="w-full flex justify-between items-center">
                <div className="text-custom-gray">by username - date</div>
                <Button variant="link" className="text-black">
                    View more definitions for "Mangan"<ChevronRight/>
                </Button>
            </CardFooter>
        </Card>
    )
}