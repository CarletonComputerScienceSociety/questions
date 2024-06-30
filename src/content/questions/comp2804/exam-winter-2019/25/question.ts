import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who discovered the Fibonacci numbers?
`;

const label1 = String.raw`Donald Trump`;
const label2 = String.raw`The Italian mathematician Fibonacci, also known as Leonardo Bonacci, Leonardo of Pisa, or Leonardo Bigollo Pisano`;
const label3 = String.raw`Alexandre-Théophile Vandermonde`;
const label4 = String.raw`Keith Richards (the guitarist of the greatest rock band in the universe)`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
