import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $S$ consisting of 20 integers. The integer 0 is an element of $S$, 9 elements in $S$
		are strictly positive, and the remaining 10 elements are strictly negative. What is the number of
		7-element subsets of $S$ having the property that the product of the 7 elements in the subset is
		equal to 0?
`;

const label1 = "${19 \\choose 6}$";
const label2 = "${19 \\choose 7}$";
const label3 = "${20 \\choose 6}$";
const label4 = "${20}\\choose{7}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
