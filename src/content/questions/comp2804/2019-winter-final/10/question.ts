import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{N}$ is recursively defined as follows:
		$$
			\begin{align}
			f(0) &= 2 \\
			f(n) &= 3 \cdot f(n - 1) + 1, \text{ if } n \geq 1
			\end{align}
		$$
		Which of the following is true for all integers $n \geq 0$?
`;

const label1 = String.raw`$f(n) = \frac{5}{2} \cdot 3^n - 1$`;
const label2 = String.raw`$f(n) = \frac{3}{2} \cdot 3^n - \frac{1}{2}$`;
const label3 = String.raw`$f(n) = \frac{5}{2} \cdot 3^n - \frac{1}{2}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
