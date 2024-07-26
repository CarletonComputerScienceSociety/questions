import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`For each integer $n\ge 0$, let $S_n$ denote the number of length-$n$ strings over the alphabet $ \{a,b,c\} $ that do not contain $aa$ or $bb$.
Which of the following is true, for any integer $n\ge 1$?`;

const label1 = String.raw`$S_n=S_{n-1} + 2S_{n-2}$`;
const label2 = String.raw`$S_n=S_{n-1} + 4S_{n-2}$`;
const label3 = String.raw`$S_n=S_{n-1} + \sum_{i=1}^{n} 2S_{n-i}$`;
const label4 = String.raw`$S_n=S_{n-1} + \sum_{i=0}^{n-2} 2S_{i}$`;
const label5 = String.raw`$S_n=S_{n-1} + \sum_{i=0}^{n-2} S_{i}$`;

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
