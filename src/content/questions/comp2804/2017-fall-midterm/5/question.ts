import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an even integer and let $S = \{1,2,3,\dots,n\}$. Consider subsets of $S$ that
		contain at least one even number. How many such subsets are there?
`;

const label1 = String.raw`$(n/2) \cdot 2^{n/2}$`;
const label2 = String.raw`$2^{n/2} + 2^{n/2}$`;
const label3 = String.raw`$2^{n} - 2^{n/2}$`;
const label4 = String.raw`$2^{n} + 2^{n/2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
