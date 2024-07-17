import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Fib}{{\rm F \scriptsize IB}}$
		</div>
		
		The Fibonacci numbers are defined as follows: $f_0 = 0$, $f_1 = 1$, and $f_n = f_{n-1} + f_{n-2}$ for
		$n \geq 2$. <br>
		
		Consider the recursive algorithm $\Fib$, which takes as input an integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \Fib(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ f = n$ <br>
			$\mathbf{else}\ f = \Fib(n - 1) + \Fib(n - 2)$ <br>
			$\mathbf{endif};$ <br>
			$\mathbf{return}\ f$ <br>
		</p>
		
		For $n \geq 5$, run algorithm $\Fib(n)$ and let $a_n$ be the number of times that $\Fib(4)$ is called. <br>
		Which of the following is true?
`;

const label1 = String.raw`for all $n \geq 5$, $a_n = f_n$`;
const label2 = String.raw`for all $n \geq 5$, $a_n = f_{n-1}$`;
const label3 = String.raw`for all $n \geq 5$, $a_n = f_{n-2}$`;
const label4 = String.raw`for all $n \geq 5$, $a_n = f_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
