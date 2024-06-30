import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
For any integer $n \geq 1$, let $B_n$ be the number of bitstrings of length $n$ that do not contain
		the substring 10. Which of the following is true for any $n \geq 4$?
`;

const label1 = String.raw`$B_n = n$`;
const label2 = String.raw`$B_n = n+1$`;
const label3 = String.raw`$B_n = f_{n+1}$, the $(n+1)$-st Fibonacci number.`;
const label4 = String.raw`$B_n = f_{n+2}$, the $(n+2)$-nd Fibonacci number.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
