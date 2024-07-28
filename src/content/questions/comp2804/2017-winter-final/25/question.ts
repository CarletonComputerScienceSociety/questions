import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How do you feel about writing an exam on Sunday afternoon?
`;

const label1 = String.raw`I hate it!`;
const label2 = String.raw`Is it the afternoon? I've lost track of time.`;
const label3 = String.raw`I enjoy it!`;
const label4 = String.raw`Now, I can rest in peace.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
