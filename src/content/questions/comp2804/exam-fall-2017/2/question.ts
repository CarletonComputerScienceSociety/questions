import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an even integer. A permutation $a_1,a_2,\dots,a_n$ of the set $\{1,2,\dots,n\}$ is
		called <em>awesome</em> if $a_2 = 2 \cdot a_1$. <br>
		
		For example, if $n = 6$, then the permutation $3,6,4,1,5,2$ is awesome, whereas the permutation
		$3,5,4,1,6,2$ is not awesome. <br>
		
		How many awesome permutations of the set $\{1,2,\dots,n\}$ are there?
`;

const label1 = "$n \\cdot (n-1)!$";
const label2 = "$n \\cdot (n-2)!$";
const label3 = "${\\frac{n}{2}} \\cdot (n-1)!$";
const label4 = "${\\frac{n}{2}} \\cdot (n-2)!$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
