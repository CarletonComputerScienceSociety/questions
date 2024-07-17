import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S = \{1,2,3,4,5,6,7\}$. You choose a uniformly random 3-element subset $X$ of $S$. Thus,
		each 3-element subset of $S$ has a probability of $\left. 1 \middle/ {7 \choose 3} \right.$ of being $X$.
		Define the event
		[defs]
		  A = "4 is an element of $X$".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`7/15`;
const label2 = String.raw`15/7`;
const label3 = String.raw`3/7`;
const label4 = String.raw`7/3`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
