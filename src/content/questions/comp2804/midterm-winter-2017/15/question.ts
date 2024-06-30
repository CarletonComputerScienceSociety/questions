import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Hello}{{\rm H {\scriptsize ELLO}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the recursive algorithm $\Hello$, which takes as input an integer $n \geq 0$:
		
		(see document for missing code)
		
		If we run algorithm $\Hello(7)$, how many times is the word "hello" printed?
`;
// <p>
// 	$\mathbf{Algorithm}\ \Hello(n)\mathrm{:}$ <br>
// 	$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
// 	$\mathbf{then}\ \text{print ``hello''}$ <br>
// 	$\mathbf{else}\ \mathbf{if}\ n\ \mathrm{is}\ \mathrm{even}$ <br>
// 	$\elsesp \mathbf{then}\ \Hello(n / 2)$ <br>
// 	$\elsesp \mathbf{else}\ \Hello(n - 1);$ <br>
// 	$\elsesp \elsesp \Hello(n - 2)$ <br>
// 	$\elsesp \mathbf{endif};$ <br>
// 	$\mathbf{endif}$
// </p>

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
