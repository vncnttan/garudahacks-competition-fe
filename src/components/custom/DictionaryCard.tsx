import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function DictionaryCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex gap-2">
                    <CardTitle>Word</CardTitle>
                    <CardTitle>Language</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div>Definition of the word</div>
                <div className="bg-secondary p-2 rounded-">
                    <div className="text-primary">Example:</div>
                    <div className="w-full flex justify-between">
                        <div className="italic">"Example of the word (example word in indonesia)"</div>
                        <div className="text-primary">
                            Play audio
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="w-full flex justify-between">
                    <div>by username - date</div>
                    <div>View more definitions for "<span className="text-primary">Mangan</span>"</div>
                </div>
            </CardFooter>
        </Card>
    )
}