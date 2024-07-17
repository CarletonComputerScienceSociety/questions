import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n$ be an integer with $n \geq 3$. Consider a bitstring of length $n$, in which each bit is 0
		with probability 1/3 (and, thus, 1 with probability 2/3), independently of the other bits. Let
		$X$ be the number of occurrences of 010 in this bitstring. For example, if the bitstring is
		$$
			0010100100,
		$$
		then $X = 3$. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$2n/27$`;
const label2 = String.raw`$2(n-2)/27$`;
const label3 = String.raw`$(n-2)/8$`;
const label4 = String.raw`$n/8$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
