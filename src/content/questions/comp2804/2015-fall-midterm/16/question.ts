import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You roll a fair 6-sided die twice. Define the events
		<ul>
  <li> A = "the sum of the results of the two rolls is 7"</li>
		</ul>
		and
		<ul>
  <li> B = "the result of the first roll is 3".</li>
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
