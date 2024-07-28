import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. You are given $n$ beer bottles $B_1,B_2,\dots,B_n$ and two cider
		bottles $C_1$ and $C_2$. You choose a uniformly random 3-element subset of the set of these $n+2$
		bottles. Define the random variable $X$ to be
		<ul>
  <li> X = the number of cider bottles in the chosen subset.</li>
		</ul>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`$\frac{2 {{n}\choose{2}} + n}{{{n+2}\choose{3}}}$`;
const label2 = String.raw`$\frac{2 {{n}\choose{2}} + n + 1}{{{n+2}\choose{3}}}$`;
const label3 = String.raw`$\frac{2 {{n}\choose{2}} + 2n}{{{n+2}\choose{3}}}$`;
const label4 = String.raw`$\frac{2 {{n}\choose{2}} + n - 1}{{{n+2}\choose{3}}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
