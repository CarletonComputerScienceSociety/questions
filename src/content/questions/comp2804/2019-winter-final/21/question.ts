import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. You are given $n$ beer bottles $B_1,B_2,...,B_n$ and two cider bottles $C_1$ and $C_2$.
		Consider a uniformly random permutation of these $n + 2$ bottles. The positions in this permutation are
		numbered $1,2,...,n + 2$. Consider the random variable
		
		<ul>
  <li> X = the position of the leftmost beer bottle.</li>
		</ul>
		
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`$\frac{n}{n + 2} + \frac{2n + 6}{(n + 1)(n + 2)}$`;
const label2 = String.raw`$\frac{n}{n + 2} + \frac{2n + 2}{(n + 1)(n + 2)}$`;
const label3 = String.raw`$\frac{n}{n + 2} + \frac{4n + 6}{(n + 1)(n + 2)}$`;
const label4 = String.raw`$\frac{n}{n + 2} + \frac{4n + 2}{(n + 1)(n + 2)}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
