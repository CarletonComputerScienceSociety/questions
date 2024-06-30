import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. Consider a string $c_1,c_2,\dots,c_n$ of length $n$, in which each
		character $c_i$ is a uniformly random element of the set $\{\alpha, \beta, \gamma, \delta, \epsilon\}$
		(independently of all other characters). <br>
		Define the random variable $X$ to be the number of indices $i$ with $1 \leq i < n$
		for which $c_i = c_{i+1}$. <br>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$\left. n \middle/ 25 \right.$`;
const label2 = String.raw`$\left. (n - 1) \middle/ 25 \right.$`;
const label3 = String.raw`$\left. n \middle/ 5 \right.$`;
const label4 = String.raw`$\left. (n - 1) \middle/ 5 \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
