import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In a group of 100 people,
		<ul style="margin: 0.5rem 0;">
			<li>
				60 do not like Donald Trump and do not like Kim Jong Un, and
			</li>
			<li>
				25 like Kim Jong Un.
			</li>
		</ul>
		How many people in this group like Donald Trump and do not like Kim Jong Un?
`;

const label1 = String.raw`10`;
const label2 = String.raw`15`;
const label3 = String.raw`20`;
const label4 = String.raw`25`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
