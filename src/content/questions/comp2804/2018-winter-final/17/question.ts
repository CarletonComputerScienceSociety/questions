import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer.
		Consider a uniformly random permutation of the set $\{1,2,3,\dots,2n\}$. Define the event
		[defs]
		  A = "both the first element and the last element in the permutation are even integers".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{2(2n-1)}{n-1}$`;
const label2 = String.raw`$\frac{n-1}{4n}$`;
const label3 = String.raw`$\frac{n-1}{2(2n-1)}$`;
const label4 = String.raw`$\frac{n}{2(2n-1)}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
