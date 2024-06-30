import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You repeatedly and independently roll a fair die until the result of the roll is divisible by 3.
		Define the random variable $X$ to be the number of times you roll the die. For example, if the
		results of the rolls are 4, 5, 1, 4, 3, then $X=5$. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`2`;
const label2 = String.raw`3`;
const label3 = String.raw`4`;
const label4 = String.raw`5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
