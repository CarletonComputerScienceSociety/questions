import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You flip a fair coin 7 times. Define the event
		<ul>
  <li> A = "the result of the first flip is equal to the result of the 7-th flip".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{2^5 + 2}{2^7}$`;
const label2 = String.raw`$1/2$`;
const label3 = String.raw`$1/3$`;
const label4 = String.raw`$1/4$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
