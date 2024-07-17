import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $k$ and $n$ be integers with $2 \leq k \leq n$ and consider the set $S = \{1,2,...,n\}$.
		What is the number of $k$-element subsets of $S$ that do not contain 1 <em>and</em> do not contain 2?
`;

const label1 = "${n - 1 \\choose k - 1}$";
const label2 = "${n - 1 \\choose k}$";
const label3 = "${n - 2 \\choose k - 2}$";
const label4 = "${n - 2 \\choose k}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
