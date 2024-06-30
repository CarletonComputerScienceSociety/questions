import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of characters, where each character is an element of $\{a, b, c, d\}$.
		Such a string is called <em>valid</em>, if it does not contain $aa$, it does not contain $bb$,
		it does not contain $cc$, and it does not contain $dd$. <br>
		
		For any integer $n \geq 2$, what is the number of valid strings of length $n$?
`;

const label1 = String.raw`$4^{n} - 4(n-1)$`;
const label2 = String.raw`$4^{n} - 4n$`;
const label3 = String.raw`$4 \cdot 3^{n}$`;
const label4 = String.raw`$4 \cdot 3^{n-1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
