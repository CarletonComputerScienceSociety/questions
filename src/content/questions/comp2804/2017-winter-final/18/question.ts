import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You roll a fair red die and a fair blue die, independently of each other. Define the random
		variables
		<ul>
  <li> X = "the result of the red die",</li>
  <li> Y = "the result of the blue die",</li>
  <li> Z = $\min(X,Y)$.</li>
		</ul>
		What is $\Pr(Z = 2)$?
`;

const label1 = String.raw`5/18`;
const label2 = String.raw`1/6`;
const label3 = String.raw`1/4`;
const label4 = String.raw`1/3`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
