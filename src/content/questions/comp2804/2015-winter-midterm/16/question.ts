import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 11 times. Define the events
		<ul>
  <li> A = "the number of heads is odd"</li>
		</ul>
		and
		<ul>
  <li> B = "the number of tails is even".</li>
		</ul>
		Which of the following is true?
`;

const label1 = String.raw`$\Pr(A) = \Pr(B)$`;
const label2 = String.raw`$\Pr(A) < \Pr(B)$`;
const label3 = String.raw`$\Pr(A) > \Pr(B)$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
