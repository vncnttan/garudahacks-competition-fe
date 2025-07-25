import DictionaryCard from "@/components/ui/dictionary/DictionaryCard";
import SearchWordCard from "@/components/ui/dictionary/SearchWordCard";
import AiDescription from "@/components/ui/dictionary/AiDescription.tsx";

export default function Dictionary() {
  return (
    <div className="container flex flex-col mx-auto p-10 xl:px-72 gap-5">
      <SearchWordCard />
      <AiDescription />
      <DictionaryCard />
      <DictionaryCard />
    </div>
  );
}
