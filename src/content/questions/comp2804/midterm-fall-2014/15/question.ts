import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 5 times. Define the events
		[defs]
		  A = "the number of heads is odd"
		[/defs]
		and
		[defs]
		  B = "the number of tails is even".
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`$\Pr(A) = \Pr(B)$`;
const label2 = String.raw`$\Pr(A) < \Pr(B)$`;
const label3 = String.raw`$\Pr(A) > \Pr(B)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
