import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. Consider a bitstring $b_1,b_2,\dots,b_n$ of length $n$, in which each
		bit $b_i$ is 0 with probability 1/2, and 1 with probability 1/2 (independent of all other bits). <br>
		
		Define the random variable $X$ to be the number of indices $i$ with $1 \leq i &lt; n$ for which $b_i
		\cdot b_{i+1} = 0$. <br>
		
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$n/4$`;
const label2 = String.raw`$(n-1)/4$`;
const label3 = String.raw`$3n/4$`;
const label4 = String.raw`$3(n-1)/4$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
