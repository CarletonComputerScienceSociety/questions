import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 40 characters, where each character is one of the letters $a$, $b$, and
		$c$. How many such strings contain at least three $a$'s?
`;

const label1 = "${40 \\choose 3}$";
const label2 =
  "$3^{40} - 1 - 40 \\cdot 3^{39} - {40 \\choose 2} \\cdot 3^{38}$";
const label3 =
  "$3^{40} - 2^{40} - 40 \\cdot 2^{39} - {40 \\choose 2} \\cdot 2^{38}$";
const label4 =
  "$3^{40} - 2^{40} - 40 \\cdot 2^{39} - {40 \\choose 2} \\cdot 2^{38} -$ $ {40 \\choose 3} \\cdot 2^{37}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
