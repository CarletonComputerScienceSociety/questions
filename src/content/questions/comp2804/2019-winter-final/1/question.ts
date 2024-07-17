import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 85, in which each character is one of the letters $a, b, c, d$.
		How many such strings have exactly 5 letters $c$?
`;

const label1 = "${85 \\choose 5} \\cdot 3^{80}$";
const label2 = "${85 \\choose 5} \\cdot 3^{85}$";
const label3 = "${85 \\choose 5} \\cdot 4^{80}$";
const label4 = "${85 \\choose 5} \\cdot 4^{85}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
