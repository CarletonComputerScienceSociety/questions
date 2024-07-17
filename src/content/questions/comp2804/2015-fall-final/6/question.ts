import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, each character being $a$, $b$, or $c$, that contain at least one $a$.
		Let $S_n$ be the number of such strings having length $n$. Which of the following is true?
`;

const label1 = String.raw`$S_n = n \cdot 2^{n-1}$`;
const label2 = String.raw`$S_n = n \cdot 3^{n-1}$`;
const label3 = String.raw`$S_n = 3^{n} - n$`;
const label4 = String.raw`$S_n = 3^{n} - 2^{n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
