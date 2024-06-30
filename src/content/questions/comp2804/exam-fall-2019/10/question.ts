import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\IFeelLikeSinging}{{\rm IF {\scriptsize EEL} L {\scriptsize IKE} S {\scriptsize INGING}}}$
		</div>
		
		Consider the recursive algorithm $\IFeelLikeSinging$, which takes as input an integer $n \geq 0$:
		
		<p>
			$\IFeelLikeSinging(n):$ <br>
			$\quad \mathbf{if}\ n = 0\ \mathrm{or}\ n = 1\ \mathbf{then}$ <br>
			$\quad \quad \text{sing O Canada}$ <br>
			$\quad \mathbf{else}\ \mathbf{if}\ n\ \text{is odd}\ \mathbf{then}$ <br>
			$\quad \quad \IFeelLikeSinging(n + 1)$ <br>
			$\quad \mathbf{else}$ <br>
			$\quad \quad \IFeelLikeSinging(\frac{n}{2})$ <br>
			$\quad \quad \IFeelLikeSinging(\frac{n}{2} - 1)$ <br>
		</p>
		
		If you run algorithm $\IFeelLikeSinging(9)$, how many times do you sing O Canada?
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
