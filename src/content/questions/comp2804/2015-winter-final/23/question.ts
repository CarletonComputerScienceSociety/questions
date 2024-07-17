import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\TwoTails}{{\rm T {\scriptsize WO} T {\scriptsize AILS}}}$
		</div>
		
		Consider the following recursive algorithm $\TwoTails$, which takes as input a positive integer $k$:
		
		<div style="margin: 1rem 0;">
			$\mathbf{Algorithm}\ \TwoTails(k)\mathrm{:}$ <br>
			<table>
				<tbody>
					<tr>
						<td style="vertical-align: top;">$//$</td>
						<td>
							$\text{all coin flips made are mutually}$ $\text{independent}$
						</td>
					</tr>
				</tbody>
			</table>
			$\text{flip a fair coin twice};$ <br>
			$\mathbf{if}\ \text{the coin came up heads exactly twice}$ <br>
			$\mathbf{then}\ \mathrm{return}\ 2^k$ <br>
			$\mathbf{else}\ \TwoTails(k + 1)$ <br>
			$\mathbf{endif}$ <br>
		</div>
		
		You run algorithm $\TwoTails(1)$, i.e., with $k = 1$. Define the random variable $X$ to be the value of the
		output of this algorithm.
		Let $k \geq 1$ be an integer. What is $\Pr(X = 2^k)$?
`;

const label1 = String.raw`$(1/4)^{k} \cdot 3/4$`;
const label2 = String.raw`$(1/4)^{k-1} \cdot 3/4$`;
const label3 = String.raw`$(3/4)^{k} \cdot 1/4$`;
const label4 = String.raw`$(3/4)^{k-1} \cdot 1/4$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
