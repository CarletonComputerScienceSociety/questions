import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following recursive function:
		[defs]
		  f(0) = $1$,
		  f(n) = $\frac{5}{n} \cdot f(n - 1)\; \ \text{for all}$ $\mathrm{integers}\ n \geq 1$.
		[/defs]
		Which of the following is true for all $n \geq 0$?
`;

const label1 = String.raw`$f(n) = \frac{5}{n!}$`;
const label2 = String.raw`$f(n) = \frac{5^{n}}{n!}$`;
const label3 = String.raw`$f(n) = \frac{5^{n}}{(n+1)!}$`;
const label4 = String.raw`$f(n) = \frac{5^{n+1}}{n!}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
