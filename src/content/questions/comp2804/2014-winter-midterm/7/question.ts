import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{9}y^{16}$ in the expansion of $(7x + 21y)^{25}$?
`;

const label1 = ";${25 \\choose 16} 7^{16}21^{9}$";
const label2 = ";${16 \\choose 25} 7^{9}21^{16}$";
const label3 = ";${25 \\choose 16} 7^{25}3^{16}$";
const label4 = ";none of the above";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
