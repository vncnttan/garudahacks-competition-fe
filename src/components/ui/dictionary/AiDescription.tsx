import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

export default function AiDescription() {
  return (
    <>
      <Card className="bg-yellow-100 rounded-md min-h-28">
        <CardHeader>
          <CardTitle className="text-primary text-2xl flex flex-row gap-4 place-items-center">
            <Lightbulb color={"red"} />
            AI Answer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              "Opo" dalam bahasa Indonesia berarti apa. "Opo" adalah variasi
              dari kata "apa" dalam bahasa Jawa.{" "}
            </div>
            <div className="text-xs">
              Know about these words?
              <Button variant={"link"} className={"cursor-pointer"}>
                Add them to our dictionary
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
