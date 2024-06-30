import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{20}y^{80}$ in the expansion of $(7x-13y)^{100}$?
`;

const label1 = "${100 \\choose 80} \\cdot 7^{20} \\cdot 13^{80}$";
const label2 = "$- {100 \\choose 80} \\cdot 7^{20} \\cdot 13^{80}$";
const label3 = "${100 \\choose 20} \\cdot 7^{80} \\cdot 13^{20}$";
const label4 = "$- {100 \\choose 20} \\cdot 7^{80} \\cdot 13^{20}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
