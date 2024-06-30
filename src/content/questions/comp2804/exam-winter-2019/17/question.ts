import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 8$ be an integer. Consider a uniformly random permutation $a_1,a_2,...,a_n$ of
		the set $\{1,2,...,n\}$. Consider the events
		
		[defs]
		  A = "$a_7$ is the minimum of $a_1,a_2,...,a_7$",
		  B = "$a_6$ is the minimum of $a_1,a_2,...,a_6$".
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
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
