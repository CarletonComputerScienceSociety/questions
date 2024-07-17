import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, where each character is $a$, $b$, or $c$. Such a string is called <em>ccc-free</em>
		if it does not contain <em>ccc</em>. <br>
		
		For any integer $n \geq 4$, let $B_n$ be the number of <em>ccc</em>-free strings of length $n$. Which of the following is true?
`;

const label1 = String.raw`$B_n = B_{n-1} + B_{n-2} + B_{n-3}$`;
const label2 = String.raw`$B_n = 2 \cdot B_{n-1} + 2 \cdot B_{n-2} + 2 \cdot B_{n-3}$`;
const label3 = String.raw`$B_n = 2 \cdot B_{n-1} + 2 \cdot B_{n-2} + B_{n-3}$`;
const label4 = String.raw`$B_n = B_{n-1} + B_{n-2} + 2 \cdot B_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
