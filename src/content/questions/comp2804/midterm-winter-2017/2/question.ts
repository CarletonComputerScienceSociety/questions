import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $b \geq 1$ and $g \geq 1$ be integers. Consider $b$ boys and $g$ girls. How many ways are there
		to arrange these kids on a line such that the leftmost kid is a girl?
`;

const label1 = String.raw`$(b + g)!$`;
const label2 = String.raw`$g \cdot (b + g - 1)!$`;
const label3 = String.raw`$(b + g)! / b$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
