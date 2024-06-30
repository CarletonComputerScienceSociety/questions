import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How do you feel about writing an exam on Friday evening?
`;

const label1 = String.raw`I would rather sit in the pub and have a beer.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [{ label: label1, correct: true }],
};
