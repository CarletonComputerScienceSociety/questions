import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $k$ and $n$ be integers with $2 \leq k \leq n$ and consider the set $S = \{1,2,\dots,n\}$.
		What is the number of $k$-element subsets of $S$ that do not contain 1 <em>or</em> do not contain 2?
`;

const label1 = "${n - 1 \\choose k} + {n - 1 \\choose k}$";
const label2 = "${n - 2 \\choose k}$";
const label3 = "${n \\choose k} - {n - 2 \\choose k - 2}$";
const label4 =
  "${n \\choose k} - {n - 1 \\choose k - 1} - {n - 1 \\choose k - 1}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
