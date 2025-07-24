import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

export default function LanguageSelection() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
        </Select>
    )
}