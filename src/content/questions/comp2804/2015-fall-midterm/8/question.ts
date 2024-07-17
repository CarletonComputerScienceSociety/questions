import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{81}y^{7}$ in the expansion of $(3x-17y)^{88}$?
`;

const label1 = "${88 \\choose 7} \\cdot 3^{81} \\cdot 17^7$";
const label2 = "$- {88 \\choose 7} \\cdot 3^{81} \\cdot 17^7$";
const label3 = "${88 \\choose 7} \\cdot 3^7 \\cdot 17^{81}$";
const label4 = "$- {88 \\choose 7} \\cdot 3^7 \\cdot 17^{81}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
