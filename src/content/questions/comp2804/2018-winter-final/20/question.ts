import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. You are given $n$ beer bottles $B_1,B_2,\dots,B_n$ and one cider
		bottle $C$. Consider a uniformly random permutation of these $n+1$ bottles. The positions in this
		permutation are numbered as $1,2,3,\dots,n+1$. Define the random variable $X$ to be
		<ul>
  <li> X = the position of the leftmost beer bottle.</li>
		</ul>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`1`;
const label2 = String.raw`$\frac{n+2}{n+1}$`;
const label3 = String.raw`$\frac{n+1}{n}$`;
const label4 = String.raw`$\frac{n+3}{n+1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
