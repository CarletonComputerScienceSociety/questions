import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, where each character is an element of the set $\{a, b, c\}$. Such a
		string is called <em>awesome</em>, if it does not contain $aa$, and does not contain $aba$, and does not contain $abb$. <br>
		For any integer $n \geq 1$, let $A_n$ be the number of awesome strings of length $n$. <br>
		Which of the following is true for any integer $n \geq 4$?
`;

const label1 = String.raw`$A_n = A_{n-1} + 2 \cdot A_{n-2} + 2 \cdot A_{n-3}$`;
const label2 = String.raw`$A_n = A_{n-1} + 2 \cdot A_{n-2} + A_{n-3}$`;
const label3 = String.raw`$A_n = 2 \cdot A_{n-1} + A_{n-2} + 2 \cdot A_{n-3}$`;
const label4 = String.raw`$A_n = 2 \cdot A_{n-1} + A_{n-2} + A_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
