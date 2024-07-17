import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 70, in which each character is one of the letters $a, b, c$. How many
		such strings have exactly 12 letters $c$ <em>and</em> exactly 30 letters $b$?
`;

const label1 = "${70 \\choose 12} + {58 \\choose 30}$";
const label2 = "${70 \\choose 12} \\cdot {58 \\choose 30}$";
const label3 = "${70 \\choose 12} \\cdot {58 \\choose 30} \\cdot 2^{28}$";
const label4 = "${70 \\choose 12} \\cdot {58 \\choose 30} \\cdot 3^{28}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
