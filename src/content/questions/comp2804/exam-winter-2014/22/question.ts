import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
I flip a fair coin, independently, 10 times, resulting in a sequence of heads ($H$) and tails ($T$).
		For each $HT$ in this sequence, you win \$3.
		Define the random variable $X$ to be the amount of dollars that you win. For example, if the
		sequence is
		$$
			HHTTHTTHTT,
		$$
		then $X = 9$. What is the expected value of $X$?
`;

const label1 = String.raw`27/4`;
const label2 = String.raw`28/4`;
const label3 = String.raw`29/4`;
const label4 = String.raw`30/4`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
