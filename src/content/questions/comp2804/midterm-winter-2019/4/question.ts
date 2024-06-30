import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 8$ be an even integer and let $k$ be an integer with $2 \leq k \leq n/2$. Consider
		$k$-element subsets of the set $S = \{1,2,\dots,n\}$. How many such subsets contain at least two even
		numbers?
`;

const label1 =
  "${n \\choose k} - {n/2 \\choose k - 1} - \\frac{n}{2} \\cdot {n/2 \\choose k}$";
const label2 =
  "${n \\choose k} - {n/2 \\choose k - 1} - \\frac{n}{2} \\cdot {n/2 \\choose k - 1}$";
const label3 =
  "${n \\choose k} - {n/2 \\choose k} - \\frac{n}{2} \\cdot {n/2 \\choose k}$";
const label4 =
  "${n \\choose k} - {n/2 \\choose k} - \\frac{n}{2} \\cdot {n/2 \\choose k - 1}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
