import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "Each person in a group of $ n $ people has a last name consisting of two uppercase letters. For what values of $ n $ can we guarantee that there are at least two people with the same last name?",
  options: [
    { label: "$n \\geq 26$", correct: false },
    { label: "$n \\geq 52$", correct: false },
    { label: "$n \\geq 676$", correct: false },
    { label: "$n \\geq 677$", correct: true },
  ],
};
