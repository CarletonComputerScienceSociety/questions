import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $S$ consisting of 20 integers; 5 of these are strictly positive and the other 15
		integers in $S$ are strictly negative. What is the number of 3-element subsets of $S$ having the
		property that the product of the 3 elements in the subset is negative?
`;

const label1 = "${20 \\choose 3}$";
const label2 = "${15 \\choose 3}$";
const label3 = "${15 \\choose 3} + 15 \\cdot {5 \\choose 2}$";
const label4 =
  "${15 \\choose 3} + {15 \\choose 2} \\cdot 5 + 15 \\cdot {5 \\choose 2}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
