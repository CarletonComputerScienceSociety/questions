import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Fibonacci numbers are defined as follows: $f_0 = 0$, $f_1 = 1$, and $f_n = f_{n-1} + f_{n-2}$ for
		$n \geq 2$. <br>
		
		Consider again the recursive algorithm $\Fib$, which takes as input an integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \Fib(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ f = n$ <br>
			$\mathbf{else}\ f = \Fib(n - 1) + \Fib(n - 2)$ <br>
			$\mathbf{endif};$ <br>
			$\mathbf{return}\ f$ <br>
		</p>
		
		For $n \geq 3$, run algorithm $\Fib(n)$ and let $a_n$ be the number of times that $\Fib(2)$ is called. <br>
		Which of the following is true?
`;

const label1 = String.raw`For $n \geq 3$, $a_n = f_{n - 1}$`;
const label2 = String.raw`For $n \geq 3$, $a_n = f_n$`;
const label3 = String.raw`For $n \geq 3$, $a_n = f_{n + 1}$`;
const label4 = String.raw`For $n \geq 3$, $a_n = -1 + f_n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
