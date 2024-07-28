import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $X = \{1,2,\dots,100\}$. We choose a uniformly random subset $Y$ of $X$ having size 17. Define the event
		<ul>
  <li> A = "$4 \in Y$ or $7 \in Y$".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$1 - \frac{{98}\choose{15}}{{100}\choose{17}}$`;
const label2 = String.raw`$1 - \frac{{100 \choose 2} \cdot {98 \choose 15}}{100 \choose 17}$`;
const label3 = String.raw`$\frac{2 \cdot {99 \choose 16}}{100 \choose 17}$`;
const label4 = String.raw`$\frac{2 \cdot {99 \choose 16} - {98 \choose 15}}{100 \choose 17}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
