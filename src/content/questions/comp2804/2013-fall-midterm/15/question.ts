import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "If you flip a fair coin 4 times, what is the probability that the coin comes up heads exactly twice?",
  options: [
    { label: "$1/{{4}\\choose{2}}$", correct: false },
    { label: "$2/2^{4}$", correct: true },
    { label: "$2^{4}/{{4}\\choose{2}}$", correct: false },
    { label: "${{4}\\choose{2}}/2^{4}$", correct: false },
  ],
};
