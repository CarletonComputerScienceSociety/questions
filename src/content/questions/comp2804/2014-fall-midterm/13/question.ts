import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Silly}{{\rm S \scriptsize ILLY}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the following recursive algorithm $\Silly$, which takes as input an integer $n \geq 1$ which is a power of 2:
		
		<p>
			$\mathbf{Algorithm}\ \Silly(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 1$ <br>
			$\mathbf{then}\ \text{drink one pint of beer}$ <br>
			$\mathbf{else}\ \mathbf{if}\ n = 2$ <br>
			$\elsesp \mathbf{then}\ \text{fart once}$ <br>
			$\elsesp \mathbf{else}\ \text{fart once};$ <br>
			$\elsesp \elsesp \Silly(n / 2);$ <br>
			$\elsesp \elsesp \text{fart once}$ <br>
			$\elsesp \mathbf{endif}$ <br>
			$\mathbf{endif}$
		</p>
		
		For $n$ a power of 2, let $F(n)$ be the number of times you fart when running algorithm $\Silly(n)$.
		Which of the following is true? <br>
		(n.b., $\log$ denotes the base-2 logarithm)
`;

const label1 = String.raw`$F(n) = \log n\ \mathrm{for}\ n \geq 1.$`;
const label2 = String.raw`$F(n) = 2 \log n\ \mathrm{for}\ n \geq 1.$`;
const label3 = String.raw`$F(n) = (2 \log n) - 1\ \mathrm{for}\ n \geq 1.$`;
const label4 = String.raw`$F(n) = (2 \log n) - 1\ \mathrm{for}\ n \geq 2.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
