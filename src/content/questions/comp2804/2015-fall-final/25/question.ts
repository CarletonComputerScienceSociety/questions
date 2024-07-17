import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Who discovered Newton's \binomial Theorem?
`;

const label1 = String.raw`Professor \binomial.`;
const label2 = String.raw`Justin Bieber.`;
const label3 = String.raw`Isaac Newton.`;
const label4 = String.raw`Professor G. Ruesome (the guy teaching COMP 9999).`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
