import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \{1,2,3,\dots\} \rightarrow \mathbb{R}$ is defined by
		$$
			\begin{align}
			f(1) &= 2, \\
			f(n) &= 2 \left( \frac{n - 1}{n} \right)^2 \cdot f(n - 1)\ \mathrm{if}\ n \geq 2.
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = \frac{2^{n}}{(n-1)^{2}}$`;
const label2 = String.raw`$f(n) = \frac{2^{n-1}}{n^{2}}$`;
const label3 = String.raw`$f(n) = \frac{2^{n}}{n^{2}}$`;
const label4 = String.raw`$f(n) = \frac{n^{2}}{2^{n}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
