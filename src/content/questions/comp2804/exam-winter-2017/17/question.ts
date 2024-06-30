import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a uniformly random permutation of the set $\{1,2,\dots,50\}$. Define the event
		[defs]
		  A = "in the permutation, both 8 and 4 are to the left of both 1 and 2".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`1/3`;
const label2 = String.raw`2/3`;
const label3 = String.raw`1/5`;
const label4 = String.raw`1/6`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
