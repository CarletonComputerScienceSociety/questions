import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider two events $A$ and $B$ in a sample space $S$. You are given that $\Pr(B) = 2/3$ and
		$\Pr(A|B) = 4/5$. What is $\Pr(A \cap B)$?
`;

const label1 = String.raw`5/15`;
const label2 = String.raw`6/15`;
const label3 = String.raw`7/15`;
const label4 = String.raw`8/15`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
