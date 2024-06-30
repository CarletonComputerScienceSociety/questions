import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a coin that comes up heads with probability 1/5 and comes up tails with probability 4/5.
		You flip this coin twice, independently of each other. For each heads, you win \$100. For each tails, you win \$50. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`80`;
const label2 = String.raw`100`;
const label3 = String.raw`120`;
const label4 = String.raw`140`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
