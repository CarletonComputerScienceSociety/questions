import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following recursive function:
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$f(0)$</td>
					<td>$\;=\;$</td>
					<td>$3,$</td>
				</tr>
				<tr>
					<td style="vertical-align: top;">$f(n + 1)$</td>
					<td>$\;=\;$</td>
					<td>$f(n) + 10n + 2\; \ \text{for all}$ $\text{integers}\ n \geq 0.$</td>
				</tr>
			</tbody>
		</table>
		Which of the following is true?
`;

const label1 = String.raw`for all $n \geq 0$: $f(n) = 5n^{2} - 3n + 2$`;
const label2 = String.raw`for all $n \geq 0$: $f(n) = 5n^{2} - 3n + 3$`;
const label3 = String.raw`for all $n \geq 0$: $f(n) = 5n^{2} + 3n + 3$`;
const label4 = String.raw`for all $n \geq 0$: $f(n) = 5n^{2} - 2n + 3$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
