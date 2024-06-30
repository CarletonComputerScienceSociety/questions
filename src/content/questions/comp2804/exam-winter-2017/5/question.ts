import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. What does $2^{n} - 2^{n-2}$ count?
`;

const label1 = String.raw`The number of bitstrings of length $n$ in which the first bit is 0 or the last bit is 1.`;
const label2 = String.raw`The number of bitstrings of length $n$ in which the first bit is 0 and the last bit is 1.`;
const label3 = String.raw`The number of bitstrings of length $n$ in which the first bit is equal to the last bit.`;
const label4 = String.raw`The number of bitstrings of length $n$ in which the first bit is not equal to the last bit.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
