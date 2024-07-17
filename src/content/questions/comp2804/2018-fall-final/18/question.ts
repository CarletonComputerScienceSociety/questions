import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A red box contains the numbers 0, 1, and 2, and a blue box also contains the numbers 0, 1, and 2.
		You choose a uniformly random element from the red box and a uniformly random element from the blue
		box; these two choices are independent of each other. Define the random variables
		[defs]
		  X = the number you choose from the red box,
		  Y = the number you choose from the blue box,
		  Z = $\max(X, Y)$.
		[/defs]
		What is the expected value $\mathbb{E}(Z)$ of the random variable $Z$?
`;

const label1 = String.raw`9/13`;
const label2 = String.raw`13/9`;
const label3 = String.raw`8/9`;
const label4 = String.raw`9/8`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
