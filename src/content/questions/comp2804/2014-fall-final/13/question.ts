import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Annie, Boris, and Charlie have random and independent birthdays. (We ignore leap years, so that a
		year has 365 days.) What is the probability that Annie, Boris, and Charlie have the same birthday?
`;

const label1 = String.raw`$\frac{1}{364 \cdot 365}$`;
const label2 = String.raw`$\frac{1}{365^2}$`;
const label3 = String.raw`$\frac{365}{364^{2}}$`;
const label4 = String.raw`$\frac{1}{365^{3}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
