import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given a fair red die and a fair blue die. You roll each die once, independently of each other.
		Let $(i,j)$ be the outcome, where $i$ is the result of the red die and $j$ is the result of the blue die.
		Define the random variables
		$$
			X = |i - j|
		$$
		and
		$$
			Y = \max(i, j).
		$$
		Which of the following is true?
`;

const label1 = String.raw`The random variables $X$ and $Y$ are independent.`;
const label2 = String.raw`The random variables $X$ and $Y$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
