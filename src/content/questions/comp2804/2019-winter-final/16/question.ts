import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You roll a fair red die once and you roll a fair blue die once. These two rolls are independent.
		Consider the events
		
		<ul>
  <li> A = "the sum of the red die and the blue die is 5",</li>
  <li> B = "the result of the red die is even".</li>
		</ul>
		
		Which of the following is correct?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;
const label4 = String.raw`All of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
