import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 70, in which each character is one of the letters $a, b, c$. How many
		such strings have at least 3 letters $c$?
`;

const label1 = String.raw`$3^{70} - 2^{70} - 70 \cdot 2^{69}$`;
const label2 = String.raw`$3^{70} - 2^{70} - 70 \cdot 2^{69} - {70 \choose 2} \cdot 2^{68}$`;
const label3 = String.raw`$\sum_{k=4}^{70} {70 \choose k} \cdot 2^{k}$`;
const label4 = String.raw`$\sum_{k=4}^{70} {70 \choose k} \cdot 2^{70-k}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
