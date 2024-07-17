import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many solutions are there to the equation
		$$
			x_1 + x_2 + x_3 + x_4 + x_5 = 28,
		$$
		where $x_1 \geq 0$, $x_2 \geq 0$, $x_3 \geq 0$, $x_4 \geq 0$, and
		<span class="sticky">$x_5 \geq 0$ are</span> integers?
`;

const label1 = "${33 \\choose 4}$";
const label2 = "${33 \\choose 5}$";
const label3 = "${32 \\choose 4}$";
const label4 = "${32 \\choose 5}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
