import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $A = \{1,2,3,\dots,100\}$. Let $x$, $y$, and $z$ be elements in $A$ that are chosen independently
		and uniformly at random. What is the probability that $x = y = z$?
`;

const label1 = String.raw`$\frac{1}{100}$`;
const label2 = String.raw`$\frac{1}{100 \cdot 99}$`;
const label3 = String.raw`$\frac{1}{100 \cdot 100}$`;
const label4 = String.raw`$\frac{1}{{100 \choose 2}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
