import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $S$ be a set of $m+w$ people, $m\ge 10$ of which are men and $w\ge 10$ of which are women.  What does
\[
	\sum_{k=2}^{10} \binom{m}{m-k}\cdot\binom{w}{10-k}
\]
count?`;

const label1 = String.raw`The number $10$-element subsets of $S$ that include at least $2$ women?`;
const label2 = String.raw`The number $10$-element subsets of $S$ that include at least $2$ men?`;
const label3 = String.raw`The number subsets of $S$ of size at most $10$ that include at least $2$ women?`;
const label4 = String.raw`The number subsets of $S$ of size at most $10$ that include at least $2$ men?`;
const label5 = String.raw`None of the Above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
