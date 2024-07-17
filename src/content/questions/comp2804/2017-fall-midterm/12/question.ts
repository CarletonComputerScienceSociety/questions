import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The functions $f : \mathbb{N}^2 \rightarrow \mathbb{N}$ and $g : \mathbb{N} \rightarrow \mathbb{N}$
		are recursively defined as follows:
		
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$f(m, 0)$</td>
					<td style="vertical-align: top;">$= m\ \;$</td>
					<td>$\mathrm{if}\ m \geq 0,$</td>
				</tr>
				<tr>
					<td style="vertical-align: top;">$f(m, n)$</td>
					<td style="vertical-align: top;">$= 1 + f(m, n - 1)\ \;$</td>
					<td>$\mathrm{if}\ m \geq 0$ $\mathrm{and}\ n \geq 1,$</td>
				</tr>
				<tr>
					<td>$g(0)$</td>
					<td colspan="2">$= 1,$</td>
				</tr>
				<tr>
					<td style="vertical-align: top;">$g(n)$</td>
					<td style="vertical-align: top;">$= 5 \cdot g(n - 1)\ \;$</td>
					<td>$\mathrm{if}\ n \geq 1.$</td>
				</tr>
			</tbody>
		</table>
		
		For any integer $n \geq 0$, what is $f(g(n), g(n))$?
`;

const label1 = String.raw`$2 \cdot 5^{n}$`;
const label2 = String.raw`$2 \cdot 5^{n-1}$`;
const label3 = String.raw`$(5^{n})^{2}$`;
const label4 = String.raw`$(5^{n-1})^{2}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
