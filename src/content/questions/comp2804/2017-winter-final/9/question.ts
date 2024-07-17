import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Hello}{{\rm H {\scriptsize ELLO}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}
			 \newcommand{\thensp}{\phantom{\mathbf{then}\ }}$
		</div>
		
		Consider the recursive algorithm $\Hello$, which takes as input an integer $n \geq 0$:
		
		(see file for missing code)
		
		If we run algorithm $\Hello(7)$, how many times is the word "hello" printed?
`;

// <p>
// 	$\mathbf{Algorithm}\ \Hello(n)\mathrm{:}$ <br>
// 	$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
// 	$\mathbf{then}\ \text{print ``hello''}$ <br>
// 	$\mathbf{else}\ \mathbf{if}\ n\ \mathrm{is}\ \mathrm{even}$ <br>
// 	$\elsesp \mathbf{then}\ \Hello(\frac{n}{2});$ <br>
// 	$\elsesp \thensp \Hello(\frac{n}{2} - 1)$ <br>
// 	$\elsesp \mathbf{else}\ \Hello(n - 1);$ <br>
// 	$\elsesp \elsesp \Hello(n - 2)$ <br>
// 	$\elsesp \mathbf{endif};$ <br>
// 	$\mathbf{endif}$
// </p>

const label1 = String.raw`9`;
const label2 = String.raw`10`;
const label3 = String.raw`11`;
const label4 = String.raw`12`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
