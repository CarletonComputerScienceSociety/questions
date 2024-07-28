import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a uniformly random bitstring of length 5. Define the events
		<ul>
  <li> A = "the bitstring contains exactly two 0s",</li>
  <li> B = "the bitstring contains an even number of 0s".</li>
		</ul>
		(Note that zero is even.) What is the conditional probability $\Pr(A|B)$?
`;

const label1 = String.raw`$\left. {5 \choose 2} \middle/ 2^3 \right.$`;
const label2 = String.raw`$\left. {5 \choose 2} \middle/ 2^4 \right.$`;
const label3 = String.raw`$\left. {5 \choose 2} \middle/ 2^5 \right.$`;
const label4 = String.raw`$\left. 2^5 \middle/ {5 \choose 2} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
