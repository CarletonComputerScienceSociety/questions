import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 99 consisting of the characters $a$, $b$, and $c$. How many such strings
		are there that start with $abc$ or end with $bbb$?
`;

const label1 = String.raw`$3^{96} + 3^{96}$`;
const label2 = String.raw`$3^{99} - 2 \cdot 3^{96}$`;
const label3 = String.raw`$2 \cdot 3^{96} - 3^{93}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
