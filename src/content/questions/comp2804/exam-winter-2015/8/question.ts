import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following recursive function:
		[defs]
		  f(0) = $7$,
		  f(n) = $f(n - 1) + 6n - 3\; \ \text{for all}$ $\mathrm{integers}\ n \geq 1$.
		[/defs]
		Which of the following is true??
`;

const label1 = String.raw`For all $n \geq 0$: $f(n) = 2n^2 + 7$`;
const label2 = String.raw`For all $n \geq 0$: $f(n) = 3n^2 + 7$`;
const label3 = String.raw`For all $n \geq 0$: $f(n) = 4n^2 + 7$`;
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
