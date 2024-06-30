import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You repeatedly, and independently, roll two fair dice, until the sum of the values of the two dice
		is equal to 12. Define the random variable $X$ to be the number of times you roll the pair of dice.
		What is the expected value of $X$?
`;

const label1 = String.raw`36`;
const label2 = String.raw`30`;
const label3 = String.raw`20`;
const label4 = String.raw`12`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
