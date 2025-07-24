import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

export interface LanguageSelectionProps {
    selectedLanguage: string,
    setSelectedLanguage: (value: string) => void
}
export default function LanguageSelection({
    selectedLanguage,
    setSelectedLanguage
}: LanguageSelectionProps) {
    return (
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a language"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
        </Select>
    )
}