import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{15}y^{5}$ in the expansion of $(-3x + 5y)^{20}$?
`;

const label1 = "${20 \\choose 5} \\cdot 3^{15} \\cdot 5^5$";
const label2 = "$- {20 \\choose 5} \\cdot 3^{15} \\cdot 5^5$";
const label3 = "${20 \\choose 5} \\cdot 5^{15} \\cdot 3^5$";
const label4 = "$- {20 \\choose 5} \\cdot 5^{15} \\cdot 3^5$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
