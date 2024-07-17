import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\SundayEveningExam}{{\rm S {\scriptsize UNDAY} E {\scriptsize VENING} E {\scriptsize XAM}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the recursive algorithm $\SundayEveningExam$, which takes as input an integer $n \geq 1$:
		
		(see file for removed code)
		
		Let $P(n)$ be the number of times the line "I don't like Sunday evening exams" is printed when running
		algorithm $\SundayEveningExam(n)$. Which of the following is true for all $n \geq 1$?
`;

// <div style="margin: 1rem 0;">
// 	$\mathbf{Algorithm}\ \SundayEveningExam(n)\mathrm{:}$ <br>
// 	$\mathbf{if}\ n = 1$ <br>
// 	<table>
// 		<tbody>
// 			<tr>
// 				<td style="padding: 0; vertical-align: top;">
// 					$\mathbf{then}\ \mathrm{print}\ \text{``}$
// 				</td>
// 				<td style="padding: 0;">$\text{I don't like Sunday}$ $\text{evening exams''}$</td>
// 			</tr>
// 		</tbody>
// 	</table>
// 	$\mathbf{else}\ \mathbf{for}\ i = 1\ \mathbf{to}\ n$ <br>
// 	<table>
// 		<tbody>
// 			<tr>
// 				<td style="padding: 0; vertical-align: top;">
// 					$\elsesp \mathbf{do}\ \mathrm{print}\ \text{``}$
// 				</td>
// 				<td style="padding: 0;">$\text{I don't like Sunday}$ $\text{evening exams''}$</td>
// 			</tr>
// 		</tbody>
// 	</table>
// 	$\elsesp \mathbf{endfor};$ <br>
// 	$\elsesp \SundayEveningExam(n - 1)$ <br>
// 	$\mathbf{endif}$
// </div>

const label1 = String.raw`$P(n) = 1 + \frac{n(n-1)}{2}$`;
const label2 = String.raw`$P(n) = \frac{n(n-1)}{2}$`;
const label3 = String.raw`$P(n) = \frac{n(n+1)}{2}$`;
const label4 = String.raw`$P(n) = 1 + \frac{n(n+1)}{2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
