import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. Consider permutations $a_1,a_2,\dots,a_n$ of the set $\{1,2,\dots,n\}$
		for which $a_1 < a_2$. How many such permutations are there?
`;

const label1 = String.raw`$\frac{n!}{2}$`;
const label2 = String.raw`$n!$`;
const label3 = String.raw`$2{n \choose 2} \cdot (n-2)!$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
