import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is Elisa Kazan's favorite drink?
`;

const label1 = String.raw`Beer`;
const label2 = String.raw`Cider`;
const label3 = String.raw`Hot chocolate`;
const label4 = String.raw`Poutine`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
