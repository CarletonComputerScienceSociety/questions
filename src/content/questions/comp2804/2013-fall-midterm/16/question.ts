import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "If you choose an element $ x $ uniformly at random from the set $ {1, 2, ..., 100} $, what is the probability that $ x $ is divisible by 4 or 5?",
  options: [
    { label: "$9/100$", correct: false },
    { label: "$1/5$", correct: false },
    { label: "$2/5$", correct: true },
    { label: "$45/100$", correct: false },
  ],
};
