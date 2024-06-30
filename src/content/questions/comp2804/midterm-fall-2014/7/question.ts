import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{20}y^{80}$ in the expansion of $(5x - 3y)^{100}$?
`;

const label1 = "$-{100 \\choose 80} 5^{20}3^{80}$";
const label2 = "${100 \\choose 80} 5^{20}3^{80}$";
const label3 = "${100 \\choose 80} 5^{80}3^{20}$";
const label4 = "${80 \\choose 100} 5^{20}3^{80}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
