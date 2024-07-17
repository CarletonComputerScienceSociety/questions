import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a uniformly random 2-element subset of $\{1,2,3,4\}$, and let $X$ be the number of
		elements of $S$ that are even. What is the expected value $\mathbb{E}(X)$ of $X$?
`;

const label1 = String.raw`1`;
const label2 = String.raw`3/2`;
const label3 = String.raw`2`;
const label4 = String.raw`5/2`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
