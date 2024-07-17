import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the number of bitstrings of length $n$ that contain 00 or 11?
`;

const label1 = String.raw`$2 \cdot (n-1) \cdot 2^{n-2}$`;
const label2 = String.raw`$2 \cdot n \cdot 2^{n-1}$`;
const label3 = String.raw`$2^n - 4$`;
const label4 = String.raw`$2^n - 2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
