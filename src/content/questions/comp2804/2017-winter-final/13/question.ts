import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin, independently, five times. Define the events
		[defs]
		  A = "the coin comes up heads exactly four times",
		  B = "the fifth coin flip results in heads".
		[/defs]
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`1/3`;
const label2 = String.raw`2/3`;
const label3 = String.raw`2/5`;
const label4 = String.raw`1/4`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
