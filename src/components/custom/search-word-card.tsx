
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeftRight, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";

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
                <div className="flex flex-col gap-4">
                    <div className="w-full flex gap-4">
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