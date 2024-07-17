import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
I flip a fair coin, independently, $n$ times. For each heads, you win \$3, whereas for each tails,
		you lose \$1. Define the random variable $X$ to be the amount of dollars that you win. What is the
		expected value of $X$?
`;

const label1 = String.raw`$n/2$`;
const label2 = String.raw`$n$`;
const label3 = String.raw`$3n/2$`;
const label4 = String.raw`$2n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
