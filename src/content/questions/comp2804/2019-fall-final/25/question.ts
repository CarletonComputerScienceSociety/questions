import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How do you feel about writing an exam on Friday evening?
`;

const label1 = String.raw`I would rather sit in the pub and have a beer.`;
const label2 = String.raw`I would rather sit in the pub and have a beer.`;
const label3 = String.raw`I would rather sit in the pub and have a beer.`;
const label4 = String.raw`I would rather sit in the pub and have a beer.`;
const label5 = String.raw`I would rather sit in the pub and have a beer.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: true },
    { label: label3, correct: true },
    { label: label4, correct: true },
    { label: label5, correct: true },
  ],
};
