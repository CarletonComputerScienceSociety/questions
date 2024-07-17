import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer and let $a_1a_2 \dots a_n$ be a uniformly random permutation of the set
		$\{1,2,\dots,n\}$. Let $X$ be the random variable with the value
		[defs]
		  X = the number of indices $i$ with $1 \leq i \leq n - 1$ and $a_i < a_{i + 1}$.
		[/defs]
		For example, if $n = 6$ and the permutation is 3, 5, 4, 1, 6, 2, then $X = 2$. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$\frac{n-1}{4}$`;
const label2 = String.raw`$\frac{n}{4}$`;
const label3 = String.raw`$\frac{n-1}{2}$`;
const label4 = String.raw`$\frac{n}{2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
