import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n$ and $k$ be integers with $1 \leq k \leq n$. <br>
		You are given two bitstrings $a_1,a_2,\dots,a_n$ and $b_1,b_2,\dots,b_n$ of length $n$. In both
		bitstrings, each bit is 0 with probability 1/2, and 1 with probability 1/2 (independent of all
		other bits). <br>
		Consider the bitstring
		$$
			a_1 \cdot b_1,a_2 \cdot b_2,\dots,a_n \cdot b_n
		$$
		where $a_i \cdot b_i$ is the result of multiplying the two bits $a_i$ and $b_i$. What is the probability that this
		bitstring contains exactly $k$ many 1's?
`;

const label1 =
  "${n \\choose k} \\cdot \\left. 3^{n - k} \\middle/ 4^n \\right.$";
const label2 =
  "${n \\choose k} \\cdot \\left. 4^{n - k} \\middle/ 3^n \\right.$";
const label3 =
  "${n \\choose k} \\cdot \\left. 4^{n - k} \\middle/ 3^k \\right.$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
