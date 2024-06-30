import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring $s_1s_2...s_n$ is called a <em>palindrome</em>, if $$s_1s_2...s_{n-1}s_n = s_ns_{n-1}...s_2s_1,$$
		i.e., reading the string from left to right gives the same string as when reading from right to left. <br>
		
		For any integer $n \geq 1$, let $P_n$ be the number of bitstrings of length $n$ that are palindromes. <br>
		
		Which of the following is true for any integer $n \geq 3$?
`;

const label1 = String.raw`$P_n = 2 + P_{n-2}$`;
const label2 = String.raw`$P_n = 2 \cdot P_{n/2}$`;
const label3 = String.raw`$P_n = 2 \cdot P_{n-1}$`;
const label4 = String.raw`$P_n = 2 \cdot P_{n-2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
