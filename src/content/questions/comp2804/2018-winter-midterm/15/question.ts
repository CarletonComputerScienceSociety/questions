import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given a fair die and roll it 12 times. Define the event
		[defs]
		  A = "there are exactly two 6's in the sequence of 12 rolls".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 =
  "${12 \\choose 2} \\cdot \\left. 5^{10} \\middle/ 6^{12} \\right.$";
const label2 = "$12^{2} \\cdot \\left. 5^{10} \\middle/ 6^{12} \\right.$";
const label3 =
  "${12 \\choose 2} \\cdot \\left. 5^{12} \\middle/ 6^{12} \\right.$";
const label4 = "$12^{2} \\cdot \\left. 5^{12} \\middle/ 6^{12} \\right.$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
