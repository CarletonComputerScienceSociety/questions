import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 40 characters, where each character is an element of $\{a,b,c,d\}$.
		How many such strings contain exactly five $a$'s or exactly five $c$'s?
`;

const label1 =
  "$2 \\cdot {40 \\choose 5} \\cdot 3^{35} - {40 \\choose 5} \\cdot {35 \\choose 5} \\cdot 2^{30}$";
const label2 = "$2 \\cdot {40 \\choose 5} \\cdot 3^{35}$";
const label3 =
  "${40 \\choose 5} + {35 \\choose 5} - {40 \\choose 5} \\cdot {35 \\choose 5}$";
const label4 =
  "$2 \\cdot {40 \\choose 5} - {40 \\choose 5} \\cdot {35 \\choose 5}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
