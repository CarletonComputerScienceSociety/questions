import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $S$ consisting of 20 integers; 5 of these are even and the other 15 integers in $S$
		are odd. What is the number of 7-element subsets of $S$ having exactly 3 even integers?
`;

const label1 = "${20 \\choose 7}$";
const label2 = "${5\\choose 3} + {15 \\choose 4}$";
const label3 = "${5 \\choose 3}{15 \\choose 4}$";
const label4 = "${5 \\choose 4}{15 \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
