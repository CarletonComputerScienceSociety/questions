import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "Let $A$ be a set of size 7 and let $B$ be a set of size 13. How many one-to-one functions $f: A \\rightarrow B$ are there?",
  options: [
    { label: "$\\frac{6!}{13!}$", correct: false },
    { label: "$\\frac{13!}{5!}$", correct: false },
    { label: "$\\frac{13!}{6!}$", correct: true },
    { label: "$\\frac{13!}{7!}$", correct: false },
  ],
};
