import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 100 students,
		<ul style="margin: 0.5rem 0;">
			<li>
				25 drink cider,
			</li>
			<li>
				50 drink beer,
			</li>
			<li>
				33 do not drink cider and do not drink beer.
			</li>
		</ul>
		How many people in this group drink both cider and beer?
`;

const label1 = String.raw`8`;
const label2 = String.raw`9`;
const label3 = String.raw`10`;
const label4 = String.raw`11`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
