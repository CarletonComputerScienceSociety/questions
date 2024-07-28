import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $X = \{1,2,3,\dots,10\}$. Let $Y$ be a uniformly random subset of $X$. Define the events
		<ul>
  <li> A = "$Y$ contains at least 4 elements",</li>
  <li> B = "all elements of $Y$ are even".</li>
		</ul>
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`3/16`;
const label2 = String.raw`4/16`;
const label3 = String.raw`5/16`;
const label4 = String.raw`6/16`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
