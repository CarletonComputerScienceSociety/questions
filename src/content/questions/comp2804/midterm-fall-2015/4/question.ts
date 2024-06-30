import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
For any integer $n \geq 2$, let $S_n$ be the number of bitstrings of length $n$ in which the first
		bit is not equal to the last bit. Which of the following is true?
`;

const label1 = String.raw`$S_n = 2^{n-2}$`;
const label2 = String.raw`$S_n = 2^{n-1}$`;
const label3 = String.raw`$S_n = 2^{n} - 2^{n-2}$`;
const label4 = String.raw`$S_n = 2^{n} - 2^{n-1} + 2^{n-2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
