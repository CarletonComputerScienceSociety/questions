import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length 85, in which each character is one of the letters $a,b,c,d$. <br>
		How many such strings have exactly 15 letters $a$ or exactly 30 letters $d$?
`;

const label1 =
  "${85 \\choose 15} \\cdot 3^{70} + {85 \\choose 30} \\cdot 3^{55}$";
const label2 =
  "${85 \\choose 15} \\cdot 3^{70} + {85 \\choose 30} \\cdot 3^{55} - {85 \\choose 15} \\cdot {70 \\choose 30} \\cdot 2^{40}$";
const label3 =
  "${85 \\choose 15} \\cdot 4^{70} + {85 \\choose 30} \\cdot 4^{55}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
