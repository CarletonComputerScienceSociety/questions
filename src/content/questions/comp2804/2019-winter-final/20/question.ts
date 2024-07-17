import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. Consider a string $c_1,c_2,...,c_n$ of length $n$, in which each character
		$c_i$ is a uniformly random element of the set $\{1,2,3\}$ (independently of all other characters).
		Consider the random variable $X$ whose value is the number of indices $i$ with $1 \leq i < n$ for
		which the product $c_i \cdot c_{i + 1}$ is odd. <br>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$\frac{2}{3} \cdot n$`;
const label2 = String.raw`$\frac{2}{3} \cdot (n - 1)$`;
const label3 = String.raw`$\frac{4}{9} \cdot n$`;
const label4 = String.raw`$\frac{4}{9} \cdot (n - 1)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
