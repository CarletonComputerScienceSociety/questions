import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n$ and $k$ be integers with $0 \leq k \leq n$. <br>
		You are given two bitstrings $a_1,a_2,...,a_n$ and $b_1,b_2,...,b_n$, both of length $n$.
		In both bitstrings, each bit is 0 with probability 1/2, and 1 with probability 1/2
		(independent of all other bits). <br>
		For each $i$ with $1 \leq i \leq n$, let $c_i = a_i - b_i$. Consider the set
		$$
			P = \{i : 1 \leq i \leq n \text{ and } c_i \geq 0\}.
		$$
		What is the probability that the size of the set $P$ is equal to $k$?
`;

const label1 = "${n \\choose k} \\cdot (3/4)^{n - k} \\cdot (1/4)^k$";
const label2 = "${n \\choose k} \\cdot (3/4)^k \\cdot (1/4)^{n - k}$";
const label3 = "${n \\choose k} \\cdot (3/4)^k \\cdot (1/2)^k$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
