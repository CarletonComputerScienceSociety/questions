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
		
		For $ n \geq 2 $, run algorithm $ FIB(n)$ and let $ a_n $ be the number of times that $ FIB(0) $ is called. 
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: "$a_n = f_{n-1}$", correct: true },
    { label: "$a_n = f_n$", correct: false },
    { label: "$a_n = f_n - 1$", correct: false },
    { label: "$a_n = f_{n+1}$", correct: false },
  ],
};
