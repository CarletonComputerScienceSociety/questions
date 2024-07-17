import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $b \geq 1$ and $g \geq 1$ be integers. Consider $b$ boys and $g$ girls. How many ways are there
		to arrange these kids on a line such that the leftmost kid is a girl or the rightmost kid is a boy?
`;

const label1 = String.raw`$(b+g)!$`;
const label2 = String.raw`$(b+g)! - b \cdot (b+g-1)! -\ $ $ g \cdot (b+g-1)!$`;
const label3 = String.raw`$g \cdot (b+g-1)! + b \cdot (b+g-1)!\ -$ $ b \cdot g \cdot (b+g-1)!$`;
const label4 = String.raw`$g \cdot (b+g-1)! + b \cdot (b+g-1)!\ -$ $ b \cdot g \cdot (b+g-2)!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
