import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 5 times; the flips are independent of each other. What is the probability that
		in these 5 coin flips, the coin comes up heads an odd number of times?
`;

const label1 = String.raw`2/3`;
const label2 = String.raw`1/2`;
const label3 = String.raw`1/3`;
const label4 = String.raw`1/4`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
