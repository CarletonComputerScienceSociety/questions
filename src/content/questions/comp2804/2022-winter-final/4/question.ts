import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Consider strings of length $70$, in which each character is one of the characters $a,b,c,d,e$.  How many such strings have at least $10$ letters $a$?`;

const label1 = String.raw`$\binom{70}{10}\cdot 5^{60}$`;
const label2 = String.raw`$\sum_{i=10}^{70} \binom{70}{i}\cdot 5^{70-i}$`;
const label3 = String.raw`$5^{70} - \sum_{i=0}^{9} \binom{70}{i}\cdot 4^{70-i}$`;
const label4 = String.raw`$\binom{70}{10}\cdot 4^{60}$`;
const label5 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
