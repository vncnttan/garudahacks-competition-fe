import DictionaryCard from "@/components/ui/dictionary/dictionary-card";
import SearchWordCard from "@/components/ui/dictionary/search-word-card";

export default function Dictionary() {
  return (
    <div className="container flex flex-col mx-auto py-10 gap-5 ">
      <SearchWordCard />
      <DictionaryCard />
      <DictionaryCard />
    </div>
  );
}
