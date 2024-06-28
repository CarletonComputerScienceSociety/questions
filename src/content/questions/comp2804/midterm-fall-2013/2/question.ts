import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

export const question: MultipleChoiceQuestion = {
  body: "You are given 5 books and 7 bookshelves. How many ways are there to place these books on the shelves? (The order on the shelves matters.)",
  options: [
    { label: "${7}\\choose{5}$", correct: false },
    { label: "$\\frac{11!}{6!}$", correct: true },
    { label: "$\\frac{11!}{7!}$", correct: false },
    { label: "$\\frac{12!}{7!}$", correct: false },
  ],
};
