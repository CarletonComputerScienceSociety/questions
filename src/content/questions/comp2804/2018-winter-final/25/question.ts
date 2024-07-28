import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Are you happy that this is the last question?
`;

const label1 = String.raw`Yes.`;
const label2 = String.raw`I'm not done yet. Give me moreeeee!`;
const label3 = String.raw`I just wanna pass, mate.`;
const label4 = String.raw`After today, I will no longer be hungry, sleep deprived, or stressed.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: true },
  ],
};
