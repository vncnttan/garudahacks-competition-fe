import { Button } from "../button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import LanguageSelection from "../form/LanguageSelection";
import { Input } from "../input";
import { Label } from "../label";
import { Textarea } from "../textarea";

export default function AddNewWordCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New Word</CardTitle>
                <CardDescription>Add new word translations from your preferred language.</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="word">Language *</Label>
                        <LanguageSelection/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="word">Word *</Label>
                        <Input className="w-full" id="word" placeholder="Insert translation" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="definition">Definition *</Label>
                        <Textarea className="w-full" id="definition" placeholder="Insert word definition"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="example">Example *</Label>
                        <Input className="w-full" id="example" placeholder="Insert word usage example" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="example">Example Translation (Bahasa) *</Label>
                        <Input className="w-full" id="example-id" placeholder="Insert example translation in Bahasa" />
                    </div>

                    <Button>Add New Word</Button>
                </div>

            </CardContent>
        </Card>
    )
}