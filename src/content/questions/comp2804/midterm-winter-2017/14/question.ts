import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer, and let $S_n$ be the number of ways in which $n$ can be written
		as a sum of 3's and 4's, such that the order in which the 3's and 4's occur in the sum matters.
		For example, $S_5 = 0$, because 5 cannot be written as a sum of 3's and 4's.
		We have $S_{11} = 3$, because
		
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$11$</td>
					<td>
						$= 3 + 4 + 4 = 4 + 3 + 4$
						$= 4 + 4 + 3.$
					</td>
				</tr>
			</tbody>
		</table>
		
		Which of the following is true for any $n \geq 5$?
`;

const label1 = String.raw`$S_n = 2 \cdot S_{n - 1}$`;
const label2 = String.raw`$S_n = S_{n - 1} + S_{n - 2}$`;
const label3 = String.raw`$S_n = S_{n - 2} + S_{n - 3}$`;
const label4 = String.raw`$S_n = S_{n - 3} + S_{n - 4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
