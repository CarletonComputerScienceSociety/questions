import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a square with sides of length 3. Assume this square contains 10 points. Which of the
		following is true?
`;

const label1 = String.raw`At least two of these $n$ points are at distance at most $1$.`;
const label2 = String.raw`At least two of these $n$ points are at distance at most $\left. 1 \middle/ \sqrt{2} \right.$.`;
const label3 = String.raw`At least two of these $n$ points are at distance at most $\sqrt{2}$.`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
