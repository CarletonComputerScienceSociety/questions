import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given a uniformly random bitstring of length five. Define the events
		<ul>
  <li> A = "the bitstring contains at most four 1's",</li>
  <li> B = "the bitstring contians an odd number of 1's".</li>
		</ul>
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`12/16`;
const label2 = String.raw`13/16`;
const label3 = String.raw`14/16`;
const label4 = String.raw`15/16`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
