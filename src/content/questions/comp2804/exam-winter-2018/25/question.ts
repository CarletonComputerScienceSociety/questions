import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Are you happy that this is the last question?
`;

const label1 = String.raw`Yes.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [{ label: label1, correct: true }],
};
