import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is Simon Pratt’s favorite drink?
`;

const label1 = String.raw`Herbal tea`;
const label2 = String.raw`India Pale Ale`;
const label3 = String.raw`Poutine`;
const label4 = String.raw`None of the above, because Simon doesn't like beer`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
