import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 9 times. Define the event
		<ul>
  <li> A = "the result of the first flip is not equal to the result of the second flip".</li>
		</ul>
		
		What is $\Pr(A)$?
`;

const label1 = String.raw`1/4`;
const label2 = String.raw`1/3`;
const label3 = String.raw`1/2`;
const label4 = String.raw`1`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
