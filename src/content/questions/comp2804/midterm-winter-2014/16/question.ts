import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider three people, each one having a uniformly random birthday (out of 365 days; we ignore leap
		years). What is the probability that at least two of them have the same birthday?
`;

const label1 = String.raw`$1 - \frac{365^2}{364 \cdot 363}$`;
const label2 = String.raw`$1 - \frac{364 \cdot 363}{365^2}$`;
const label3 = String.raw`$1 - \left. {3 \choose 2} \middle/ 365^3 \right.$`;
const label4 = String.raw`$1 - \left. \bigl\{ {3\choose 2} + {3 \choose 3} \bigr\} \middle/ 365^3 \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
