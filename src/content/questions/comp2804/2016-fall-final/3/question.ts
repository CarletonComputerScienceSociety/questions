import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many bitstrings of length 55 start with 000 or end with 1010?
`;

const label1 = String.raw`$2^{55} - 2^{48}$`;
const label2 = String.raw`$2^{51} + 2^{52}$`;
const label3 = String.raw`$2^{51} + 2^{52} - 2^{48}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
