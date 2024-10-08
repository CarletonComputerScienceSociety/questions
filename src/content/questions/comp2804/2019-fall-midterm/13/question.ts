import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>$\newcommand{\Fib}{{\rm F \scriptsize IB}}$</div>
		
		Consider the following recursive algorithm $\Fib$, which takes as input an
		integer $n \geq 0$:
		
		<p>
			$\Fib(n):$ <br>
			$\quad \mathbf{if}\ n = 0\ \mathrm{or}\ n = 1\ \mathbf{then}$ <br>
			$\quad \quad f = n$ <br>
			$\quad \mathbf{else}$ <br>
			$\quad \quad f = \Fib(n - 1) + \Fib(n - 2)$ <br>
			$\quad \mathbf{return}\ f$
		</p>
		
		When running $\Fib(12)$, how many calls are there to $\Fib(8)$?
`;

const label1 = String.raw`4`;
const label2 = String.raw`5`;
const label3 = String.raw`6`;
const label4 = String.raw`7`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
