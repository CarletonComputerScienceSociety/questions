import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Let $D_1,D_2,D_3$ be the result of rolling a normal $6$-sided die three times.  Define the events
<ul>
  <li>$A = \max\{D_1,D_2,D_3\}=4$
  <li>$B = D_1+D_2+D_3$ is an even number
</ul>
Which of the following is true?`;

const label1 = String.raw`$A$ and $B$ are independent`;
const label2 = String.raw`$A$ and $B$ are not independent`;
const label3 = String.raw`$\Pr(A\mid B)$ is undefined`;
const label4 = String.raw`All of the above`;
const label5 = String.raw`None of the above`;

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
