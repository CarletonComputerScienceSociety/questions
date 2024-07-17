import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many bitstrings of length 77 start with 1111 or end with 0000?
`;

const label1 = String.raw`$2^{73} + 2^{73}$`;
const label2 = String.raw`$2^{74} - 2^{69}$`;
const label3 = String.raw`$2^{77} - 2^{69}$`;
const label4 = String.raw`$2^{77} - 2^{73} - 2^{73}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
