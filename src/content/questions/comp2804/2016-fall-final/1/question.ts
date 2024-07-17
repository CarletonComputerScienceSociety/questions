import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a set $A$ having size 7 and a set $B$ having size 9. How many functions $f : A \rightarrow B$
		are there?
`;

const label1 = String.raw`$7^9$`;
const label2 = String.raw`$9^7$`;
const label3 = String.raw`$7!$`;
const label4 = String.raw`$9!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
