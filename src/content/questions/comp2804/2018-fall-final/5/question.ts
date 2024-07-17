import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer and consider the set $S = \{1,2,\dots,n\}$. What does
		$$
			\sum_{k=2}^{n} {n \choose k}
		$$ count?
`;

const label1 = String.raw`The number of subsets of $S$ that are non-empty.`;
const label2 = String.raw`The number of subsets of $S$ that contain at least two elements.`;
const label3 = String.raw`The number of bitstrings of length $n$ that contain at least one 0.`;
const label4 = String.raw`The number of bitstrings of length $n$ that contain at least three 0's.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
