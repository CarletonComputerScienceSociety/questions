import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $X_1,X_2,X_3$ be three numbers chosen independently and uniformly from the set $\{1,\ldots,50\}$.  Let $Z=\max\{X_1,X_3,X_4\}$.  What is $ E(Z) $?`;

const label1 = String.raw`$50^{-3}\cdot\sum_{i=1}^{50} i\cdot i^2$`;
const label2 = String.raw`$50^{-3}\cdot\sum_{i=1}^{50} i\cdot i^3$`;
const label3 = String.raw`$50^{-3}\cdot\sum_{i=1}^{50} i\cdot (3(i-1)^2 + 3(i-1) + 1)$`;
const label4 = String.raw`$33$`;
const label5 = String.raw`$99/2-49.5$`;

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
