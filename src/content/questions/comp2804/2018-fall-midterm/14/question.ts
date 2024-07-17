import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Fart}{{\rm F {\scriptsize ART}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}
			 \newcommand{\thensp}{\phantom{\mathbf{then}\ }}$
		</div>
		
		Consider the recursive algorithm $\Fart$, which takes as input an integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \Fart(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ \text{eat one can of beans}$ <br>
			$\mathbf{else}\ \mathbf{if}\ n\ \mathrm{is}\ \mathrm{even}$ <br>
			$\elsesp \mathbf{then}\ \text{fart once};$ <br>
			$\elsesp \thensp \Fart \left( n \middle/ 2 \right)$ <br>
			$\elsesp \mathbf{else}\ \Fart(n + 1);$ <br>
			$\elsesp \elsesp \text{fart once};$ <br>
			$\elsesp \elsesp \Fart(n - 1)$ <br>
			$\elsesp \mathbf{endif};$ <br>
			$\mathbf{endif}$
		</p>
		
		If you run algorithm $\Fart(9)$, how many times do you fart?
`;

const label1 = String.raw`11`;
const label2 = String.raw`12`;
const label3 = String.raw`13`;
const label4 = String.raw`14`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
