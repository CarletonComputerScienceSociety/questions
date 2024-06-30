import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f: \mathbb{N} \rightarrow \mathbb{N}$ is defined by
		$$
			\begin{align}
			f(0) &= 15 \\
			f(n) &= f(n - 1) +6n - 4\; \ \mathrm{for}\ n \geq 1
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = 3n^{2} + 2n + 15$`;
const label2 = String.raw`$f(n) = 3n^{2} - 2n + 15$`;
const label3 = String.raw`$f(n) = 3n^{2} + n + 15$`;
const label4 = String.raw`$f(n) = 3n^{2} - n + 15$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
