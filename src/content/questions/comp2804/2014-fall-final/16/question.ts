import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We choose an element $x$ uniformly at random from the set $\{1,2,3,\dots,10\}$. Define the events
		[defs]
		  A = "$x$ is even",
		  B = "$x$ is divisible by 3".
		[/defs]
		What is the conditional probability $\Pr(A|B)$?
`;

const label1 = String.raw`3/10`;
const label2 = String.raw`1/3`;
const label3 = String.raw`1/2`;
const label4 = String.raw`2/3`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
