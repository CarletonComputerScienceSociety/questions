import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 100 students,
		<ul style="margin: 0.5rem 0;">
			<li>
				40 like 8:30am classes,
			</li>
			<li>
				30 like the course COMP 2804,
			</li>
			<li>
				50 do not like 8:30am classes and do not like the course COMP 2804.
			</li>
		</ul>
		How many students in this group like 8:30am classes and like the course COMP 2804?
`;

const label1 = String.raw`10`;
const label2 = String.raw`20`;
const label3 = String.raw`30`;
const label4 = String.raw`40`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
