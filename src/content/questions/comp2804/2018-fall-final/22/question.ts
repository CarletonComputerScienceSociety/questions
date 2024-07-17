import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\TriIsHungry}{{\rm T {\scriptsize RI} I {\scriptsize S} H {\scriptsize UNGRY}}}$
		</div>
		
		Zoltan's Noodle House is a popular restaurant in downtown Ottawa. When you order the surprise dish,
		you get <em>Mi Quang</em> with probability 1/4, <em>Bun Cha Ca</em> with probability 1/3, and
		<em>Banh Xeo</em> with probability 5/12. <br>
		Tri enjoys going to this restaurant, because the food reminds him of his mommy's food back home in Da Nang. <br>
		Tri runs the following recursive algorithm:
		
		<!-- this markup is messy to enable correctly-aligned word wrapping on horizontally constrained devices -->
		<div style="margin: 1rem 0;">
			$\mathbf{Algorithm}\ \TriIsHungry\mathrm{:}$ <br>
			<table>
				<tbody>
					<tr>
						<td style="vertical-align: top;">$//$</td>
						<td>
							$\text{the results of all}$ $\text{orders are independent}$
						</td>
					</tr>
				</tbody>
			</table>
			$\text{Tri orders the surprise dish;}$ <br>
			$\mathbf{if}\ \mathrm{Tri}\ \mathrm{gets}\ \mathit{Mi}\ \mathit{Quang}$ <br>
			$\mathbf{then}\ \text{Tri eats the dish;}$ <br>
			$\qquad\ \ \TriIsHungry$ <br>
			$\mathbf{else}\ \mathbf{if}\ \mathrm{Tri}\ \mathrm{gets}\ \mathit{Bun}\ \mathit{Cha}\ \mathit{Ca}$ <br>
			$\qquad\, \mathbf{then}\ \text{Tri eats the dish;}$ <br>
			$\qquad \qquad\ \ \, \TriIsHungry$ <br>
			$\qquad\, \mathbf{else}\ \text{Tri eats the dish;}$ <br>
			<table>
				<tbody>
					<tr>
						<td style="padding: 0;">$\hspace{4.05em}$</td>
						<td style="padding: 0;">$\text{Tri pays the bill}$ $\text{and goes home}$</td>
					</tr>
				</tbody>
			</table>
			$\qquad\, \mathbf{endif}$ <br>
			$\mathbf{endif}$ <br>
		</div>
		
		Define the random variable $X$ to be the number of dishes that Tri eats when running algorithm $\TriIsHungry$. <br>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = String.raw`5/12`;
const label2 = String.raw`12/5`;
const label3 = String.raw`5/7`;
const label4 = String.raw`7/5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
