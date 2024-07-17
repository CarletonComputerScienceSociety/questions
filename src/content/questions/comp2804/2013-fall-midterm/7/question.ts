import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "How many bitstrings of length 13 contain exactly 3 zeros?",
  options: [
    { label: "${13}\\choose{10}$", correct: false },
    { label: "$13!/3!$", correct: true },
    { label: "$2^{13} - {{13}\\choose{3}}$", correct: false },
    { label: "$2^{13} - 3$", correct: false },
  ],
};
