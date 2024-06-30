import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What does $2^{n} - 1 - n - {n \choose 2}$ count?
`;

const label1 = String.raw`The number of bitstrings of length $n$ that have at least two 1's.`;
const label2 = String.raw`The number of bitstrings of length $n$ that have at most two 1's.`;
const label3 = String.raw`The number of subsets of a set of size $n$ that have size at least two.`;
const label4 = String.raw`The number of subsets of a set of size $n$ that have size at least three.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
