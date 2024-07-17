import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given two independent random variables $X$ and $Y$, where
		
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$\Pr(X = 0)$</td>
					<td>
						$= \Pr(X = 1) = \Pr(Y = 0)$
						$= \Pr(Y = 1) = 1/2.$
					</td>
				</tr>
			</tbody>
		</table>
		
		Define the random variable $Z = X \cdot Y$. Which of the following is correct?
`;

const label1 = String.raw`The random variables $X$ and $Z$ are independent.`;
const label2 = String.raw`The random variables $X$ and $Z$ are not independent.`;
const label3 = String.raw`None of the above.`;
const label4 = String.raw`All of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
