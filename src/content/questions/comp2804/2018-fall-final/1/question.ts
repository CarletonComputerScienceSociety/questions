import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 70, in which each character is one of the letters $a,b,c$. How many
		such strings have exactly 1 letter $c$?
`;

const label1 = String.raw`$70 \cdot 2^{69}$`;
const label2 = String.raw`$70 \cdot 3^{69}$`;
const label3 = String.raw`$70 \cdot 2^{70}$`;
const label4 = String.raw`$70 \cdot 3^{70}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
