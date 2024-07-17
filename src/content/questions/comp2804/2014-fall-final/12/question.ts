import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bowl contains 5 blue balls, 4 red balls, and 6 green balls. We choose 2 balls uniformly at random.
		What is the probability that these 2 balls have the same color?
`;

const label1 = String.raw`$\frac{{5 \choose 2} + {4 \choose 2} + {6 \choose 2}}{{15 \choose 2}}$`;
const label2 = String.raw`$\frac{{15 \choose 2}}{{5 \choose 2} + {4 \choose 2} + {6 \choose 2}}$`;
const label3 = String.raw`$\frac{{5 \choose 2}{4 \choose 2}{6 \choose 2}}{{15 \choose 2}}$`;
const label4 = String.raw`$\frac{{15 \choose 2}}{{5 \choose 2}{4 \choose 2}{6 \choose 2}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
