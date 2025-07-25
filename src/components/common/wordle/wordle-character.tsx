import { cn } from "@/lib/utils.ts";
import { motion } from "framer-motion";

const variants = {
  initial: {
    rotateY: 0,
  },
  revealed: {
    rotateY: 360,
  },
};

export default function WordleCharacter({
  character,
  condition,
  index,
  isRevealed,
}: {
  character: string;
  condition: "correct" | "present" | "absent" | "";
  index: number;
  isRevealed: boolean;
}) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={isRevealed ? "revealed" : "initial"}
      transition={{
        delay: (index % 5) * 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "w-16 h-16 flex justify-center place-items-center bg-white text-4xl font-semibold  border-gray-200 border-2",
        condition === "correct"
          ? "bg-green-500"
          : condition === "present"
            ? "bg-yellow-500"
            : condition === "absent"
              ? "bg-gray-300"
              : "",
      )}
    >
      <div
        style={{ backfaceVisibility: "hidden" }}
        className={cn(isRevealed ? "text-white" : "text-black")}
      >
        {character.toUpperCase()}
      </div>
    </motion.div>
  );
}
