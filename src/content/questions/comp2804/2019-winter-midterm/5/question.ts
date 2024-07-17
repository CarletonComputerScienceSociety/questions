import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 100 students,
		<ul style="margin: 0.5rem 0;">
			<li>
				37 students like beer,
			</li>
			<li>
				18 students like cider,
			</li>
			<li>
				55 students do not like beer and do not like cider.
			</li>
		</ul>
		How many students like beer and cider?
`;

const label1 = String.raw`8`;
const label2 = String.raw`9`;
const label3 = String.raw`10`;
const label4 = String.raw`11`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
