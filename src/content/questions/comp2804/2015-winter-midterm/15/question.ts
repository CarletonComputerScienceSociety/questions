import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 5 times. Define the event
		<ul>
  <li> A = "the number of heads is odd".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`3/8`;
const label2 = String.raw`4/8`;
const label3 = String.raw`5/8`;
const label4 = String.raw`6/8`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
