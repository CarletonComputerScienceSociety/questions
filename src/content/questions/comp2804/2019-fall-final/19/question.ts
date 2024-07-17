import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
When a couple has a child, this child is a boy with probability 1/2 and a girl with probability 1/2,
		independent of the sex of previous children. A couple stops having children as soon as they have a child
		that has the same sex as their first child. Define the events
		
		[defs]
		  A = "the second child is a boy",
		  B = "the couple has at least three children and the third child is a boy".
		[/defs]
		
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
