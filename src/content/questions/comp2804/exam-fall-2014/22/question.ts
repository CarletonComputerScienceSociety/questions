import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
I flip a fair coin, independently, 6 times, resulting in a sequence of heads ($H$) and tails ($T$).
		For each (consecutive) $HTH$ in this sequence, you win \$5.
		Define the random variable $X$ to be the amount of dollars that you win. For example, if the
		sequence is
		$$
			THTHTH,
		$$
		then $X = 10$. What is the expected value of $X$?
`;

const label1 = String.raw`2/5`;
const label2 = String.raw`2`;
const label3 = String.raw`5/2`;
const label4 = String.raw`5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
