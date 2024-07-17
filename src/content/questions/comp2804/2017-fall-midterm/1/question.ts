import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 8$ be an even integer and let $S = \{1,2,3,\dots,n\}$. Consider 7-element subsets of $S$
		that consist of 4 even numbers and 3 odd numbers. How many such subsets are there?
`;

const label1 = "${n/2 \\choose 4} \\cdot {n/2 \\choose 3}$";
const label2 = "${n \\choose 4} \\cdot {n \\choose 3}$";
const label3 = "${n/2 \\choose 4} + {n/2 \\choose 3}$";
const label4 = "${n \\choose 4} + {n \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
