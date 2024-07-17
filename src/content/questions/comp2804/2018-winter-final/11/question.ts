import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You roll a fair die 18 times; the rolls are independent of each other. What is the probability that
		you roll a 5 exactly three times?
`;

const label1 = "${18 \\choose 3} \\cdot \\left(5 \\middle/ 6 \\right)^{18}$";
const label2 = "$18 \\cdot \\left. 5^{15} \\middle/ 6^{18} \\right.$";
const label3 =
  "${18 \\choose 3} \\cdot \\left. 5^{15} \\middle/ 6^{18} \\right.$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
