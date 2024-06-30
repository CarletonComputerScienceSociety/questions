import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many bitstings of length 13 start with 010 or end with 11?
`;

const label1 = String.raw`$2^{10} + 2^{11}$`;
const label2 = String.raw`$3 \cdot 2^{10} - 2^{8}$`;
const label3 = String.raw`$2^{13} - (2^{10} + 2^{11})$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
