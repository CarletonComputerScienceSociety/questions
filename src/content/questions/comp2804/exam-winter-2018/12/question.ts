import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A string $s_1s_2{\dots}s_n$ is called a <em>palindrome</em>, if
		$$
			s_1s_2{\dots}s_{n-1}s_n = s_ns_{n-1}{\dots}s_2s_1,
		$$
		i.e., reading the string from left to right <span class="sticky">gives the</span>
		same result as reading the string from right to left. <br>
		
		Let $n \geq 3$ be an odd integer. You are given a string of length $n$, in which each character is a
		uniformly random element of $\{a,b,c\}$. The characters are independent of each other. What is the
		probability that this string is a palindrome?
`;

const label1 = String.raw`$(1/3)^{(n+1)/2}$`;
const label2 = String.raw`$(1/3)^{(n-1)/2}$`;
const label3 = String.raw`$(1/2)^{(n+1)/2}$`;
const label4 = String.raw`$(1/2)^{(n-1)/2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
