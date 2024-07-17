import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 12 boys, 17 girls, and 25 dogs. How many ways are there to arrange them on a line if
		<ul style="margin: 0.5rem 0;">
			<li>
				all boys stand next to each other,
			</li>
			<li>
				all girls stand next to each other,
			</li>
			<li>
				all dogs stand next to each other,
			</li>
			<li>
				none of the boys are standing next to any of the girls.
			</li>
		</ul>
`;

const label1 = String.raw`$12! + 17! + 25!$`;
const label2 = String.raw`$2(12! + 17! + 25!)$`;
const label3 = String.raw`$(12!)(17!)(25!)$`;
const label4 = String.raw`$2(12!)(17!)(25!)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
