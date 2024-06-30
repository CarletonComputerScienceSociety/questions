import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following recursive function:
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$f(0) = $</td>
					<td>$-17,$</td>
				</tr>
				<tr>
					<td style="vertical-align: top;">$f(n) = $</td>
					<td>$f(n - 1) + 8n - 2\; \ \text{for all}$ $\text{integers}\ n \geq 1.$</td>
				</tr>
			</tbody>
		</table>
		Which of the following is true?
`;

const label1 = String.raw`for all $n \geq 0$: $f(n) = 3n^{2} - n - 17$`;
const label2 = String.raw`for all $n \geq 0$: $f(n) = 3n^{2} + n - 17$`;
const label3 = String.raw`for all $n \geq 0$: $f(n) = 4n^{2} - 2n - 17$`;
const label4 = String.raw`for all $n \geq 0$: $f(n) = 4n^{2} + 2n - 17$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
