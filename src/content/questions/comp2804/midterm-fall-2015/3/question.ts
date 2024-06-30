import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $A$ be a set of 6 elements and let $B$ be a set of 13 elements. How many one-to-one (i.e.,
		injective) functions $f : A \rightarrow B$ are there?
`;

const label1 = String.raw`$5 \cdot 6 \cdot 7 \cdot 8 \cdot 9 \cdot 10 \cdot 11 \cdot 12 \cdot 13$`;
const label2 = String.raw`$6 \cdot 7 \cdot 8 \cdot 9 \cdot 10 \cdot 11 \cdot 12 \cdot 13$`;
const label3 = String.raw`$7 \cdot 8 \cdot 9 \cdot 10 \cdot 11 \cdot 12 \cdot 13$`;
const label4 = String.raw`$8 \cdot 9 \cdot 10 \cdot 11 \cdot 12 \cdot 13$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
