
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import { ArrowLeftRight, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Input } from "../input";

export default function SearchWordCard() {
    return (
        <Card>
            <CardHeader>
                <div className="w-full flex justify-between">
                    <div>
                        <CardTitle className="text-2xl">Search Words</CardTitle>
                        <CardDescription>Find word translations from your preferred language.</CardDescription>
                    </div>
                    <Button>
                        <Plus />
                        Add New Word
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-5">
                    <div className="w-full flex gap-5">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button>
                            <ArrowLeftRight />
                        </Button>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Input placeholder="Search for a word" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}