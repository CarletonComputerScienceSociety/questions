import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Is the following true or false? In any group of 900 people, there must be at least three people that
		have the same birthday.
`;

const label1 = String.raw`True`;
const label2 = String.raw`False`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
  ],
};
