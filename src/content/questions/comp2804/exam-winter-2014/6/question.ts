import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 150 people,
		<ul style="margin: 0.5rem 0;">
			<li>
				30 weigh at least 150 pounds,
			</li>
			<li>
				60 are at least 6 feet tall,
			</li>
			<li>
				70 weigh less than 150 pounds and are less than 6 feet tall.
			</li>
		</ul>
		How many people weigh at least 150 pounds and are at least 6 feet tall?
`;

const label1 = String.raw`10`;
const label2 = String.raw`20`;
const label3 = String.raw`30`;
const label4 = String.raw`40`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
