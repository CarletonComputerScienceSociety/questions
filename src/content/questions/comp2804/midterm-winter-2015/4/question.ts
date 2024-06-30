import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of the characters $a$, $b$, and $c$. Such a string is called <em>valid</em>,
		if no two consecutive characters are equal. Thus, $abacbac$ is valid, whereas $abaccac$ is not
		valid. <br>
		
		Let $n \geq 1$ be an integer and let $V_n$ be the number of valid strings of length $n$. Which of
		the following is true?
`;

const label1 = String.raw`$V_n = 3 \cdot 2^{n-1}$`;
const label2 = String.raw`$V_n = 3^n - (n - 1) \cdot 3$`;
const label3 = String.raw`$V_n = 3^n - (n - 1) \cdot 3 \cdot 3^{n-2}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
