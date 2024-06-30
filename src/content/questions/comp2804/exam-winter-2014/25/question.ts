import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who discovered the formula
		$$
			1 + 2 + 3 + \dots + n = n(n + 1) / 2
		$$
		when he was a young boy?
`;

const label1 = String.raw`Justin Bieber`;
const label2 = String.raw`Fibonacci`;
const label3 = String.raw`Carl Friedrich Gauss`;
const label4 = String.raw`Simon Pratt`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
