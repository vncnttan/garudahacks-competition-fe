import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AudioRecorderField from "@/components/ui/form/AudioRecorderField";
import LanguageSelection from "@/components/ui/form/LanguageSelection";
import { Label } from "@radix-ui/react-select";
import { ArrowLeftRight, Languages } from "lucide-react";
import { useState } from "react";

export default function VoiceTranslation() {
    const [fromLanguage, setFromLanguage] = useState<string>('');
    const [toLanguage, setToLanguage] = useState<string>('');
    const [voiceUrl, setVoiceUrl] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSwitchFromTo = () => {
        const oldFrom = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(oldFrom);
    }

    const handleSubmitTranslate = async () => {
        setError("")
        if (
            !fromLanguage ||
            !toLanguage ||
            !voiceUrl
        ) {
            setError("Please fill in all field needed.");
            return;
        }
        // const voiceBlob = await fetch(voiceUrl).then((file) => file.blob());
        // const newTranslate = {}
    }

    return (
        <div className="container flex flex-col mx-auto p-10 xl:px-72 gap-5">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Voice Translation</CardTitle>
                    <CardDescription>Select the languages and record your voice for an instant translation.</CardDescription>
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
                        <AudioRecorderField setMediaBlobUrl={setVoiceUrl}></AudioRecorderField>
                        {error !== "" && <Label className="text-primary">{error}</Label>}
                        <Button
                            onClick={handleSubmitTranslate}
                        >
                            <Languages />Translate
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-5 w-full h-100">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">Original</CardTitle>
                        <CardDescription>Your recorded voice transcribed.</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">Translation</CardTitle>
                        <CardDescription>Record something to get a translation.</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}