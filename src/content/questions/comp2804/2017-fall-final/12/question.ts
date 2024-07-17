import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring $b_1b_2{\dots}b_n$ of length $n$ is called a <em>palindrome</em> if
		$$
			b_1b_2{\dots}b_{n-1}b_n = b_nb_{n-1}{\dots}b_2b_1,
		$$
		i.e., reading the string from left to right <span class="sticky">gives the</span> same result as reading the string from right
		to left. <br>
		
		Let $n \geq 2$ be an even integer. You are given a uniformly random bitstring of length $n$. What is
		the probability that this bitstring is a palindrome?
`;

const label1 = String.raw`$(1/2)^{n}$`;
const label2 = String.raw`$(1/2)^{n/2}$`;
const label3 = String.raw`$(1/2)^{2n}$`;
const label4 = String.raw`$1/2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
