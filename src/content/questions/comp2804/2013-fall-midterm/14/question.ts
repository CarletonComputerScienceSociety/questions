import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "What does the summation $ sum_{k=7}^{n} \binom{k-1}{6} $ count?",
  options: [
    { label: "${1, 2, 3, ..., n}$", correct: false },
    { label: "${1, 2, 3, ..., n}$", correct: true },
    { label: "${1, 2, 3, ..., n}$", correct: false },
    { label: "$None of the above.$", correct: false },
  ],
};
