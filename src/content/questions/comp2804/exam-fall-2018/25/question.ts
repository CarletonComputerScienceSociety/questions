import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who discovered the Vandermonde Identity?
`;

const label1 = String.raw`Professor Identity`;
const label2 = String.raw`Donald Trump`;
const label3 = String.raw`Alexandre-Théophile Vandermonde`;
const label4 = String.raw`Justin Bieber`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
