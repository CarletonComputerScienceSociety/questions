import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $\mathcal{B} = \{B_1,B_2,\dots,B_{13}\}$ of 13 beer bottles and a set
		$\mathcal{C} = \{C_1,C_2,\dots,C_{12}\}$ of 12 cider bottles. <br>
		
		Consider subsets $X$ of $\mathcal{B} \cup \mathcal{C}$, such that $X$ consists of exactly 5 beer
		bottles and all cider bottles in $X$ have an even index. <br>
		
		How many such subsets $X$ are there?
`;

const label1 = "${12 \\choose 5} \\cdot 2^6$";
const label2 = "${13 \\choose 5} \\cdot 2^5$";
const label3 = "${13 \\choose 5} \\cdot 2^6$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
