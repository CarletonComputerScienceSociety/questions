import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{20}y^{35}$ in the expansion of $(5x - 3y)^{55}$?
`;

const label1 = "${55 \\choose 20} \\cdot 5^{35} \\cdot 3^{20}$";
const label2 = "$-{55 \\choose 20} \\cdot 5^{35} \\cdot 3^{20}$";
const label3 = "${55 \\choose 35} \\cdot 5^{20} \\cdot 3^{35}$";
const label4 = "$-{55 \\choose 35} \\cdot 5^{20} \\cdot 3^{35}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
