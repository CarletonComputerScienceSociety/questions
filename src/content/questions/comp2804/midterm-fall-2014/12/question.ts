import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Fib}{{\rm F \scriptsize IB}}$
		</div>
		
		Consider the following recursive algorithm $\Fib$, which takes as input an
		integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \Fib(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ f = n$ <br>
			$\mathbf{else}\ f = \Fib(n - 1) + \Fib(n - 2)$ <br>
			$\mathbf{endif};$ <br>
			$\mathbf{return}\ f$ <br>
		</p>
		
		When running $\Fib(9)$, how many calls are there to $\Fib(4)$?
`;

const label1 = String.raw`6`;
const label2 = String.raw`7`;
const label3 = String.raw`8`;
const label4 = String.raw`9`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
