import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Continuing from the previous question, what is the probability that Nika has not practiced on any of the
		actual exam questions?
`;

const label1 = String.raw`0`;
const label2 = String.raw`$\left. {225 \choose 50} \middle/ {250 \choose 50} \right.$`;
const label3 = String.raw`$\left. {225 \choose 25} \middle/ {250 \choose 50} \right.$`;
const label4 = String.raw`$\left. {225 \choose 25} \middle/ {225 \choose 50} \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
