import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $S$ consisting of 25 beer bottles $b_1,b_2,...,b_{25}$ and 30 cider bottles $c_1,c_2,...,c_{30}$.
		How many 10-element subsets of $S$ contain at least 2 beer bottles?
`;

const label1 = "${55 \\choose 10} - {30 \\choose 10} - {30 \\choose 9}$";
const label2 =
  "${55 \\choose 10} - {30 \\choose 10} - 25 \\cdot {29 \\choose 9}$";
const label3 =
  "${55 \\choose 10} - {30 \\choose 10} - 25 \\cdot {30 \\choose 9}$";
const label4 =
  "${55 \\choose 10} - {30 \\choose 10} - 25 \\cdot {30 \\choose 10}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
