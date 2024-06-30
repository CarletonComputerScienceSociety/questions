import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 17-element subsets of the set $\{1,2,3,\dots,45\}$. <br>
		How many such subsets have the property that the largest element in the subset is equal to 30?
`;

const label1 = "${{29}\\choose{16}}$";
const label2 = "${29 \\choose 17}$";
const label3 = "${30 \\choose 16}$";
const label4 = "${30 \\choose 17}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
