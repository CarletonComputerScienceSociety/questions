import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{N}$ is recursively defined as follows:
		$$
			\begin{align}
			f(0) &= 6, \\
			f(n) &= 4 \cdot f(n-1) + 2^{n} \ \ \mathrm{if}\ n \geq 1.
			\end{align}
		$$
		Which of the following is true for all integers $n \geq 0$?
`;

const label1 = String.raw`$f(n) = 6 \cdot 4^{n} - 2^{n}$`;
const label2 = String.raw`$f(n) = 7 \cdot 4^{n} - 2^{n}$`;
const label3 = String.raw`$f(n) = 8 \cdot 4^{n} - 2^{n+1}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
