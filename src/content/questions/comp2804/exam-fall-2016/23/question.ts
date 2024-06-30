import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the set $S = \{1,2,3,...,10\}$. You choose a uniformly random element $z$ in $S$.
		Define the random variables
		$$
			X = 
			\begin{cases}
			0\; \ \text{if \(z\) is even}, \\
			1\; \ \text{if \(z\) is odd}
			\end{cases}
		$$
		and
		$$
			Y = 
			\begin{cases}
			0\; \ \mathrm{if}\ z \in \{1,2\}, \\
			1\; \ \mathrm{if}\ z \in \{3,4,5,6\}, \\
			2\; \ \mathrm{if}\ z \in \{7,8,9,10\}.
			\end{cases}
		$$
		Which of the following is true?
`;

const label1 = String.raw`The random variables $X$ and $Y$ are independent.`;
const label2 = String.raw`The random variables $X$ and $Y$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
