import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 7$ and $k \geq 1$ be integers, let $A$ be the set of all bitstrings of length $n$ that
		contain exactly seven 0s, and let $B$ be the set of all bitstrings of length $k$ that contain at
		least one 1. Assume there exists a one-to-one function $f : A \rightarrow B$. Which of the following
		is true?
`;

const label1 = String.raw`$2^k - 1 < {n \choose 7}$`;
const label2 = String.raw`$2^k - 1 \geq {n \choose 7}$`;
const label3 = String.raw`$2^k - 1 < \left. 2^n \middle/ {n \choose n-7} \right.$`;
const label4 = String.raw`$2^k - 1 \geq \left. 2^n \middle/ {n \choose n-7} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
