import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
For any integer $n \geq 3$, let $B_n$ be the number of bitstrings of length $n$ in which the first
		three bits are not all equal. Which of the following is true?
`;

const label1 = String.raw`$B_n = 2 \cdot 2^{n - 3}$`;
const label2 = String.raw`$B_n = 6 \cdot 2^{n - 3}$`;
const label3 = String.raw`$B_n = 2^n - 2$`;
const label4 = String.raw`$B_n = 2^n - 6$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
