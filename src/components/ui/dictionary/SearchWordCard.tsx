
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import { ArrowLeftRight, Plus, Search } from "lucide-react";
import { Input } from "../input";
import LanguageSelection from "../form/LanguageSelection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchWordCard() {
    const [fromLanguage, setFromLanguage] = useState<string>('')
    const [toLanguage, setToLanguage] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    const navigate = useNavigate();
    const onAddNewWord = () => {
        navigate('/add-new-word');
    }
    const onSwitchFromTo = () => {
        const oldFrom = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(oldFrom);
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
                        <LanguageSelection
                            placeholder="Select input language"
                            selectedLanguage={fromLanguage}
                            setSelectedLanguage={setFromLanguage} />

                        <Button
                            variant="ghost"
                            onClick={onSwitchFromTo}>
                            <ArrowLeftRight />
                        </Button>

                        <LanguageSelection
                            placeholder="Select output language"
                            selectedLanguage={toLanguage}
                            setSelectedLanguage={setToLanguage} />
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            id="search"
                            placeholder="Search for a word"
                            className="pl-10"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}