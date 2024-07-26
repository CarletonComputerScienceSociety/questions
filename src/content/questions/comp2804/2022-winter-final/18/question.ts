import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $X$ and $Y$ be the results of rolling two $4$-sided dice and let $Z=\max\{X,Y\}$.  What is $ E(Z)$?`;

const label1 = String.raw`$5/2=2.5$`;
const label2 = String.raw`$3$`;
const label3 = String.raw`$25/8=3.125$`;
const label4 = String.raw`$13/4=3.25$`;
const label5 = String.raw`$7/2=3.5$`;

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
