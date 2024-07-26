import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $n\ge 1$ be an integer and let $S_n$ be the number of ways in which $n$ can be written as a sum of $1$'s and $3$'s, in which the order of the terms matters.  For example, $S_4=3$ because
\[ 4 = 1+1+1+1 = 1+3 = 3+1 \enspace . \]
Which of the following is true, for any integer $n\ge 4$:`;

const label1 = String.raw`$S_n=S_{n-1}+S_{n-2}+S_{n-3}$`;
const label2 = String.raw`$S_n=S_{n-1}+S_{n-2}$`;
const label3 = String.raw`$S_n=S_{n-1}+S_{n-3}$`;
const label4 = String.raw`$S_n=3S_{n-3}$`;
const label5 = String.raw`$S_n=3S_{n-1}$`;

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
