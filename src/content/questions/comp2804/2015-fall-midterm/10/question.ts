import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The function $f : \mathbb{N} \rightarrow \mathbb{N}$ is defined by
		$$
			\begin{align}
			f(0) &= 7 \\
			f(n) &= f(n - 1) + 10n - 6\; \ \mathrm{for}\ n \geq 1
			\end{align}
		$$
		What is $f(n)$?
`;

const label1 = String.raw`$f(n) = 4n^2 - 2n + 7$`;
const label2 = String.raw`$f(n) = 4n^2 - n + 7$`;
const label3 = String.raw`$f(n) = 5n^2 - 2n + 7$`;
const label4 = String.raw`$f(n) = 5n^2 - n + 7$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
