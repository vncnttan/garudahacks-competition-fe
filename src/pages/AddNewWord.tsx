import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AudioRecorderField from "@/components/ui/form/AudioRecorderField";
import LanguageSelection from "@/components/ui/form/LanguageSelection";
import TagInput from "@/components/ui/form/TagInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddNewWord() {
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
                            <Label htmlFor="word">Language *</Label>
                            <LanguageSelection />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="word">Word *</Label>
                            <Input className="w-full" id="word" placeholder="Insert translation" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Word Pronunciation *</Label>
                            <AudioRecorderField />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Direct Translation (Bahasa) *</Label>
                            <TagInput />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="definition">Definition *</Label>
                            <Textarea className="w-full" id="definition" placeholder="Insert word definition" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="example">Example *</Label>
                            <Input className="w-full" id="example" placeholder="Insert word usage example" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="example">Example Translation (Bahasa) *</Label>
                            <Input className="w-full" id="example-id" placeholder="Insert example translation in Bahasa" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">Example Pronunciation *</Label>
                            <AudioRecorderField />
                        </div>

                        <Button>Add New Word</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}