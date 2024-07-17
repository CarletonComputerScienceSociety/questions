import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many bitstrings of length 99 are there that start with 1010 or end with 1010?
`;

const label1 = String.raw`$2^{91}$`;
const label2 = String.raw`$2^{95} + 2^{95}$`;
const label3 = String.raw`$2^{96} - 2^{91}$`;
const label4 = String.raw`$2^{99} - 2^{96}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
