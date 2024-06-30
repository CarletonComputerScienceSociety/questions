import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{R}$ is defined by
		$$
			\begin{align}
			f(0) &= 7, \\
			f(n) &= \frac{n}{3} \cdot f(n - 1)\; \ \mathrm{for}\ n \geq 1.
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = 7 \cdot \frac{n!}{3^n}$`;
const label2 = String.raw`$f(n) = 7^n \cdot \frac{n!}{3^n}$`;
const label3 = String.raw`$f(n) = 7 \cdot \frac{(n + 1)!}{3^n}$`;
const label4 = String.raw`$f(n) = 7^n \cdot \frac{(n + 1)!}{3^n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
