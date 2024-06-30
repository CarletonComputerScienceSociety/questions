import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider bitstrings that contain at least one occurrence of 000. Let $S_n$ be the number of such
		strings having length $n$. Which of the following is true for $n \geq 4$?
`;

const label1 = String.raw`$S_n = S_{n-1} + S_{n-2} + 2^{n-2}$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3} + 2^{n-3}$`;
const label3 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3}$`;
const label4 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3} + 2^{n-4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
