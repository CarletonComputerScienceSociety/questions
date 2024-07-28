import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You choose a uniformly random element, say $x$, from the set $\{1,2,3\}$, and you choose a uniformly
		random element, say $y$, from the same set $\{1,2,3\}$. ($x$ and $y$ are chosen independently of
		each other.) Define the events
		<ul>
  <li> A = "$x$ is odd",</li>
  <li> B = "$x + y$ is odd".</li>
		</ul>
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
