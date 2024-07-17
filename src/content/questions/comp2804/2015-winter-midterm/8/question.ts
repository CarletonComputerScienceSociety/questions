import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the coefficient of $x^{17}$ in the expansion of $(17 + 2x)^{99}$?
`;

const label1 = String.raw`$2^{16} \cdot 17^{82} \cdot {99 \choose 16}$`;
const label2 = String.raw`$2^{17} \cdot 17^{82} \cdot {99 \choose 17}$`;
const label3 = String.raw`$2^{82} \cdot 17^{17} \cdot {99 \choose 17}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
