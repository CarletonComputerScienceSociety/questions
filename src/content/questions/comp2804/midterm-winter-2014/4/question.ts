import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a set of size 37, and let $x$, $y$, and $z$ be three distinct elements of $S$. How many subsets
		of $S$ are there that contain $x$ <em>or</em> $y$, but do not contain $z$?
`;

const label1 = String.raw`$2^{36} - 2^{34}$`;
const label2 = String.raw`$2^{36} - 2^{35}$`;
const label3 = String.raw`$2^{37} - 2^{34}$`;
const label4 = String.raw`$2^{37} - 2^{35}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
