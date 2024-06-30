import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
I flip two fair and independent coins. If the first coin comes up tails, you lose \$1 (i.e., you win -\$1).
		If the second coin comes up heads, you win \$2. (Thus, if the first coin comes up tails and the second coin
		comes up heads, you win \$1.) Define the random variable $X$ to be the amount of dollars that you win. 
		What is the expected value of $X$?
`;

const label1 = String.raw`2`;
const label2 = String.raw`1`;
const label3 = String.raw`1/4`;
const label4 = String.raw`1/2`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
