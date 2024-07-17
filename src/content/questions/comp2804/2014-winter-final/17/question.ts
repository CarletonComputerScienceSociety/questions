import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $A$ and $B$ be events in a sample space, such that $\Pr(A) = 1/3$, $\Pr(B) = 1/2$,
		and $\Pr(A|B) = 2/5$. What is $\Pr(B|A)$?
`;

const label1 = String.raw`1/5`;
const label2 = String.raw`2/5`;
const label3 = String.raw`3/5`;
const label4 = String.raw`4/5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
