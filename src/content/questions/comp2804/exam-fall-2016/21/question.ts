import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a coin that comes up heads with probability 1/7 and comes up tails with probability 6/7.
		You flip this coin once. If it comes up heads, you win \$5. If it comes up tails, you win \$2. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`7/2`;
const label2 = String.raw`32/7`;
const label3 = String.raw`17/7`;
const label4 = String.raw`7/17`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
