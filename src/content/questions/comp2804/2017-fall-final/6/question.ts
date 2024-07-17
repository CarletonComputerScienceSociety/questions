import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a group of 100 students. In this group,
		<ul style="margin: 0.5rem 0;">
			<li>
				13 students like Donald Trump,
			</li>
			<li>
				25 students like Justin Bieber, and
			</li>
			<li>
				8 students like Donald Trump and like Justin Bieber.
			</li>
		</ul>
		How many students do not like Donald Trump and do not like Justin Bieber?
`;

const label1 = String.raw`69`;
const label2 = String.raw`70`;
const label3 = String.raw`71`;
const label4 = String.raw`72`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
