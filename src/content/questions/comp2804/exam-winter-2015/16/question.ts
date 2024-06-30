import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a bitstring of length 77, in which each bit is 0 with probability 1/3 (and, thus, 1 with
		probability 2/3), independently of the other bits. What is the probability that there are exactly
		15 0s in this bitstring?
`;

const label1 = "${77 \\choose 15}(1/3)^{15}(2/3)^{62}$";
const label2 = "${77 \\choose 15}((1/3)^{15} + (2/3)^{62})$";
const label3 = "${77 \\choose 15}(1/3)^{62}(2/3)^{15}$";
const label4 = "${77 \\choose 15}((1/3)^{62} + (2/3)^{15})$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
