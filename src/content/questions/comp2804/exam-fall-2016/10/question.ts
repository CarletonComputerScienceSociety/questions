import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, each character being $a$, $b$, $c$, $d$, or $e$, in which no two
		consecutive characters are equal. Let $S_n$ be the number of such strings having length $n$. Which
		of the following is true for $n \geq 1$?
`;

const label1 = String.raw`$S_n = 5 \cdot 4^{n-1}$`;
const label2 = String.raw`$S_n = 5 \cdot 4^{n-2}$`;
const label3 = String.raw`$S_n = 5^{n} - 5(n-1) \cdot 4^{n-2}$`;
const label4 = String.raw`$S_n = 5^{n} - 5(n-1) \cdot 4^{n-1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
