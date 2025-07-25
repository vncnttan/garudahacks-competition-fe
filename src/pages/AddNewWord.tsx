import { useAddWordMutation } from "@/api/mutation/use-dictionary-mutations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AudioRecorderField from "@/components/ui/form/AudioRecorderField";
import LanguageSelection from "@/components/ui/form/LanguageSelection";
import TagInput from "@/components/ui/form/TagInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Tag } from "react-tag-input";

export default function AddNewWord() {
    const [language, setLanguage] = useState('');
    const [word, setWord] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [translationTag, setTranslationTag] = useState<Tag[]>([]);
    const [definition, setDefinition] = useState('');
    const [example, setExample] = useState('');
    const [exampleTranslation, setExampleTranslation] = useState('');
    const [examplePronunciation, setExamplePronunciation] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { mutate, isPending } = useAddWordMutation({
        onSuccess: () => {
            navigate('/');
        },
        onError: (error) => {
            setError(error.message);
        }
    });

    const handleAddWord = async () => {
        setError("");
        if (
            !language ||
            !word ||
            !pronunciation ||
            translationTag.length === 0 ||
            !definition ||
            !example ||
            !exampleTranslation ||
            !examplePronunciation
        ) {
            setError("Please fill in all required fields.");
            return;
        }
        const translation = translationTag.map((tag) => tag.id);
        const pronunciationBlob = await fetch(pronunciation).then((file) => file.blob());
        const exampleBlob = await fetch(examplePronunciation).then((file) => file.blob());
        const newWord = {
            word,
            definition,
            example,
            exampleTranslation,
            directTranslation: translation,
            languageCode: language,
            pronunciation: pronunciationBlob,
            examplePronunciation: exampleBlob
        };
        mutate(newWord);
    };

    return (
        <div className="container flex flex-col mx-auto p-10 xl:px-72 gap-5">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Add New Word</CardTitle>
                    <CardDescription>Add new word translations from your preferred language.</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="language">Language *</Label>
                            <LanguageSelection
                                selectedLanguage={language}
                                setSelectedLanguage={(value: string) => setLanguage(value)} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="word">Word *</Label>
                            <Input
                                className="w-full"
                                id="word"
                                placeholder="Insert translation"
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Word Pronunciation *</Label>
                            <AudioRecorderField setMediaBlobUrl={setPronunciation} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Direct Translation (Bahasa) *</Label>
                            <TagInput tags={translationTag} setTags={setTranslationTag} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="definition">Definition *</Label>
                            <Textarea
                                className="w-full"
                                id="definition"
                                placeholder="Insert word definition"
                                value={definition}
                                onChange={(e) => setDefinition(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="example">Example *</Label>
                            <Input
                                className="w-full"
                                id="example"
                                placeholder="Insert word usage example"
                                value={example}
                                onChange={(e) => setExample(e.target.value)} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="example">Example Translation (Bahasa) *</Label>
                            <Input
                                className="w-full"
                                id="example-id"
                                placeholder="Insert example translation in Bahasa"
                                value={exampleTranslation}
                                onChange={(e) => setExampleTranslation(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Example Pronunciation *</Label>
                            <AudioRecorderField setMediaBlobUrl={setExamplePronunciation} />
                        </div>

                        {error !== "" && <Label className="text-primary">{error}</Label>}

                        <Button onClick={handleAddWord} disabled={isPending}>
                            {isPending ? "Adding..." : "Add New Word"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}