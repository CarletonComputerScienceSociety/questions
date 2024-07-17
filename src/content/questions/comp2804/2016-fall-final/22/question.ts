import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 7 times; these coin flips are independent of each other. Define the random
		variables
		[defs]
		  X = the number of heads in these 7 coin flips,
		[/defs]
		and
		[defs]
		  Y = the number of tails in these 7 coin flips.
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`The random variables $X$ and $Y$ are independent.`;
const label2 = String.raw`The random variables $X$ and $Y$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
