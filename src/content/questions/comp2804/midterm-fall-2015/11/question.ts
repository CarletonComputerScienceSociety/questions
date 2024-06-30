import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S_n$ be the number of bitstrings of length $n$ that contain the substring 0000. Which of the
		following is true?
`;

const label1 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3} + S_{n-4}$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3} + S_{n-4}\ +$ $ 2^{n-4}$`;
const label3 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3}$`;
const label4 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3} + 2^{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
