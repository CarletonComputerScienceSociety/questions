import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a uniformly random permutation of the set $\{1,2,\dots,77\}$. Define the event
		[defs]
		  A = "in the permutation, both 8 and 4 are to the left of 3".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`1/2`;
const label2 = String.raw`1/3`;
const label3 = String.raw`1/4`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
