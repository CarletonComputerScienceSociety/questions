import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the equation
		$$
			x_1 + x_2 + x_3 + x_4 + x_5 = 17.
		$$
		How many solutions $(x_1, x_2, x_3, x_4, x_5)$ does this equation have, where
		$x_1 \geq 0$, $x_2 \geq 0$, $x_3 \geq 0$, $x_4 \geq 0$, and $x_5 \geq 0$ are all integers?
`;

const label1 = "${22 choose 5}$";
const label2 = "${22 choose 4}$";
const label3 = "${21 choose 5}$";
const label4 = "${21 choose 4}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
