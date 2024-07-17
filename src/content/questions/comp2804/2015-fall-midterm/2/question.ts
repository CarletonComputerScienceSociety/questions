import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a set of 25 elements and let $x$, $y$, and $z$ be three distinct elements of $S$. What is
		the number of subsets of $S$ that contain both $x$ and $y$, but do not contain $z$?
`;

const label1 = String.raw`$2^{25} - 2^{22}$`;
const label2 = String.raw`$2^{25} - 2^{24} + 2^{23}$`;
const label3 = String.raw`$2^{22}$`;
const label4 = String.raw`$2^{23}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
