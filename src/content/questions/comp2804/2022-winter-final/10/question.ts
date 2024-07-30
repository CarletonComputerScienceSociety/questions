import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`The function $ T: \mathbb{N} \rightarrow \mathbb{N} $ is defined recursively as follows:
      \[
        T(n) =
          \begin{cases}
            3 & \text{if $n=0$} \\
            2\cdot T(n-1) + 3 & \text{if $n\ge 1$}
          \end{cases}
      \]
      Which of the following is true, for all $n\ge 0$?`;

const label1 = String.raw`$T(n)= 3n$`;
const label2 = String.raw`$T(n)= 2^{n+1}+1$`;
const label3 = String.raw`$T(n)=3(2^{n+1}-1)$`;
const label4 = String.raw`$T(n)=2(3^{n+1}-1)$`;
const label5 = String.raw`$T(n)= 3^{n+1}$`;

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
