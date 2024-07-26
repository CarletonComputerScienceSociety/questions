import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $n\ge 2$ be an integer and let $x_1,\ldots,x_n$ be a random permutation of $\{1,\ldots,n\}$.  Define the random variable
\[  I=\min\left(\{n+1\}\cup\{i\ge 2:x_i > x_1\}\right) \enspace .
\]
What is $ E(I)$?`;

const label1 = String.raw`$3$`;
const label2 = String.raw`$H_{n-1}$`;
const label3 = String.raw`$H_n$`;
const label4 = String.raw`$H_{n+1}$`;
const label5 = String.raw`$n/2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
