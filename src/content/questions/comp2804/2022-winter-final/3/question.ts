import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length $70$, in which each character is one of the characters $a,b,c,d,e$.  How many such strings have exactly $5$ letters $a$ or exactly $15$ letters $b$?`;

const label1 = String.raw`$\binom{70}{5}\cdot 4^{65} + \binom{65}{15}\cdot 4^{50} $`;
const label2 = String.raw`$\binom{70}{5}\cdot 4^{65} + \binom{65}{15}\cdot 4^{50} - \binom{70}{5}\cdot\binom{65}{15}\cdot 3^{50}$`;
const label3 = String.raw`$\binom{70}{5}\cdot 4^{65} + \binom{70}{15}\cdot 4^{55}$ `;
const label4 = String.raw`$\binom{70}{5}\cdot 4^{65} + \binom{70}{15}\cdot 4^{55} - \binom{70}{5}\cdot\binom{65}{15}\cdot 3^{50}$`;
const label5 = String.raw`None of the above`;

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
