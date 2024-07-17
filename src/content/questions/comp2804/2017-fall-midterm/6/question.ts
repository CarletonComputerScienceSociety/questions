import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 7$ be an integer and consider strings of length $n$ consisting of the characters $a$, $b$,
		$c$, and $d$. How many such strings are there that start with $abc$ or end with $dddd$?
`;

const label1 = String.raw`$4^{n-3} + 4^{n-4}$`;
const label2 = String.raw`$4^{n-3} + 4^{n-4} - 4^{n-7}$`;
const label3 = String.raw`$2 \cdot 4^{n-3} - 4^{n-7}$`;
const label4 = String.raw`$2 \cdot 4^{n-4} - 4^{n-7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
