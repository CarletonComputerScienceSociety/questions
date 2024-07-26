import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`How do you feel about writing an exam on a Friday afternoon?`;

const label1 = String.raw`I haven't slept in 4 days`;
const label2 = String.raw`The Mission.. The Nightmares... They're... Finally... Over...`;
const label3 = String.raw`Honestly, pretty pog way to end the week`;
const label4 = String.raw`This is what got me addicted to coffee`;
const label5 = String.raw`Watching League of Legends got me through it`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: true },
    { label: label5, correct: true },
  ],
};
