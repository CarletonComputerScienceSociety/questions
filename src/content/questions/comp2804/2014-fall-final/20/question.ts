import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Assume you answer the first question in this exam by choosing one of the four answers uniformly at random.
		You answer the second question by choosing, again uniformly at random, one of the three answers you did not choose in
		the first question. What is the probability that you answer the second question correctly?
`;

const label1 = String.raw`$\frac{1}{3}$`;
const label2 = String.raw`$\frac{1}{4}$`;
const label3 = String.raw`$\frac{1}{4} \cdot \frac{1}{3} + \frac{3}{4} \cdot \frac{1}{4}$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
