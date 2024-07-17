import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider 10 boxes and 10 balls. We throw each ball, uniformly, in a random box. What is the
		probability that, after we have thrown all 10 balls, none of the 10 boxes is empty?
`;

const label1 = String.raw`$\frac{10!}{10^{10}}$`;
const label2 = String.raw`$\frac{10^{10}}{10!}$`;
const label3 = String.raw`$1 - \frac{10 \cdot (9/10)^{10}}{10^{10}}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
