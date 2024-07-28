import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $X = \{1,2,...,20\}$. You choose a uniformly random 7-element subset $Y$ of $X$. Define the
		event
		<ul>
  <li> A = "3 is an element of $Y$ or 13 is an element of $Y$".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{19 \choose 6} + {19 \choose 6}}{{20 \choose 7}}$`;
const label2 = String.raw`$\frac{2 \cdot {20 \choose 6} - {20 \choose 5}}{{20 \choose 7}}$`;
const label3 = String.raw`$\frac{2 \cdot {19 \choose 7} - {18 \choose 7}}{{20 \choose 7}}$`;
const label4 = String.raw`$\frac{2 \cdot {19 \choose 6} - {18 \choose 5}}{{20 \choose 7}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
