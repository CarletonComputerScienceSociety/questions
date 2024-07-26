import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length $70$, in which each character is one of the characters $a,b,c,d,e$.  How many such strings have exactly $10$ letters $e$`;

const label1 = String.raw`$\binom{70}{5}\cdot 5^{60}$`;
const label2 = String.raw`$\binom{70}{10}\cdot 5^{60}$`;
const label3 = String.raw`$\binom{70}{5}\cdot 4^{60}$`;
const label4 = String.raw`$\binom{70}{10}\cdot 4^{60}$`;
const label5 = String.raw`$5^{10}\cdot 4^{60}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
    { label: label5, correct: false },
  ],
};
