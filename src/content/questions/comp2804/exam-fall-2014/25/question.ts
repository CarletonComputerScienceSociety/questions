import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who invented the Fibonacci numbers?
`;

const label1 = String.raw`Justin Bieber`;
const label2 = String.raw`Britney Spears`;
const label3 = String.raw`Fibonacci`;
const label4 = String.raw`Carl Friedrich Gauss`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
