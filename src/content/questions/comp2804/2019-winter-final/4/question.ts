import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the sets $A = \{1,2,...,10\}$ and $B = \{1,2,...,14\}$.
		Let $S = \{(x,y) : x \in A, y \in B\}$.
		An element $(x,y)$ of $S$ is <em>awesome</em>, if $x$ is even or $y$ is even.
		What is the number of awesome elements in $S$?
`;

const label1 = String.raw`104`;
const label2 = String.raw`105`;
const label3 = String.raw`106`;
const label4 = String.raw`107`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
