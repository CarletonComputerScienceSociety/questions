import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Fib}{{\rm F \scriptsize IB}}$
		</div>
		
		Consider the recursive algorithm $\Fib$, which takes as input an
		integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \Fib(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ f = n$ <br>
			$\mathbf{else}\ f = \Fib(n - 1) + \Fib(n - 2)$ <br>
			$\mathbf{endif};$ <br>
			$\mathbf{return}\ f$ <br>
		</p>
		
		When running $ FIB(5) $, how many calls are there to $ FIB(2) $? 
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$1$", correct: false },
    { label: "$2$", correct: false },
    { label: "$3$", correct: true },
    { label: "$4$", correct: false },
  ],
};
