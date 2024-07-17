import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of the characters $a$, $b$, and $c$. Such a string is called <em>valid</em>,
		if it does not contain the substring $aaa$. Let $S_n$ be the number of valid strings of length
		$n$. Which of the following is true?
`;

const label1 = String.raw`$S_n = 2 \cdot S_{n-1} + 2 \cdot S_{n-2}$`;
const label2 = String.raw`$S_n = 2 \cdot S_{n-1} + 2 \cdot S_{n-2} + S_{n-3}$`;
const label3 = String.raw`$S_n = 2 \cdot S_{n-1} + S_{n-2} + 2 \cdot S_{n-3}$`;
const label4 = String.raw`$S_n = 2 \cdot S_{n-1} + 2 \cdot S_{n-2} + 2 \cdot S_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
