import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following recursive function:
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$f(0) = $</td>
					<td>$7,$</td>
				</tr>
				<tr>
					<td style="vertical-align: top;">$f(n) = $</td>
					<td>$2 \cdot f(n - 1) + 1\; \ \text{for all}$ $\text{integers}\ n \geq 1.$</td>
				</tr>
			</tbody>
		</table>
		Which of the following is true?
`;

const label1 = String.raw`$f(n) = 8n + 7$`;
const label2 = String.raw`$f(n) = 4n^{2} + 4n + 7$`;
const label3 = String.raw`$f(n) = 2^{n+3} - 1$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
