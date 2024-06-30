import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The functions $f: \mathbb{N} \rightarrow \mathbb{N}$ and $g: \mathbb{N} \rightarrow \mathbb{N}$ are
		recursively defined as follows:
		$$
			\begin{alignat}{2}
			f(0) &= 3, \\
			f(n) &= 5 + f(n - 1)\ \; &\mathrm{if}\ n \geq 1, \\
			g(0) &= 1, \\
			g(n) &= 2 \cdot g(n - 1) &\mathrm{if}\ n \geq 1.
			\end{alignat}
		$$
		For any integer $n \geq 0$, what is $f(g(n))$?
`;

const label1 = String.raw`$3 + 5 \cdot 2^{n}$`;
const label2 = String.raw`$5 + 3 \cdot 2^{n}$`;
const label3 = String.raw`$2^{3 + 5n}$`;
const label4 = String.raw`$2^{5 + 3n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
