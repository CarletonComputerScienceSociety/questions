import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\WhoGoesFirst}{{\rm W {\scriptsize HO} G {\scriptsize OES} F {\scriptsize IRST}}}
			 \newcommand{\thensp}{\phantom{\mathbf{then}\ }}$
		</div>
		
		Alexa and Shelly want to play the game of Monopoly. They use the following recursive algorithm
		to decide who goes first:
		
		<div style="margin: 1rem 0;">
			$\mathbf{Algorithm}\ \WhoGoesFirst(k)\mathrm{:}$ <br>
			<table>
				<tbody>
					<tr>
						<td style="vertical-align: top;">$//$</td>
						<td>
							$k \geq 1,$ $\text{the die is fair},$ $\text{and all rolls are independent}$
						</td>
					</tr>
				</tbody>
			</table>
			$\text{Alexa rolls the die, let \(a\) be the result};$ <br>
			$\text{Shelly rolls the die, let \(s\) be the result};$ <br>
			$\mathbf{if}\ a > s$ <br>
			$\mathbf{then}\ \mathrm{print}\ {\tt Alexa\ goes\ first};$ <br>
			$\thensp \mathrm{return}\ k$ <Br>
			$\mathbf{endif};$ <br>
			$\mathbf{if}\ a < s$ <br>
			$\mathbf{then}\ \mathrm{print}\ {\tt Shelly\ goes\ first};$ <br>
			$\thensp \mathrm{return}\ k$ <br>
			$\mathbf{endif};$ <br>
			$\mathbf{if}\ a = s$ <br>
			$\mathbf{then}\ \WhoGoesFirst(k + 1)$ <br>
			$\mathbf{endif}$
		</div>
		
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
