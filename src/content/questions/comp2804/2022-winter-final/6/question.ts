import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`What is the coefficient of $x^{10}y^{20}$ in the expansion of $(2x - 3y)^{30}$?`;

const label1 = String.raw`$\binom{30}{20}\cdot 2^{10}\cdot 3^{20}$`;
const label2 = String.raw`$\binom{30}{20}\cdot 2^{20}\cdot 3^{10}$`;
const label3 = String.raw`$\binom{30}{10}\cdot 2^{20}\cdot 3^{10}$`;
const label4 = String.raw`$-\binom{30}{10}\cdot 2^{20}\cdot 3^{10}$`;
const label5 = String.raw`$\binom{30}{20}\cdot 2^{30}\cdot 3^{10}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
