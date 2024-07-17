import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 5$ and consider strings of length $n$ consisting of the characters $a$, $b$, $c$, and $d$.
		How many such strings are there that start with $ad$ or end with $dcb$?
`;

const label1 = String.raw`$4^{n - 2} + 4^{n - 3} - 4^{n - 5}$`;
const label2 = String.raw`$4^{n - 2} + 4^{n - 3}$`;
const label3 = String.raw`$4^n - 4^{n - 5}$`;
const label4 = String.raw`$4^n - 4^{n - 2} - 4^{n - 3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
