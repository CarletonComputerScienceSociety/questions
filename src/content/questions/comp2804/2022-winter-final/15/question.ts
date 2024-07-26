import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $\pi_1,\ldots,\pi_{20}$ be a random permutation of $\{1,\ldots,20\}$.  Define the events:
$    A = \pi_{10}>\pi_{11} $
and
$    B = \pi_{11} \gt \pi_{12} $
Which of the following is true?`;

const label1 = String.raw`$\Pr(A\cap B) < \Pr(A)\cdot\Pr(B)$`;
const label2 = String.raw`$\Pr(A\cap B) = \Pr(A)\cdot\Pr(B)$`;
const label3 = String.raw`$\Pr(A\cap B) > \Pr(A)\cdot\Pr(B)$`;
const label4 = String.raw`$\Pr(A\mid B)$ is undefined`;
const label5 = String.raw`None of the above`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
