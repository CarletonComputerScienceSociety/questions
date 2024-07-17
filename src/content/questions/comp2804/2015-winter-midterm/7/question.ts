import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the minimum number of people needed so that we can guarantee that at least three of them
		have the same birthday? (We ignore leap years; thus, a year has 365 days.)
`;

const label1 = String.raw`$365^2$`;
const label2 = String.raw`$365^2 + 1$`;
const label3 = String.raw`$2 \cdot 365$`;
const label4 = String.raw`$2 \cdot 365 + 1$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
