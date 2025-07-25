import { useLanguagesQuery } from "@/api/query/use-language-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Loader2 } from "lucide-react";

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
                <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                {isLoading && (
                    <SelectItem value="loading" disabled>
                        <div className="flex gap-2 justify-center items-center w-full">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Loading...
                        </div>
                    </SelectItem>
                )}

                {error && (
                    <SelectItem value="error" disabled className="bg-custom-red text-primary">
                        Failed to load languages.
                    </SelectItem>
                )}

                {data && data.data.length > 0 &&
                    data.data.map((d) => (
                        <SelectItem value={d.languageCode}>{d.languageName}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}