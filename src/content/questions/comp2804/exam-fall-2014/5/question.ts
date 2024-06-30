import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S_n$ be the number of bitstrings of length $n$ that do not contain the substring 11. Which of
		the following is true?
`;

const label1 = String.raw`$S_n = S_{n-1} + S_{n-2}\ \mathrm{for}\ n \geq 3.$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-3}\ \mathrm{for}\ n \geq 3.$`;
const label3 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3}\ \mathrm{for}\ n \geq 3.$`;
const label4 = String.raw`$S_n = 2 \cdot S_{n-1}\ \mathrm{for}\ n \geq 3.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
