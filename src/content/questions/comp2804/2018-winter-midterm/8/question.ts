import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 34$ be an even integer, let $n \geq 1$ be an integer, and consider the two sets
		$$
			A = \{1,2,\dots,m\}
		$$
		and
		$$
			B = \{m+1,m+2,\dots,m+n\}.
		$$
		Let $k$ be an integer with $17 \leq k \leq n+17$. <br>
		
		Consider subsets $X$ of $A \cup B$, such that $|X| = k, |X \cap A| = 17$, and all elements of $X \cap A$ are even. <br>
		
		How many such subsets $X$ are there?
`;

const label1 = "${m/2 \\choose 17} \\cdot {n \\choose k-17}$";
const label2 = "${m \\choose 17} \\cdot {n \\choose k-17}$";
const label3 = "${m+n \\choose 17} \\cdot {n \\choose k-17}$";
const label4 = "${m/2+n \\choose 17} \\cdot {n \\choose k-17}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
