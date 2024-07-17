import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Heads}{{\rm H \scriptsize EADS}}$
		</div>
		
		Consider a coin that comes up heads with probability 1/3 and, thus, tails with probability 2/3.
		Consider the following recursive algorithm $\Heads$, which takes as input a positive integer $k$:
		
		<div style="margin: 1rem 0;">
			$\mathbf{Algorithm}\ \Heads(k)\mathrm{:}$ <br>
			<table>
				<tbody>
					<tr>
						<td style="vertical-align: top;">$//$</td>
						<td>
							$\text{all coin flips made}$ $\text{are mutually independent}$
						</td>
					</tr>
				</tbody>
			</table>
			$\text{flip the coin};$ <br>
			$\mathbf{if}\ \text{the coin came up heads}$ <br>
			$\mathbf{then}\ \mathrm{return}\ k + 1$ <br>
			$\mathbf{else}\ \Heads(k + 1)$ <br>
			$\mathbf{endif}$
		</div>
		
		You run algorithm $\Heads(1)$, i.e., with $k = 1$. Define the random variable $X$ to be the value of
		the output of this algorithm. Let $m \geq 1$ be an integer. What is $\Pr(X = m + 1)$?
`;

const label1 = String.raw`$2^{m-1}/3^{m}$`;
const label2 = String.raw`$(2/3)^{m}$`;
const label3 = String.raw`$2^{m}/3^{m+1}$`;
const label4 = String.raw`$(2/3)^{m+1}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
