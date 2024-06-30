import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
How many solutions are there to the equation $x_1 + x_2 + x_3 = 17$, where $x_1 \geq 0$, $x_2 \geq 0$,
		and $x_3 \geq 0$ are integers?
`;

const label1 = "${19 \\choose 16}$";
const label2 = "${19 \\choose 17}$";
const label3 = "${20 \\choose 16}$";
const label4 = "${20 \\choose 17}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
