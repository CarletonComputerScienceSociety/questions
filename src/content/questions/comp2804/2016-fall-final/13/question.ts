import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $V$ be a set consisting of 12 even integers and 8 odd integers. We choose a uniformly random
		subset $W$ of $V$ having size 7. Define the event
		<ul>
  <li> A = "exactly 4 of the elements of $W$ are even".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{12 \choose 4}+{8 \choose 3}}{20 \choose 7}$`;
const label2 = String.raw`$\frac{{12 \choose 4}{8 \choose 3}}{20 \choose 7}$`;
const label3 = String.raw`$\frac{{20 \choose 3}{17 \choose 4}}{20 \choose 7}$`;
const label4 = String.raw`$\frac{{20 \choose 4}{16 \choose 3}}{20 \choose 7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
