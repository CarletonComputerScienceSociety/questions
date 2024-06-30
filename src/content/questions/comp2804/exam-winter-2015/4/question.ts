import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{4}y^{11}$ in the expansion of $(2x - 7y)^{15}$?
`;

const label1 = "${15 \\choose 11} \\cdot 2^4 \\cdot 7^{11}$";
const label2 = "$- {15 \\choose 11} \\cdot 2^4 \\cdot 7^{11}$";
const label3 = "${15 \\choose 11} \\cdot 2^{11} \\cdot 7^4$";
const label4 = "$- {15 \\choose 11} \\cdot 2^{11} \\cdot 7^4$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
