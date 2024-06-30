import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider permutations $a_1,a_2,\dots,a_{10}$ of the set $\{1,2,\dots,10\}$ for which
		<ul style="margin: 0.5rem 0;">
			<li>
				$a_1,a_3,a_5,a_7,a_9$ are all odd and
			</li>
			<li>
				$a_2,a_4,a_6,a_8,a_{10}$ are all even.
			</li>
		</ul>
		How many such permutations are there?
`;

const label1 = String.raw`$10!$`;
const label2 = String.raw`$5^5 \cdot 5^5$`;
const label3 = String.raw`$(5!)^2$`;
const label4 = String.raw`$2 \cdot (5!)^2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
