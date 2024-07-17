import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 2$ and $n \geq 2$ be integers. Why does the identity
		$$
			{m + n \choose 2} = {m \choose 2} + {n \choose 2} + mn
		$$
		hold?
`;

const label1 = String.raw`Because both sides count the number of ways $m$ men and $n$ women can be arranged on a line,
		such that no two men are standing next to each other.`;
const label2 = String.raw`Because both sides count the number of ordered pairs in a set of size $m + n$.`;
const label3 = String.raw`Because both sides count the number of 2-element subsets of a set of size $m + n$.`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
