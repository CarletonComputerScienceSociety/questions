import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a uniformly random bitstring of length 5. Define the events
		[defs]
		  A = "the bitstring contains an odd number of 0s"
		[/defs]
		and
		[defs]
		  B = "the first three bits in the bitstring are 111".
		[/defs]
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
