import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "Which of the following is true?",
  options: [
    {
      label: "$\\sum_{k=0}^{n} 5^{k}{{n}\\choose{k}} = 6^{n}$",
      correct: true,
    },
    {
      label: "$\\sum_{k=0}^{n} 4^{n-k}5^{k}{{n}\\choose{k}} = 8^{n}$",
      correct: false,
    },
    {
      label: "$\\sum_{k=0}^{n} 5^{k}{{n}\\choose{k}} = 5^{n}$",
      correct: false,
    },
    {
      label: "$\\sum_{k=0}^{n} 4^{k}5^{n-k}{{n}\\choose{k}} = 20^{n}$",
      correct: false,
    },
  ],
};
