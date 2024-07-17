import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You roll a fair red die and a fair blue die, independently of each other. Let $r$ be the result of
		the red die and let $b$ be the result of the blue die. Define the events
		[defs]
		  A = "$r + b = 6$",
		  B = "$b = 4$".
		[/defs]
		What is $\Pr(B|A)$?
`;

const label1 = String.raw`1/3`;
const label2 = String.raw`1/4`;
const label3 = String.raw`1/5`;
const label4 = String.raw`1/6`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
