import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D_1$ and $D_2$ be the results of rolling two normal $6$-sided dice.  What is $\Pr((D_1+D_2)\bmod 4 = 0)$?`;

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
    { label: label3, correct: true },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
