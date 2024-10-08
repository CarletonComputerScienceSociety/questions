import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>$\newcommand{\HelloWorld}{{\rm H {\scriptsize ELLO} W {\scriptsize ORLD}}}$</div>
		
		Consider the recursive algorithm $\HelloWorld$, which takes as input an integer $n \geq 0$:
		<p>
			$\mathbf{Algorithm}\ \HelloWorld(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ \mathrm{print}\ \mathit{Hello}\ \mathit{World}$ <br>
			$\mathbf{else}\ \mathbf{if}\ n \text{ is a multiple of } 3$ <br>
			$\qquad \mathbf{then}\ \HelloWorld\left( n \middle/ 3 \right);$ <br>
			$\qquad \qquad \ \ \mathrm{print}\ \mathit{Hello}\ \mathit{World};$ <br>
			$\qquad \qquad \ \ \HelloWorld\left( 2n \middle/ 3 \right)$ <br>
			$\qquad \mathbf{else}\ \HelloWorld(n + 1)$ <br>
			$\qquad \mathbf{endif};$ <br>
			$\mathbf{endif}$
		</p>
		Which of the following is correct?
`;

const label1 = String.raw`For any integer $n \geq 0$, algorithm $\HelloWorld(n)$ terminates.`;
const label2 = String.raw`There exists an integer $n \geq 0$, for which algorithm $\HelloWorld(n)$ does not terminate.`;
const label3 = String.raw`All of the above.`;
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
