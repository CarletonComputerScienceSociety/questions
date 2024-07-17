import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $X = \{1,2,\dots,100\}$. Let $Y$ be a uniformly random 7-element subset of $X$. Define the event
		[defs]
		  A = "the set $Y$ contains at least one even number".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$1 - (1/2)^{7}$`;
const label2 = String.raw`$(1/2)^{7}$`;
const label3 = String.raw`$1 - \frac{{50 \choose 7}}{{100 \choose 7}}$`;
const label4 = String.raw`$\frac{{50 \choose 7}}{{100 \choose 7}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
