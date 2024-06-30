import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\JustinBieber}{{\rm J {\scriptsize USTIN} B {\scriptsize IEBER}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the following recursive algorithm $\JustinBieber$, which takes as input an integer $n \geq 1$,
		which is a power of 2:
		
		(see document for missing code)
		
		For $n$ a power of 2, let $B(n)$ be the number of times you print "I don't like Justin Bieber" when
		running algorithm $\JustinBieber(n)$. Which of the following is true? <br>
		(n.b., $\log$ denotes the base-2 logarithm)
`;

// <div style="margin: 1rem 0;">
// 	$\mathbf{Algorithm}\ \JustinBieber(n)\mathrm{:}$ <br>
// 	$\mathbf{if}\ n = 1$ <br>
// 	$\mathbf{then}\ \text{order chicken wings}$ <br>
// 	$\mathbf{else}\ \mathbf{if}\ n = 2$
// 	<table>
// 		<tbody>
// 			<tr>
// 				<td style="vertical-align: top; padding-left: 0;">$\elsesp \mathbf{then}$</td>
// 				<td>
// 					$\text{drink one pint of}$ $\text{India Pale Ale}$
// 				</td>
// 			</tr>
// 		</tbody>
// 	</table>
// 	<table>
// 		<tbody>
// 			<tr>
// 				<td style="vertical-align: top; padding: 0;">
// 					$\elsesp \mathbf{else}\ \mathrm{print}\ \text{``}$
// 				</td>
// 				<td style="padding: 0;">
// 					$\text{I don't like}$ $\text{Justin Bieber''};$
// 				</td>
// 			</tr>
// 		</tbody>
// 	</table>
// 	$\elsesp \elsesp \JustinBieber(n / 2)$ <br>
// 	$\elsesp \mathbf{endif}$ <br>
// 	$\mathbf{endif}$
// </div>

const label1 = String.raw`$B(n) = \log n - 1\ \text{for all}\ n \geq 2.$`;
const label2 = String.raw`$B(n) = \log n - 1\ \text{for all}\ n \geq 1.$`;
const label3 = String.raw`$B(n) = \log n\ \text{for all}\ n \geq 2.$`;
const label4 = String.raw`$B(n) = n - 2\ \text{for all}\ n \geq 2.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
