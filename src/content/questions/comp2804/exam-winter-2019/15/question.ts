import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a uniformly random permutation $a_1,a_2,a_3,a_4,a_5$ of the set $\{1,2,3,4,5\}$.
		Consider the events
		
		[defs]
		  A = "$a_1$ is odd",
		  B = "$a_5$ is even".
		[/defs]
		
		Which of the following is correct?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;
const label4 = String.raw`All of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
