import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 2$ and $n \geq 2$ be integers. What does
		$$
			{m \choose 2} + {n \choose 2} + m \cdot n
		$$
		count?
`;

const label1 = String.raw`The number of ways to choose a subset from a set consisting of $m + n$ elements.`;
const label2 = String.raw`The number of ways to choose an ordered pair of 2 elements from a set consisting of $m + n$ elements.`;
const label3 = String.raw`The number of ways to choose a 2-element subset from a set consisting of $m + n$ elements.`;
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
