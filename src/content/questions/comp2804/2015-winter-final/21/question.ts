import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a bitstring of length 5, in which each bit is 0 with probability 1/2 (and, thus, 1 with
		probability 1/2), independently of the other bits. Define the random variables $X$ and $Y$ as
		follows:
		<ul>
  <li> X = the number of 0s in this bitstring</li>
		</ul>
		and
		<ul>
  <li> Y = the value of the first bit in this bitstring.</li>
		</ul>
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
