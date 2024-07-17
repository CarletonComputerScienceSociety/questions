import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The functions $f: \mathbb{N} \rightarrow \mathbb{N}$ and $g: \mathbb{N} \rightarrow \mathbb{N}$ are
		recursively defined as follows:
		$$
			\begin{alignat}{2}
			f(0) &= 0, \\
			f(n) &= 2 + f(n - 1)\ \; &\mathrm{if}\ n \geq 1, \\
			g(0) &= 1, \\
			g(n) &= 7 \cdot g(n - 1)\ \; &\mathrm{if}\ n \geq 1.
			\end{alignat}
		$$
		For any integer $n \geq 0$, what is $g(f(n))$?
`;

const label1 = String.raw`$7^{2n}$`;
const label2 = String.raw`$7^{n}$`;
const label3 = String.raw`$(2n)^{7}$`;
const label4 = String.raw`$n^{7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
