import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Is the following statement true or false?
For any random variable $X$, $\mathbb{E}(X^2) = \mathbb{E}(X)\cdot \mathbb{E}(X)$.`;

const label1 = String.raw`The statement is true`;
const label2 = String.raw`The statement is false`;
const label3 = String.raw`The statement is neither true nor false`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
