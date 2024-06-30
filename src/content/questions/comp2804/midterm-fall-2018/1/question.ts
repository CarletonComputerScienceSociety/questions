import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 3$ be an integer and let $S$ be a set consisting of $n$ elements. How many ordered
		triples $(A, B, C)$ are there for which $A \subseteq S$, $B \subseteq S$, $C \subseteq S$, and $A$, $B$,
		and $C$ are pairwise disjoint?
`;

const label1 = String.raw`$2^n$`;
const label2 = String.raw`$3^n$`;
const label3 = String.raw`$4^n$`;
const label4 = String.raw`$5^n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
