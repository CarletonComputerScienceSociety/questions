import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We choose an element $x$ uniformly at random from the set $\{1,2,3,...,10\}$. Define the events
		
		[defs]
		  A = "$x$ is even",
		  B = "$1 \leq x \leq 6$".
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
