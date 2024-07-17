import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an even integer. What does
		$$
			\sum_{k=0}^{\left. (n-2) \middle/ 2 \right.} {{n}\choose{2k+1}}
		$$
		count?
`;

const label1 = String.raw`The number of bitstrings of length $n$.`;
const label2 = String.raw`The number of bitstrings of length $\left. (n-2) \middle/ 2 \right.$.`;
const label3 = String.raw`The number of bitstrings of length $n$ having an odd number of 0's.`;
const label4 = String.raw`The number of bitstrings of length $n$ in which the number of 0's plus the number of 1's is at most $\left. (n-1) \middle/ 2 \right.$.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
