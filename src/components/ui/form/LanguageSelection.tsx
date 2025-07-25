import { useLanguagesQuery } from "@/api/query/use-language-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

export interface LanguageSelectionProps {
    selectedLanguage: string,
    setSelectedLanguage: (value: string) => void
}
export default function LanguageSelection({
    selectedLanguage,
    setSelectedLanguage
}: LanguageSelectionProps) {
    const { data, isLoading, error } = useLanguagesQuery();

    return (
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a language"/>
            </SelectTrigger>
            <SelectContent>
                {data && data.data.length > 0 &&
                    data.data.map((d) => (
                        <SelectItem value={d.languageCode}>{d.languageName}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}