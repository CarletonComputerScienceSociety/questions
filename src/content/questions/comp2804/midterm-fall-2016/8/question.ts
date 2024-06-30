import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer and let $S$ be a set of $m$ integers. What is the minimum value
		of $m$ such that we can guarantee that $S$ contains at least two elements whose difference
		is divisible by $n$?
`;

const label1 = String.raw`$n - 1$`;
const label2 = String.raw`$n$`;
const label3 = String.raw`$n + 1$`;
const label4 = String.raw`$n + 2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
