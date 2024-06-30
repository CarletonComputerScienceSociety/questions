import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bowl contains 5 red balls and 7 blue balls. We choose a uniformly random subset of 3 balls. Define the event
		[defs]
		  A = "exactly 2 of the chosen balls are red".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{5 \choose 2}}{{12 \choose 3}}$`;
const label2 = String.raw`$\frac{5 \cdot {7 \choose 2}}{{12 \choose 3}}$`;
const label3 = String.raw`$\frac{{5 \choose 2} \cdot 7}{{12 \choose 3}}$`;
const label4 = String.raw`$\frac{{7 \choose 2}}{{12 \choose 3}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
