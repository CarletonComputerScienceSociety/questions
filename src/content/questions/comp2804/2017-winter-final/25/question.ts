import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How do you feel about writing an exam on Sunday afternoon?
`;

const label1 = String.raw`I hate it!`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [{ label: label1, correct: true }],
};
