import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 20 people,
		<ul style="margin: 0.5rem 0;">
			<li>
				6 are blond,
			</li>
			<li>
				7 have green eyes,
			</li>
			<li>
				11 are not blond and do not have green eyes.
			</li>
		</ul>
		How many people in this group are blond and have green eyes?
`;

const label1 = String.raw`3`;
const label2 = String.raw`4`;
const label3 = String.raw`5`;
const label4 = String.raw`6`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
