import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of characters, where each character is one of the letters $a$, $b$, and
		$c$. <br>
		
		For any integer $n \geq 1$, let $E_n$ be the number of such strings of length $n$ that contain an even
		number of $c$'s, and let $O_n$ be the number of such strings of length $n$ that contain an odd
		number of $c$'s. (Remember that 0 is an even number.) <br>
		
		Which of the following is true for any integer $n \geq 2$?
`;

const label1 = String.raw`$E_n = 2 \cdot E_{n-1} + O_{n-1}$`;
const label2 = String.raw`$E_n = 2 \cdot E_{n-1} + E_{n-1}$`;
const label3 = String.raw`$E_n = 2 \cdot O_{n-1} + O_{n-1}$`;
const label4 = String.raw`$E_n = 2 \cdot O_{n-1} + E_{n-1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
