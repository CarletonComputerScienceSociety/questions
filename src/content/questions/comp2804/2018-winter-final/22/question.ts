import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\WhoGoesFirst}{{\rm W {\scriptsize HO} G {\scriptsize OES} F {\scriptsize IRST}}}
			 \newcommand{\thensp}{\phantom{\mathbf{then}\ }}$
		</div>
		
		Alexa and Shelly want to play the game of Monopoly. They use the following recursive algorithm
		to decide who goes first:

		<p>
			$\WhoGoesFirst(k):$ <br>
			$\quad \mathbf{if}\ k \geq 1\ \mathbf{then}$ <br>
			$\quad \quad \text{Alexa rolls the die, let a be the result}$ <br>
			$\quad \quad \text{Shelly rolls the die, let s be the result}$ <br>
			$\quad \quad \mathbf{if}\ a > s\ \mathbf{then}$ <br>
			$\quad \quad \quad \text{print Alexa goes first}$ <br>
			$\quad \quad \quad \mathbf{return}\ k$ <br>
			$\quad \quad \mathbf{endif}$ <br>
			$\quad \quad \mathbf{if}\ a < s\ \mathbf{then}$ <br>
			$\quad \quad \quad \text{print Shelly goes first}$ <br>
			$\quad \quad \quad \mathbf{return}\ k$ <br>
			$\quad \quad \mathbf{endif}$ <br>
			$\quad \quad \mathbf{if}\ a = s\ \mathbf{then}$ <br>
			$\quad \quad \quad \WhoGoesFirst(k + 1)$ <br>
			$\quad \quad \mathbf{endif}$ <br>
		</p>
		
		The ladies run algorithm $\WhoGoesFirst(1)$, i.e., with $k = 1$. Define the random variable $X$ to
		be the value of the output of this algorithm. <br>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`3/2`;
const label2 = String.raw`5/4`;
const label3 = String.raw`5/6`;
const label4 = String.raw`6/5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
