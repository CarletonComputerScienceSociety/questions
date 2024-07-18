import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "How many bitstrings of length 55 start with 101 or end with 1111?",
  options: [
    { label: "$2^{52} + 2^{51}$", correct: false },
    { label: "$2^{55} - 2^{48}$", correct: false },
    { label: "$2^{55} - 2^{52} - 2^{51}$", correct: false },
    { label: "$2^{52} + 2^{51} - 2^{48}$", correct: true },
  ],
};
