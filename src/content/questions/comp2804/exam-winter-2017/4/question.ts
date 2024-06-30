import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring $b_1b_2 \dots b_n$ is called a palindrome if $b_1b_2 \dots b_n = b_nb_{n-1} \dots b_1$, i.e.,
		reading the string from left to right gives the same result as reading it from right to left. Let
		$n \geq 3$ be an odd integer. How many palindromes of length $n$ are there?
`;

const label1 = String.raw`$2^{n-1}$`;
const label2 = String.raw`$2^{n-2}$`;
const label3 = String.raw`$2^{(n-1)/2}$`;
const label4 = String.raw`$2^{(n+1)/2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
