import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin independently $n$ times. Define the random variable
		[defs]
		  X = twice the number of heads minus three times the number of tails.
		[/defs]
		What is the expected value of $X$?
`;

const label1 = String.raw`$-n/2$`;
const label2 = String.raw`$n/2$`;
const label3 = String.raw`$-n$`;
const label4 = String.raw`$n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
