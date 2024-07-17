import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin three times; these flips are independent of each other. These three coin flips
		give us a sequence of length three, where each symbol is $H$ or $T$. Define the events (recall that
		0 is even):
		[defs]
		  A = "the number of $H$ in the sequence is even",
		  B = "the sequence contains at least two consecutive $H$'s".
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
