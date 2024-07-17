import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer and let $S_n$ be the number of ways in which $n$ can be written as a
		sum of 2's and 4's; the order in which the 2's and 4's occur in the sum matters. For example, $S_6 =
		3$, because
		$$
			6 = 2 + 2 + 2 = 2 + 4 = 4 + 2.
		$$
		Which of the following is true for any integer $n \geq 6$?
`;

const label1 = String.raw`$S_n = S_{n-2} + S_{n-4}$`;
const label2 = String.raw`$S_n = 2 \cdot S_{n-2} + S_{n-4}$`;
const label3 = String.raw`$S_n = S_{n-2} + 4 \cdot S_{n-4}$`;
const label4 = String.raw`$S_n = 2 \cdot S_{n-2} + 4 \cdot S_{n-4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
