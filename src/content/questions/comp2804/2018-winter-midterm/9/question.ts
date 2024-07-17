import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the equation
		$$
			x_1 + x_2 + x_3 + x_4 = 33,
		$$
		where $x_1 \geq 0$, $x_2 \geq 0$, $x_3 \geq 0$, $x_4 \geq 0$ are integers. How many solutions does this
		equation have?
`;

const label1 = "${36 \\choose 4}$";
const label2 = "${36 \\choose 3}$";
const label3 = "${37 \\choose 4}$";
const label4 = "${37 \\choose 3}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
