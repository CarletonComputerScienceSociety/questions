import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We roll two fair and independent dice. Define the events
		[defs]
		  A = "at least one of the dice shows a 3",
		  B = "the sum of the dice is 5".
		[/defs]
		What is the conditional probability $\Pr(A|B)$?
`;

const label1 = String.raw`1/2`;
const label2 = String.raw`1/4`;
const label3 = String.raw`1/8`;
const label4 = String.raw`1/9`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
