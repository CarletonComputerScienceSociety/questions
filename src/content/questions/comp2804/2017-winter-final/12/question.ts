import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $X = \{1,2,3,\dots,10\}$. We choose, uniformly at random, a subset $Y$ of $X$, where $Y$ has
		size 5. Define the events
		<ul>
  <li> A = "1 is an element of $Y$",</li>
  <li> B = "7 is an element of $Y$".</li>
		</ul>
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`4/8`;
const label2 = String.raw`5/8`;
const label3 = String.raw`4/9`;
const label4 = String.raw`5/9`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
