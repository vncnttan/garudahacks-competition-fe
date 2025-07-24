
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import { ArrowLeftRight, Plus } from "lucide-react";
import { Input } from "../input";
import LanguageSelection from "../form/LanguageSelection";
import { useNavigate } from "react-router-dom";

export default function SearchWordCard() {
    const navigate = useNavigate();
    function onAddNewWord () {
        navigate('/add-new-word');
    }

    return (
        <Card>
            <CardHeader>
                <div className="w-full flex justify-between">
                    <div>
                        <CardTitle className="text-2xl">Search Words</CardTitle>
                        <CardDescription>Find word translations from your preferred language.</CardDescription>
                    </div>
                    <Button onClick={onAddNewWord}>
                        <Plus />
                        Add New Word
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-5">
                    <div className="w-full flex gap-2">
                        <LanguageSelection/>
                        <Button variant="ghost"><ArrowLeftRight /></Button>
                        <LanguageSelection/>
                    </div>
                    <div>
                        <Input id="search" placeholder="Search for a word" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}