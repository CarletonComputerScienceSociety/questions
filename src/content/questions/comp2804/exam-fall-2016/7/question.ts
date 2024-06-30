import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of characters, each character being $a$ or $b$, that contain exactly two $a$'s and
		these two $a$'s are not next to each other. Let $S_n$ be the number of such strings having length
		$n$. Which of the following is true for $n \geq 4$?
`;

const label1 = String.raw`$S_n = {n \choose 2}$`;
const label2 = String.raw`$S_n = {n \choose 2} - n - 1$`;
const label3 = String.raw`$S_n = {n \choose 2} - n$`;
const label4 = String.raw`$S_n = {n \choose 2} - n + 1$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
