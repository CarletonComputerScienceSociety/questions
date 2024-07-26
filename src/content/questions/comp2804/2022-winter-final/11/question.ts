import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D$ be the result of rolling a normal $6$-sided die.  What is $\Pr(D\bmod 4 = 0)$?`;

const label1 = String.raw`$1/2$`;
const label2 = String.raw`$1/3$`;
const label3 = String.raw`$1/4$`;
const label4 = String.raw`$1/5$`;
const label5 = String.raw`$1/6$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: true },
  ],
};
