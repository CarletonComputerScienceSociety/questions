import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\IFeelLikeSinging}{{\rm IF {\scriptsize EEL} L {\scriptsize IKE} S {\scriptsize INGING}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the recursive algorithm $\IFeelLikeSinging$, which takes as input an integer $n \geq 0$:
		
		<p>
			$\mathbf{Algorithm}\ \IFeelLikeSinging(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 0\ \mathrm{or}\ n = 1$ <br>
			$\mathbf{then}\ \mathrm{sing}\ {\it O\ Canada}$ <br>
			$\mathbf{else}\ \mathbf{if}\ n\ \text{is odd}$ <br>
			$\elsesp \mathbf{then}\ \IFeelLikeSinging(n + 1)$ <br>
			$\elsesp \mathbf{else}\ \IFeelLikeSinging(\frac{n}{2});$ <br>
			$\elsesp \elsesp \IFeelLikeSinging(\frac{n}{2} - 1)$ <br>
			$\elsesp \mathbf{endif};$ <br>
			$\mathbf{endif}$
		</p>
		
		If you run algorithm $\IFeelLikeSinging(9)$, how many times do you sing <em>O Canada</em>?
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
