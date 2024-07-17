import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider three events, $A$, $B$, and $C$ in a sample space $S$. Is the following true or false?
		<table style="margin: 1rem auto;">
			<tbody>
				<tr>
					<td style="vertical-align: top;">$\Pr\bigl(A \cup (\overline{B} \cap \overline{C})\bigr) = $</td>
					<td>$\Pr(A) + \Pr(B)\ - $ $\Pr(C).$</td>
				</tr>
			</tbody>
		</table>
`;

const label1 = String.raw`True`;
const label2 = String.raw`False`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
