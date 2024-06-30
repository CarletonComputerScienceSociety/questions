import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of $n$ characters, each character being $a$, $b$, or $c$. Let $S_n$ be the
		number of such strings of length $n$ that do not contain the substring $aa$. Which of the following
		is true?
`;

const label1 = String.raw`$S_{n+1} = S_n + S_{n-1}\ \mathrm{for}\ n \geq 2.$`;
const label2 = String.raw`$S_{n+1} = 2 \cdot S_n + S_{n-1}\ \mathrm{for}\ n \geq 2.$`;
const label3 = String.raw`$S_{n+1} = S_n + 2 \cdot S_{n-1}\ \mathrm{for}\ n \geq 2.$`;
const label4 = String.raw`$S_{n+1} = 2 \cdot S_n + 2 \cdot S_{n-1}\ \mathrm{for}\ n \geq 2.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
