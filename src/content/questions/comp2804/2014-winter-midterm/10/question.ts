import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{N}$ is defined by
		$$
			\begin{align}
			f(0) &= 2 \\
			f(n + 1) &= f(n) + 6n - 2\; \ \mathrm{for}\ n \geq 0
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = 3n^{2} - 5n + 2$`;
const label2 = String.raw`$f(n) = 3n^{2} + 5n + 2$`;
const label3 = String.raw`$f(n) = 2n^{2} - 5n + 2$`;
const label4 = String.raw`$f(n) = 2n^{2} + 5n + 2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
