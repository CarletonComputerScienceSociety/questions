import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many solutions are there to the equation $x_1 + x_2 + x_3 = 13$, where $x_1 \geq 0$, $x_2 \geq 0$,
		$x_3 \geq 0$ are integers?
`;

const label1 = "${13 \\choose 2}$";
const label2 = "${14 \\choose 2}$";
const label3 = "${15 \\choose 2}$";
const label4 = "${16 \\choose 2}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
