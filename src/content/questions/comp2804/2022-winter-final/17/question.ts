import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $A$ and $B$ be two independent events in some probability space. You are told that $\Pr(A)=1/3$ and that $\Pr(B)=1/2$. What is $\Pr(A\cup B)$?`;

const label1 = String.raw`$1/4$`;
const label2 = String.raw`$1/3$`;
const label3 = String.raw`$1/2$`;
const label4 = String.raw`$2/3$`;
const label5 = String.raw`$3/4$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
    { label: label5, correct: false },
  ],
};
