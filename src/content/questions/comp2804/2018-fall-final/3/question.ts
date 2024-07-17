import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 70, in which each character is one of the letters $a, b, c$. How many
		such strings have exactly 12 letters $c$ <em>or</em> exactly 30 letters $b$?
`;

const label1 = "${70 \\choose 12} + {70 \\choose 30} - {58 \\choose 30}$";
const label2 =
  "${70 \\choose 12} \\cdot 2^{58} + {70 \\choose 30} \\cdot 2^{40}$";
const label3 =
  "${70 \\choose 12} \\cdot 2^{58} + {70 \\choose 30} \\cdot 2^{40} - {70 \\choose 12} \\cdot {58 \\choose 30}$";
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
