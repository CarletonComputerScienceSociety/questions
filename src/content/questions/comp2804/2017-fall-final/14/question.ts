import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer. You are given two bitstrings $a_1,a_2,\dots,a_n$ and $b_1,b_2,\dots,b_n$ of
		length $n$. In both bitstrings, each bit is 0 with probability 1/2, and 1 with probability 1/2
		(independent of all other bits). <br>
		
		Consider the string
		$$
			a_1 + b_1,a_2 + b_2,\dots,a_n + b_n.
		$$
		What is the probability that each element in this string is non-zero?
`;

const label1 = String.raw`$1 - (1/4)^{n}$`;
const label2 = String.raw`$1 - (3/4)^{n}$`;
const label3 = String.raw`$(1/4)^{n}$`;
const label4 = String.raw`$(3/4)^{n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
