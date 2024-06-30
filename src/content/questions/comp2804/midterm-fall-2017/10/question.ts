import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring is called 01-<em>free</em> if it does not contain 01.
		Let $n \geq 2$ be an integer. How many 01-free bitstrings of length $n$ are there?
`;

const label1 = String.raw`$n-1$`;
const label2 = String.raw`$n$`;
const label3 = String.raw`$n+1$`;
const label4 = String.raw`$n+2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
