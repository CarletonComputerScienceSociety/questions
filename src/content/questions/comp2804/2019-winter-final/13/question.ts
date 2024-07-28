import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 6 times; the flips are independent of each other. Consider the events
		
		<ul>
  <li> A = "exactly 3 flips result in heads",</li>
  <li> B = "at least 2 flips result in heads".</li>
		</ul>
		
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`17/57`;
const label2 = String.raw`18/57`;
const label3 = String.raw`19/57`;
const label4 = String.raw`20/57`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
