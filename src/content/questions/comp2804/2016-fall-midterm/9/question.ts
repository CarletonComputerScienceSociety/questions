import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{24}y^{26}$ in the expansion of $(5x - 7y)^{50}$?
`;

const label1 = "$- {50 \\choose 24} \\cdot 5^{26} \\cdot 7^{24}$";
const label2 = "$- {50 \\choose 26} \\cdot 5^{24} \\cdot 7^{26}$";
const label3 = "${50 \\choose 24} \\cdot 5^{26} \\cdot 7^{24}$";
const label4 = "${50 \\choose 26} \\cdot 5^{24} \\cdot 7^{26}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
