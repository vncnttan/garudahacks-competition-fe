import DictionaryCard from "@/components/ui/dictionary/DictionaryCard";
import SearchWordCard from "@/components/ui/dictionary/SearchWordCard";
import AiDescription from "@/components/ui/dictionary/AiDescription.tsx";
import { useSearchWordMutation } from "@/api/mutation/use-dictionary-mutations.ts";
import { useState } from "react";

export default function Dictionary() {
  const [datas, setDatas] = useState([]);
  const { mutate } = useSearchWordMutation({
    onSuccess: (data) => {
      console.log("Search successful", data);
      setDatas(data);
    },
    onError: (error) => {
      console.error("Error searching word:", error);
    },
  });
  return (
    <div className="container flex flex-col mx-auto p-10 xl:px-72 gap-5">
      <SearchWordCard mutate={mutate} />
      <AiDescription />
      {datas?.map((idx, data) => <DictionaryCard />)}
    </div>
  );
}
