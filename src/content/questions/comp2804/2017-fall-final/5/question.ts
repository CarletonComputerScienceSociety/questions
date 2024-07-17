import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 3$ and $m \geq 3$ be integers. What does
		$$
		{n \choose 3} + {m \choose 3} + n \cdot {m \choose 2} + m \cdot {n \choose 2}
		$$
		count?
`;

const label1 = String.raw`The number of subsets having size 3 of a set consisting of $n$ positive numbers and $m$ negative numbers.`;
const label2 = String.raw`The number of subsets having size at most 3 of a set consisting of $n$ positive numbers and $m$ negative numbers.`;
const label3 = String.raw`The number of subsets having size 2 or 3 of a set consisting of $n$ positive numbers and $m$ negative numbers.`;
const label4 = String.raw`The number of subsets having size 2 and 3 of a set consisting of $n$ positive numbers and $m$ negative numbers.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
