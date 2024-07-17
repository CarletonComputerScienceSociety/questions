import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{N}$ is defined by
		$$
			\begin{align}
			f(0) &= 8 \\
			f(n) &= f(n - 1) + 6n - 8\; \ \mathrm{for}\ n \geq 1
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = 2n^{2} - 5n + 7$`;
const label2 = String.raw`$f(n) = 2n^{2} - 5n + 8$`;
const label3 = String.raw`$f(n) = 3n^{2} - 5n + 8$`;
const label4 = String.raw`$f(n) = 4n^{2} - 5n + 8$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
