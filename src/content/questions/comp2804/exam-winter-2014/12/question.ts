import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We choose a subset of $\{1,2,3,4,5\}$ uniformly at random. What is the probability that this
		subset has size 3?
`;

const label1 = String.raw`4/16`;
const label2 = String.raw`4/32`;
const label3 = String.raw`5/16`;
const label4 = String.raw`5/32`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
