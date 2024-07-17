import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "If you answer each question in this midterm by choosing an answer uniformly at random, what is the probability that you get all answers correct?",
  options: [
    { label: "$1/17^{4}$", correct: false },
    { label: "$1/4^{17}$", correct: true },
    { label: "$3^{17}/4^{17}$", correct: false },
    { label: "$4^{17}/3^{17}$", correct: false },
  ],
};
