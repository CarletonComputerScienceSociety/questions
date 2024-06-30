import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We roll a pair of fair dice repeatedly and independently, and stop as soon as the sum of the numbers
		for the pair is 7. Define the random variable $X$ to be the number of times we roll the dice. (In
		one roll, we roll a pair of dice.) What is the expected value of $X$?
`;

const label1 = String.raw`4`;
const label2 = String.raw`5`;
const label3 = String.raw`6`;
const label4 = String.raw`7`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
