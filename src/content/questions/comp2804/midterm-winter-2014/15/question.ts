import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We choose a bitstring of length 25 uniformly at random. What is the probability that this string
		contains at least two 1s?
`;

const label1 = String.raw`$1 - (1/2)^{25} - 25(1/2)^{25}$`;
const label2 = String.raw`$1 + (1/2)^{25} - 25(1/2)^{25}$`;
const label3 = String.raw`$\sum_{k=2}^{25} {{25}\choose{k}}(1/2)^{k}$`;
const label4 = String.raw`none of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
