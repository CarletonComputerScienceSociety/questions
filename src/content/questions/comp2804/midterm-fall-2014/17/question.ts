import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Assume you write a multiple-choice exam that consists of 100 questions. For each question, 4 options
		are given, one of which is the correct one. If you answer each of the 100 questions by choosing an
		answer uniformly at random, what is the probability that you have exactly one correct answer?
`;

const label1 = String.raw`$\frac{100}{4^{100}}$`;
const label2 = String.raw`$\frac{3^{99}}{4^{100}}$`;
const label3 = String.raw`$\frac{100 + 3^{99}}{4^{100}}$`;
const label4 = String.raw`$\frac{100 \cdot 3^{99}}{4^{100}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
