import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 15 times. Define the event
		[defs]
		  A = "the result of the first three flips are equal".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`1/2`;
const label2 = String.raw`1/4`;
const label3 = String.raw`1/6`;
const label4 = String.raw`1/8`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};