import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 4$ be an integer and consider strings of length $n$ consisting of the characters $a$, $b$,
		$c$, and $d$. How many such strings are there that start with $ab$ or start with $abc$?
`;

const label1 = String.raw`$4^{n}$`;
const label2 = String.raw`$4^{n-1}$`;
const label3 = String.raw`$4^{n-2}$`;
const label4 = String.raw`$4^{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
