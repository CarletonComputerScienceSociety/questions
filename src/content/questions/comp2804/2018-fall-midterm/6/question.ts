import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be a subset of the set $\{1,2,3,\dots,50\}$. <br>
		What is the minimum size of this subset $S$, such that there must be at least two elements in $S$ whose sum is equal to 51?
`;

const label1 = String.raw`25`;
const label2 = String.raw`26`;
const label3 = String.raw`27`;
const label4 = String.raw`28`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
