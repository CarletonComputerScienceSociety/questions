import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $A$ having size 7 and a set $B$ having size 9. How many one-to-one functions
		$f : A \rightarrow B$ are there?
`;

const label1 = String.raw`$\frac{7!}{2}$`;
const label2 = String.raw`$\frac{7!}{3}$`;
const label3 = String.raw`$\frac{9!}{2}$`;
const label4 = String.raw`$\frac{9!}{3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
