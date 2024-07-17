import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 6 times; the flips are independent of each other.
		What is the probability that in these 6 coin flips, the coin comes up heads exactly
		3 times?
`;

const label1 = String.raw`3/16`;
const label2 = String.raw`4/16`;
const label3 = String.raw`5/16`;
const label4 = String.raw`6/16`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
