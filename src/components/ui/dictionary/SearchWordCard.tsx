import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";
import { ArrowLeftRight, Plus, Search } from "lucide-react";
import { Input } from "../input";
import LanguageSelection from "../form/LanguageSelection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { SearchWordVariables } from "@/types/api/Dictionary.ts";

export default function SearchWordCard({
  mutate,
  aiDefinitionMutate,
}: {
  mutate: (variables: SearchWordVariables) => void;
  aiDefinitionMutate: (variables: SearchWordVariables) => void;
}) {
  const [fromLanguage, setFromLanguage] = useState<string>("");
  const [toLanguage, setToLanguage] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();
  const onAddNewWord = () => {
    navigate("/add-new-word");
  };
  const onSwitchFromTo = () => {
    const oldFrom = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(oldFrom);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    aiDefinitionMutate({
      prompt: search,
      languageSrc: fromLanguage,
      languageDst: toLanguage,
    });
    mutate({
      languageSrc: fromLanguage,
      languageDst: toLanguage,
      prompt: search,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="w-full flex justify-between">
          <div>
            <CardTitle className="text-2xl">Search Words</CardTitle>
            <CardDescription>
              Find word translations from your preferred language.
            </CardDescription>
          </div>
          <Button onClick={onAddNewWord}>
            <Plus />
            Add New Word
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="w-full flex gap-2">
            <LanguageSelection
              selectedLanguage={fromLanguage}
              setSelectedLanguage={setFromLanguage}
            />

            <Button variant="ghost" onClick={onSwitchFromTo}>
              <ArrowLeftRight />
            </Button>

            <LanguageSelection
              selectedLanguage={toLanguage}
              setSelectedLanguage={setToLanguage}
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="search"
              placeholder="Search for a word"
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
