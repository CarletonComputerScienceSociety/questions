import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group of 100 students. In this group,
		<ul style="margin: 0.5rem 0;">
			<li>
				63 students like beer,
			</li>
			<li>
				71 students like cider, and
			</li>
			<li>
				25 students do not like beer and do not like cider.
			</li>
		</ul>
		How many students like beer and cider?
`;

const label1 = String.raw`57`;
const label2 = String.raw`58`;
const label3 = String.raw`59`;
const label4 = String.raw`60`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
