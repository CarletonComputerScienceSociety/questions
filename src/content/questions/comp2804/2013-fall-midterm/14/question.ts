import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "What does the summation $ \\sum_{k=7}^{n} \\binom{k-1}{6} $ count?",
  options: [
    { label: "The numbre of subsets of ${1, 2, 3, ..., n}$ having size 5", correct: false },
    { label: "The numbre of subsets of ${1, 2, 3, ..., n}$ having size 6", correct: false },
    { label: "The numbre of subsets of ${1, 2, 3, ..., n}$ having size 7", correct: true },
    { label: "None of the above.", correct: false },
  ],
};
