import DictionaryCard from "@/components/custom/dictionary-card";
import SearchWordCard from "@/components/custom/search-word-card";

export default function Landing() {
  return (
    <div className="container">
      <SearchWordCard />
      <DictionaryCard />
      <DictionaryCard />
    </div>
  );
}
